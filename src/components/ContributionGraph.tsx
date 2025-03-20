
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

type ContributionDay = {
  count: number;
  date: string;
  level: 0 | 1 | 2 | 3 | 4;
};

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const years = [2021, 2022, 2023, 2024];

export default function ContributionGraph() {
  const [activeYear, setActiveYear] = useState<number>(2024);
  const [contributions, setContributions] = useState<ContributionDay[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading contributions data
    setIsLoading(true);
    
    setTimeout(() => {
      // Generate random contribution data
      const days = 371; // Just over a year of days
      const newContributions: ContributionDay[] = [];
      
      for (let i = 0; i < days; i++) {
        const date = new Date();
        date.setDate(date.getDate() - (days - i));
        
        const count = Math.floor(Math.random() * 5); // 0-4 contributions
        let level: 0 | 1 | 2 | 3 | 4 = 0;
        
        if (count === 1) level = 1;
        else if (count === 2) level = 2;
        else if (count === 3) level = 3;
        else if (count >= 4) level = 4;
        
        newContributions.push({
          count,
          date: date.toISOString().split('T')[0],
          level,
        });
      }
      
      setContributions(newContributions);
      setIsLoading(false);
    }, 500);
  }, [activeYear]);

  const totalContributions = contributions.reduce((acc, day) => acc + day.count, 0);

  // Group contributions by week and day
  const weeks: ContributionDay[][] = [];
  let week: ContributionDay[] = [];
  
  // Extract just the year data we're looking at
  const yearContributions = contributions.filter(c => {
    const year = new Date(c.date).getFullYear();
    return year === activeYear;
  });
  
  yearContributions.forEach((day, index) => {
    if (index % 7 === 0 && week.length > 0) {
      weeks.push(week);
      week = [];
    }
    week.push(day);
    
    // Push the last week
    if (index === yearContributions.length - 1 && week.length > 0) {
      weeks.push(week);
    }
  });

  return (
    <div className="w-full overflow-hidden">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold tracking-tight">Contribution Graph</h2>
        <div className="flex space-x-1">
          {years.map(year => (
            <button
              key={year}
              onClick={() => setActiveYear(year)}
              className={cn(
                "px-2 py-1 text-xs rounded transition-colors",
                activeYear === year 
                  ? "bg-accent text-white" 
                  : "text-muted-foreground hover:bg-secondary"
              )}
            >
              {year}
            </button>
          ))}
        </div>
      </div>
      
      <div className="relative w-full overflow-x-auto pb-4">
        <div className="min-w-[900px]">
          {/* Month labels */}
          <div className="flex mb-2 text-xs text-muted-foreground">
            <div className="w-8"></div> {/* Spacer for alignment */}
            {months.map(month => (
              <div key={month} className="flex-1 text-center">{month}</div>
            ))}
          </div>
          
          {/* Contribution grid */}
          <div className="flex">
            <div className="w-8 flex flex-col justify-around text-xs text-muted-foreground">
              <div>Mon</div>
              <div>Wed</div>
              <div>Fri</div>
            </div>
            
            <div className="flex-1 flex space-x-[3px] animate-grid-appear">
              {isLoading ? (
                <div className="w-full h-[120px] flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-accent border-t-transparent rounded-full animate-spin"></div>
                </div>
              ) : (
                <>
                  {weeks.map((week, weekIndex) => (
                    <div key={weekIndex} className="flex flex-col space-y-[3px]">
                      {week.map((day, dayIndex) => (
                        <div
                          key={`${weekIndex}-${dayIndex}`}
                          className={cn(
                            "w-[15px] h-[15px] rounded-sm transition-all hover:scale-110 cursor-pointer",
                            day.level === 0 && "bg-secondary/80",
                            day.level === 1 && "bg-green-900/50",
                            day.level === 2 && "bg-green-700/50",
                            day.level === 3 && "bg-green-500/50",
                            day.level === 4 && "bg-green-400/50",
                          )}
                          title={`${day.count} contributions on ${day.date}`}
                        />
                      ))}
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
          
          {/* Legend */}
          <div className="mt-2 flex items-center justify-between">
            <div className="text-xs text-muted-foreground">
              {totalContributions} contributions in the last year
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-xs text-muted-foreground">Less</span>
              
              <div className="flex space-x-1">
                {[0, 1, 2, 3, 4].map(level => (
                  <div
                    key={level}
                    className={cn(
                      "w-[10px] h-[10px] rounded-sm",
                      level === 0 && "bg-secondary/80",
                      level === 1 && "bg-green-900/50",
                      level === 2 && "bg-green-700/50",
                      level === 3 && "bg-green-500/50",
                      level === 4 && "bg-green-400/50",
                    )}
                  />
                ))}
              </div>
              
              <span className="text-xs text-muted-foreground">More</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
