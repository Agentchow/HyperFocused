"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A bar chart";

const chartData = [
  { month: "25", desktop: 500000 },
  { month: "26", desktop: 2500000 },
  { month: "27", desktop: 7000000 },
];

const chartConfig = {
  desktop: {
    label: "Revenue",
    color: "var(--color-c-black)",
  },
};

export function ForecastHistogram() {
  return (
    <Card className="bg-[#111111] border-none text-white/60">
      <CardHeader>
        <CardTitle>Revenue - 3 Year forecast</CardTitle>
        <CardDescription>
          Showing the revenue increase in the upcoming 3 years
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar
              dataKey="desktop"
              fill="var(--color-c-orange)"
              className="opacity-90"
              radius={8}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          $7M Revenue by the end of 2027 <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">2025-2027</div>
      </CardFooter>
    </Card>
  );
}
