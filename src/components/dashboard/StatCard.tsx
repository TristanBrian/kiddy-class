
import React from 'react';
import { Card, CardContent } from '../ui/card';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  iconColor?: string;
  bgColor?: string;
  change?: {
    value: number;
    isPositive: boolean;
  };
}

const StatCard: React.FC<StatCardProps> = ({ 
  title, 
  value, 
  icon: Icon, 
  iconColor = "text-primary",
  bgColor = "bg-primary/10",
  change 
}) => {
  return (
    <Card className="border-none shadow-sm">
      <CardContent className="p-6">
        <div className="flex items-center gap-4">
          <div className={cn("p-3 rounded-xl", bgColor)}>
            <Icon className={cn("h-6 w-6", iconColor)} />
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <h3 className="text-2xl font-bold">{value}</h3>
            
            {change && (
              <div className="flex items-center mt-1">
                <span 
                  className={cn(
                    "text-xs font-medium",
                    change.isPositive ? "text-kiddy-green" : "text-destructive"
                  )}
                >
                  {change.isPositive ? '+' : ''}{change.value}%
                </span>
                <span className="text-xs text-muted-foreground ml-1">vs last month</span>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;
