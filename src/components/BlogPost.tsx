
import { BlogPost as BlogPostType } from "@/lib/types";
import { Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface BlogPostProps {
  post: BlogPostType;
  className?: string;
  style?: React.CSSProperties;
}

export default function BlogPost({ post, className, style }: BlogPostProps) {
  return (
    <a 
      href={post.url} 
      target="_blank" 
      rel="noopener noreferrer"
      className={cn(
        "group flex flex-col overflow-hidden rounded-lg border border-border bg-card/20 backdrop-blur-sm hover:bg-card/40 transition-all duration-300",
        "hover:border-muted hover:shadow-lg hover:shadow-primary/5",
        className
      )}
      style={style}
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-secondary/20">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {post.platform && (
          <span className="absolute top-3 left-3 bg-secondary/80 backdrop-blur-sm text-xs px-2 py-1 rounded">
            {post.platform}
          </span>
        )}
      </div>
      
      <div className="flex-1 p-5">
        <h3 className="text-lg font-medium line-clamp-2 group-hover:text-white transition-colors">
          {post.title}
        </h3>
        
        <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
          {post.description}
        </p>
        
        <div className="mt-4 pt-3 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
          <span>{post.date}</span>
          <div className="flex items-center gap-1">
            <Clock size={12} />
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>
    </a>
  );
}
