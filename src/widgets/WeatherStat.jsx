import { Card, Metric, Text } from "@tremor/react";
import React from "react";

function WeatherStat({ title, metric, color }) {
  // Generate Tailwind CSS classes based on the color prop
  const colorClass = `${color}-500`;

  return (
    <Card className={`border-t-4 border-${colorClass} bg-${colorClass}/10 rounded-2xl`}>
      <Text>{title}</Text>
      <Metric>{metric}</Metric>
    </Card>
  );
}

export default WeatherStat;
