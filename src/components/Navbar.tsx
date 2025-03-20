
import { Link, useLocation } from "react-router-dom";
import { SunMoon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-sm",
      scrolled ? "bg-background/80 border-b border-border" : "bg-transparent"
    )}>
      <div className="wrapper py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-mono font-semibold opacity-90 hover:opacity-100 transition-opacity">
          <span className="px-3 py-1 bg-secondary rounded">eke</span>
        </Link>
        
        <nav className="flex items-center space-x-6">
          <NavLink to="/" active={location.pathname === "/"}>About</NavLink>
          <NavLink to="/projects" active={location.pathname === "/projects"}>Projects</NavLink>
          <NavLink to="/blog" active={location.pathname === "/blog"}>Blog</NavLink>
          <NavLink to="/experience" active={location.pathname === "/experience"}>Experience</NavLink>
          
          <button 
            className="ml-2 p-2 rounded-full hover:bg-secondary/80 transition-colors"
            aria-label="Toggle theme"
          >
            <SunMoon className="w-5 h-5" />
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
