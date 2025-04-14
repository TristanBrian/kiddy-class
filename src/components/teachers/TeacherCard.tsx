
import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Mail, Phone } from 'lucide-react';
import { getNameInitials } from '../students/StudentListItem';

export interface TeacherProps {
  id: string;
  name: string;
  role: string;
  subjects?: string[];
  classAssigned?: string;
  email: string;
  phone: string;
  avatarSrc?: string;
}

const TeacherCard: React.FC<TeacherProps> = ({
  id,
  name,
  role,
  subjects = [],
  classAssigned,
  email,
  phone,
  avatarSrc,
}) => {
  return (
    <Card className="overflow-hidden border hover:shadow-md transition-shadow duration-200">
      <div className="h-12 bg-gradient-to-r from-primary to-kiddy-purple"></div>
      <CardContent className="pt-4 pb-6">
        <div className="flex flex-col items-center text-center mb-4">
          <Avatar className="h-16 w-16 border-4 border-background -mt-12 mb-3">
            <AvatarImage src={avatarSrc} />
            <AvatarFallback className="bg-primary/80 text-white">
              {getNameInitials(name)}
            </AvatarFallback>
          </Avatar>
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-sm text-muted-foreground">{role}</p>
          
          {classAssigned && (
            <Badge variant="secondary" className="mt-2">
              {classAssigned}
            </Badge>
          )}
        </div>
        
        {subjects.length > 0 && (
          <div className="flex flex-wrap justify-center gap-1.5 mb-4">
            {subjects.map((subject) => (
              <Badge key={subject} variant="outline" className="bg-muted">
                {subject}
              </Badge>
            ))}
          </div>
        )}
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-center gap-2 text-sm">
            <Mail size={14} />
            <span className="text-muted-foreground">{email}</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-sm">
            <Phone size={14} />
            <span className="text-muted-foreground">{phone}</span>
          </div>
        </div>
        
        <div className="flex justify-center gap-3">
          <Button size="sm" asChild>
            <a href={`/teachers/${id}`}>View Profile</a>
          </Button>
          <Button size="sm" variant="outline">
            Message
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TeacherCard;
