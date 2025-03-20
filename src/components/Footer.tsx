
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-24 pb-8 border-t border-border">
      <div className="wrapper py-6 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
        <div className="flex items-center space-x-4">
          <Link to="/" className="font-mono opacity-80 hover:opacity-100 transition-opacity">
            <span className="px-2 py-1 bg-secondary rounded text-sm">eke</span>
          </Link>
          <span className="text-xs">
            Copyright © Victor Eke {currentYear} All rights Reserved
          </span>
        </div>
        
        <div className="mt-4 md:mt-0 flex items-center space-x-3">
          <TechButton name="Sanity" />
          <span className="text-xs">•</span>
          <TechButton name="Next.js" />
          <span className="text-xs">•</span>
          <TechButton name="Vercel" />
        </div>
      </div>
    </footer>
  );
}

function TechButton({ name }: { name: string }) {
  return (
    <span className="text-xs hover:text-white transition-colors cursor-pointer">
      {name}
    </span>
  );
}
