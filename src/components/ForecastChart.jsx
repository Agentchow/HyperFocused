"use client";

import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

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

export const description = "A linear area chart";

const chartData = [
  { month: "25", desktop: 35 },
  { month: "26", desktop: 40 },
  { month: "27", desktop: 45 },
];

const chartConfig = {
  desktop: {
    label: "Margin",
    color: "var(--chart-1)",
  },
};

export function ForecastChart() {
  return (
    <Card className="bg-[#111111] border-none text-white/60">
      <CardHeader>
        <CardTitle>Margin Increase - 3 Year forecast</CardTitle>
        <CardDescription>
          Showing the magrin increase in the upcoming 3 years
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" hideLabel />}
            />
            <Area
              dataKey="desktop"
              type="linear"
              fill="var(--color-c-orange)"
              fillOpacity={0.8}
              stroke="var(--color-c-black)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 leading-none font-medium">
              45% Margin by the end of 2027 <TrendingUp className="h-4 w-4" />
            </div>
            <div className="text-muted-foreground flex items-center gap-2 leading-none">
              2025 - 2027
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
