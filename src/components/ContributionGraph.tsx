import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

type ContributionDay = {
  count: number;
  date: string;
  level: 0 | 1 | 2 | 3 | 4;
};

type GitHubContributionResponse = {
  data: {
    user: {
      contributionsCollection: {
        contributionCalendar: {
          totalContributions: number;
          weeks: {
            contributionDays: {
              contributionCount: number;
              date: string;
              color: string;
            }[];
          }[];
        };
      };
    };
  };
};

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const currentYear = new Date().getFullYear();
const years = [currentYear - 3, currentYear - 2, currentYear - 1, currentYear];

// Function to determine contribution level based on count
const getContributionLevel = (count: number): 0 | 1 | 2 | 3 | 4 => {
  if (count === 0) return 0;
  if (count === 1) return 1;
  if (count <= 3) return 2;
  if (count <= 6) return 3;
  return 4;
};

export default function ContributionGraph() {
  const [activeYear, setActiveYear] = useState<number>(currentYear);
  const [contributions, setContributions] = useState<ContributionDay[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalContributions, setTotalContributions] = useState(0);

  useEffect(() => {
    const fetchGitHubContributions = async () => {
      setIsLoading(true);
      
      try {
        const username = import.meta.env.VITE_GITHUB_USERNAME;
        const token = import.meta.env.VITE_GITHUB_TOKEN;
        
        if (!username || !token) {
          throw new Error("GitHub username or token not found in environment variables");
        }

        // Calculate date range for the selected year
        const fromDate = `${activeYear}-01-01T00:00:00Z`;
        const toDate = `${activeYear}-12-31T23:59:59Z`;
        
        const query = `
          query {
            user(login: "${username}") {
              contributionsCollection(from: "${fromDate}", to: "${toDate}") {
                contributionCalendar {
                  totalContributions
                  weeks {
                    contributionDays {
                      contributionCount
                      date
                    }
                  }
                }
              }
            }
          }
        `;

        const response = await fetch("https://api.github.com/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
          body: JSON.stringify({ query })
        });

        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`);
        }

        const result: GitHubContributionResponse = await response.json();
        
        if (!result.data?.user?.contributionsCollection?.contributionCalendar) {
          throw new Error("Invalid response format from GitHub API");
        }

        const calendarData = result.data.user.contributionsCollection.contributionCalendar;
        setTotalContributions(calendarData.totalContributions);
        
        // Transform GitHub data to our format
        const transformedData: ContributionDay[] = [];
        
        calendarData.weeks.forEach(week => {
          week.contributionDays.forEach(day => {
            transformedData.push({
              count: day.contributionCount,
              date: day.date,
              level: getContributionLevel(day.contributionCount)
            });
          });
        });
        
        setContributions(transformedData);
      } catch (error) {
        console.error("Error fetching GitHub contributions:", error);
        // Fallback to dummy data if API fails
        generateDummyData();
      } finally {
        setIsLoading(false);
      }
    };

    const generateDummyData = () => {
      // Generate dummy contribution data as fallback
      const days = 371;
      const newContributions: ContributionDay[] = [];
      let total = 0;
      
      for (let i = 0; i < days; i++) {
        const date = new Date();
        date.setFullYear(activeYear);
        date.setDate(date.getDate() - (days - i));
        
        const count = Math.floor(Math.random() * 5);
        total += count;
        
        newContributions.push({
          count,
          date: date.toISOString().split('T')[0],
          level: getContributionLevel(count),
        });
      }
      
      setContributions(newContributions);
      setTotalContributions(total);
    };

    fetchGitHubContributions();
  }, [activeYear]);

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
        <h2 className="text-xl font-semibold tracking-tight">GitHub Contribution Graph</h2>
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
              {totalContributions} contributions in {activeYear}
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
