
import React from 'react';
import { Card, CardContent, CardFooter } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { CalendarDays, Users, GraduationCap } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ClassProps {
  id: string;
  name: string;
  level: 'pp1' | 'pp2' | 'pp3' | 'grade1' | 'grade2' | 'grade3' | 'grade4' | 'grade5' | 'grade6' | 'grade7' | 'grade8';
  teacher: string;
  studentCount: number;
  schedule: string[];
  color?: string;
}

const ClassCard: React.FC<ClassProps> = ({
  id,
  name,
  level,
  teacher,
  studentCount,
  schedule,
  color = 'bg-kiddy-blue',
}) => {
  const getLevelName = (level: string) => {
    if (level.startsWith('pp')) {
      return `Pre-Primary ${level.charAt(2)}`;
    } else if (level.startsWith('grade')) {
      return `Grade ${level.replace('grade', '')}`;
    }
    return level;
  };
  
  const levelName = getLevelName(level);
  
  const getGradientClass = () => {
    switch (level.charAt(0)) {
      case 'p': // pp1, pp2, pp3
        return 'from-kiddy-blue to-kiddy-purple';
      case 'g': // grade1-3
        if (parseInt(level.replace('grade', '')) <= 3) {
          return 'from-kiddy-green to-kiddy-blue';
        }
        // grade4-6
        else if (parseInt(level.replace('grade', '')) <= 6) {
          return 'from-kiddy-coral to-kiddy-yellow';
        }
        // grade7-8
        return 'from-kiddy-purple to-kiddy-coral';
      default:
        return 'from-kiddy-blue to-kiddy-purple';
    }
  };

  return (
    <Card className="overflow-hidden border hover:shadow-md transition-shadow duration-200">
      <div className={cn("h-3 bg-gradient-to-r", getGradientClass())}></div>
      <CardContent className="pt-4">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="font-semibold text-lg">{name}</h3>
            <Badge variant="secondary" className="mt-1">
              {levelName}
            </Badge>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <GraduationCap size={18} className="text-muted-foreground" />
            <span className="text-sm">{teacher}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Users size={18} className="text-muted-foreground" />
            <span className="text-sm">{studentCount} Students</span>
          </div>
          
          <div className="flex items-start gap-2">
            <CalendarDays size={18} className="text-muted-foreground mt-0.5" />
            <div className="flex-1">
              {schedule.map((day, index) => (
                <div key={index} className="text-sm">
                  {day}
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="pt-3 pb-4 flex justify-between">
        <Button variant="outline" size="sm">
          Students
        </Button>
        <Button size="sm" asChild>
          <a href={`/classes/${id}`}>Manage</a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ClassCard;
