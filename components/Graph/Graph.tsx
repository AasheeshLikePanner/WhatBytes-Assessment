"use client"

import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A line chart with dots"

const chartConfig = {
  desktop: {
    label: "Number of Student:",
    color: "hsl(var(--chart-1))",
  }
} satisfies ChartConfig

export default function Graph(props:any) {
    const chartData = props.props;
    console.log(chartData);

  return (
    <Card>
  <CardHeader>
    <CardDescription>Score Graph</CardDescription>
  </CardHeader>
  <CardContent>
    <ChartContainer config={chartConfig}>
      <LineChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 12,
          right: 12,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="score" 
          tickLine={false}
          axisLine={false}
          tickMargin={8}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Line
          dataKey="students" 
          type="natural"
          stroke="var(--color-desktop)"
          strokeWidth={2}
          dot={{
            fill: "var(--color-desktop)",
          }}
          activeDot={{
            r: 6,
          }}
        />
      </LineChart>
    </ChartContainer>
  </CardContent>
  <CardFooter className="flex-col items-start gap-2 text-sm">
    <div className="leading-none text-muted-foreground">
      Showing total Scores of engineers who took assessment
    </div>
  </CardFooter>
</Card>
  )
}
