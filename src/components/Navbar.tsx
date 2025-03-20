
import { Link, useLocation } from "react-router-dom";
import { Lamp } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    // Get saved theme from localStorage or default to dark
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setTheme("light");
      document.documentElement.classList.add("light");
    } else {
      setTheme("dark");
      document.documentElement.classList.remove("light");
    }
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      localStorage.setItem("theme", "light");
      document.documentElement.classList.add("light");
    } else {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.remove("light");
    }
  };

  if (!mounted) return null;

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-sm",
      scrolled ? "bg-background/80 border-b border-border" : "bg-transparent"
    )}>
      <div className="wrapper py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-mono font-semibold opacity-90 hover:opacity-100 transition-opacity">
          <span className="px-3 py-1 bg-secondary rounded">oscar</span>
        </Link>
        
        <nav className="flex items-center space-x-6">
          <NavLink to="/" active={location.pathname === "/"}>Om mig</NavLink>
          <NavLink to="/projects" active={location.pathname === "/projects"}>Projekt</NavLink>
          <NavLink to="/blog" active={location.pathname === "/blog"}>Blogg</NavLink>
          <NavLink to="/experience" active={location.pathname === "/experience"}>Erfarenhet</NavLink>
          
          <button 
            className="ml-2 p-2 rounded-full hover:bg-secondary/80 transition-colors"
            aria-label="Växla tema"
            onClick={toggleTheme}
          >
            <Lamp className="w-5 h-5" />
          </button>
        </nav>
      </div>
    </header>
  );
}

interface NavLinkProps {
  to: string;
  active: boolean;
  children: React.ReactNode;
}

function NavLink({ to, active, children }: NavLinkProps) {
  return (
    <Link 
      to={to} 
      className={cn(
        "link-underline text-sm font-medium tracking-wide transition-colors hover:text-white",
        active ? "text-white link-active" : "text-muted-foreground"
      )}
    >
      {children}
    </Link>
  );
}
