
import React from 'react';
import { cn } from '@/lib/utils';

export interface ActivityItemProps {
  title: string;
  description: string;
  time: string;
  status?: 'info' | 'success' | 'warning' | 'error';
  icon?: React.ReactNode;
}

const ActivityItem: React.FC<ActivityItemProps> = ({
  title,
  description,
  time,
  status = 'info',
  icon,
}) => {
  const getStatusColor = () => {
    switch (status) {
      case 'success':
        return 'bg-kiddy-green text-white';
      case 'warning':
        return 'bg-kiddy-yellow text-foreground';
      case 'error':
        return 'bg-destructive text-destructive-foreground';
      case 'info':
      default:
        return 'bg-kiddy-blue text-white';
    }
  };

  return (
    <div className="flex gap-4 py-3">
      <div className={cn("h-10 w-10 rounded-full flex items-center justify-center", getStatusColor())}>
        {icon}
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <p className="font-medium">{title}</p>
          <span className="text-xs text-muted-foreground">{time}</span>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default ActivityItem;
