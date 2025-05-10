
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface StatCardProps { 
  title: string; 
  value: number; 
  description: string; 
  icon: React.ReactNode; 
  iconColor: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, description, icon, iconColor }) => (
  <Card className="border hover:shadow-md transition-all duration-300 hover:translate-y-[-2px]">
    <CardHeader className="flex flex-row items-center justify-between pb-2">
      <CardTitle className="text-sm font-medium text-gray-700">{title}</CardTitle>
      <div className={`rounded-full p-2 ${iconColor}`}>{icon}</div>
    </CardHeader>
    <CardContent>
      <div className="text-3xl font-bold">{value}</div>
      <p className="text-xs text-gray-600 mt-1">{description}</p>
    </CardContent>
  </Card>
);

export default StatCard;
