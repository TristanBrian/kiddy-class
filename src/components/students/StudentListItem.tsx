
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { MoreHorizontal, Eye } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

export interface StudentProps {
  id: string;
  name: string;
  class: string;
  age: number;
  gender: 'male' | 'female';
  attendance: number;
  avatarSrc?: string;
}

export const getNameInitials = (name: string): string => {
  const parts = name.split(' ').filter(Boolean);
  if (parts.length >= 2) {
    return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
  }
  return parts[0][0].toUpperCase();
};

const StudentListItem: React.FC<StudentProps> = ({ id, name, class: className, age, gender, attendance, avatarSrc }) => {
  const getAttendanceColor = (attendance: number) => {
    if (attendance >= 90) return 'bg-green-100 text-green-800';
    if (attendance >= 70) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };

  return (
    <div className="flex items-center justify-between py-3 border-b">
      <div className="flex items-center space-x-4">
        <Avatar>
          <AvatarImage src={avatarSrc} />
          <AvatarFallback className="bg-primary/20 text-primary">
            {getNameInitials(name)}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-sm text-muted-foreground">Class: {className}</p>
        </div>
      </div>
      
      <div className="hidden md:flex items-center gap-4">
        <div className="text-center px-3">
          <p className="text-sm text-muted-foreground">Age</p>
          <p>{age}</p>
        </div>
        <div className="text-center px-3">
          <p className="text-sm text-muted-foreground">Gender</p>
          <p className="capitalize">{gender}</p>
        </div>
        <div className="text-center px-3">
          <p className="text-sm text-muted-foreground">Attendance</p>
          <Badge variant="outline" className={getAttendanceColor(attendance)}>
            {attendance}%
          </Badge>
        </div>
      </div>
      
      <div className="flex items-center">
        <Button variant="ghost" size="icon" asChild>
          <a href={`/students/${id}`}>
            <Eye size={18} />
          </a>
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreHorizontal size={18} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View Profile</DropdownMenuItem>
            <DropdownMenuItem>Edit Details</DropdownMenuItem>
            <DropdownMenuItem>Attendance History</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive">Remove Student</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default StudentListItem;
