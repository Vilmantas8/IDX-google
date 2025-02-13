import { cn } from "@/lib/utils";

interface DashboardCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

export const DashboardCard = ({
  title,
  value,
  icon,
  trend,
  className,
}: DashboardCardProps) => {
  return (
    <div
      className={cn(
        "bg-white p-6 rounded-lg border border-admin-border shadow-sm animate-fade-in",
        className
      )}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-gray-600">{title}</p>
          <h3 className="text-2xl font-semibold mt-1 text-admin-text">{value}</h3>
          {trend && (
            <p
              className={cn(
                "text-sm mt-2",
                trend.isPositive ? "text-green-600" : "text-red-600"
              )}
            >
              {trend.isPositive ? "↑" : "↓"} {Math.abs(trend.value)}%
            </p>
          )}
        </div>
        <div className="p-3 bg-admin-primary/10 rounded-lg">
          {icon}
        </div>
      </div>
    </div>
  );
};