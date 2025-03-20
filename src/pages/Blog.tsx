
import { blogPosts } from "@/lib/data";
import BlogPost from "@/components/BlogPost";
import { Filter } from "lucide-react";

export default function Blog() {
  return (
    <div className="min-h-screen pt-24">
      <div className="wrapper">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 animate-fade-in">Blog</h1>
        
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl animate-fade-in animate-delay-100">
          Welcome to my blog domain where I share personal stories about things I've learned, projects I'm building in and just general musings. I also write for other publications.
        </p>
        
        <div className="mb-8 flex flex-wrap gap-3 animate-fade-in animate-delay-200">
          {["FreeCodeCamp", "Hashnode", "Sanity"].map((platform) => (
            <div 
              key={platform}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-full bg-secondary/60 text-white"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
              <span>{platform}</span>
            </div>
          ))}
          
          <button className="ml-auto inline-flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-full bg-secondary hover:bg-secondary/80 transition-colors">
            <Filter size={14} />
            <span>Explore All</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {blogPosts.map((post, index) => (
            <BlogPost 
              key={post.title} 
              post={post} 
              className="animate-fade-in"
              style={{ 
                animationDelay: `${(index % 2) * 150 + 300}ms`,
                animationFillMode: 'both'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
