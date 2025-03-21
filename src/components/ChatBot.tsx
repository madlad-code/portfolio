import { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send } from "lucide-react";

interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

const INITIAL_MESSAGE: Message = {
  role: 'assistant',
  content: `Hej! Jag är din AI-assistent som kan hjälpa dig med frågor om Oscars bakgrund inom militärteknik, mjukvaruutveckling och framtida tekniktrender. Vad kan jag hjälpa dig med?`
};

const SYSTEM_PROMPT = `VIKTIGT - Du är en AI-assistent för Oscars portfolio. FÖLJ DESSA REGLER EXAKT:

FORMATERING:
- Svara med ren text utan någon formatering
- Skriv ALDRIG \\boxed{} eller liknande
- Använd INTE markdown eller andra markörer
- Skriv INTE prefix som "boxed:", "json:" etc.
- Skriv svaret direkt som vanlig text

SPRÅK & INNEHÅLL:
- Svara på svenska (engelska endast om specifikt efterfrågat)
- Hänvisa personliga frågor till Oscar direkt
- Var kortfattad och tydlig
- Använd endast information från webbsidan
- Skriv som i en normal konversation`;

// Funktion för att ta bort all formatering från svaret
const cleanResponse = (text: string): string => {
  // Ta bort LaTeX-formatering
  text = text.replace(/\\boxed\s*{([^}]*)}/g, '$1');
  text = text.replace(/\\boxed\s*\[([^\]]*)\]/g, '$1');
  text = text.replace(/\\[a-zA-Z]+\s*{([^}]*)}/g, '$1');
  text = text.replace(/\\begin\{[^}]*\}|\\\end\{[^}]*\}/g, '');
  
  // Ta bort markdown
  text = text.replace(/```[\s\S]*?```/g, '');
  text = text.replace(/`([^`]*)`/g, '$1');
  text = text.replace(/\*\*([^*]*)\*\*/g, '$1');
  text = text.replace(/\*([^*]*)\*/g, '$1');
  text = text.replace(/\[([^\]]*)\]\([^)]*\)/g, '$1');
  
  // Ta bort prefix och formatering
  text = text.replace(/^(boxed|json|markdown|text|output|response|answer):\s*/i, '');
  text = text.replace(/^```\w*\s*|\s*```$/g, '');
  
  // Ta bort LaTeX-kommandon
  text = text.replace(/\\\w+(\{[^}]*\}|\[[^\]]*\])?/g, '');
  
  // Ta bort överflödiga mellanslag och radbrytningar
  text = text.trim().replace(/\s+/g, ' ');
  
  return text;
};

export function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { role: 'user', content: input } as Message;
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
          'HTTP-Referer': window.location.origin,
          'X-Title': 'Personal Portfolio Chatbot'
        },
        body: JSON.stringify({
          model: 'deepseek/deepseek-r1-zero:free',
          messages: [
            { 
              role: 'system', 
              content: SYSTEM_PROMPT
            },
            ...messages,
            userMessage
          ].map(msg => ({
            role: msg.role,
            content: msg.content
          })),
          temperature: 0.7,
          max_tokens: 1000,
          response_format: { type: "text" }
        })
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const data = await response.json();
      const cleanedContent = cleanResponse(data.choices[0].message.content);
      const assistantMessage = {
        role: 'assistant',
        content: cleanedContent
      } as Message;

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Ett fel uppstod. Försök igen om en stund.'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-8 animate-fade-in animate-delay-300">
      <Card className="w-full flex flex-col p-6 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold tracking-tight">AI-Assistent</h3>
        </div>
        
        <ScrollArea className="flex-1 h-[400px] pr-4 mb-4" ref={scrollAreaRef}>
          <div className="space-y-4">
            {messages.map((message, i) => (
              <div
                key={i}
                className={`flex ${
                  message.role === 'assistant' ? 'justify-start' : 'justify-end'
                } ${i === 0 ? 'mb-6' : ''}`}
              >
                <div
                  className={`rounded-lg px-4 py-2.5 max-w-[85%] ${
                    message.role === 'assistant'
                      ? 'bg-muted text-muted-foreground'
                      : 'bg-primary text-primary-foreground'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-muted rounded-lg px-4 py-2.5 text-muted-foreground">
                  <span className="inline-block animate-pulse">Tänker...</span>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        <form onSubmit={handleSubmit} className="flex gap-3">
          <Input
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Ställ en fråga..."
            disabled={isLoading}
            className="flex-1"
          />
          <Button type="submit" disabled={isLoading} size="icon">
            <Send className="h-4 w-4" />
            <span className="sr-only">Skicka meddelande</span>
          </Button>
        </form>
      </Card>
    </div>
  );
}
