"use client"

import { Pie, PieChart } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A donut chart"



const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  correct: {
    label: "Correct",
    color: "hsl(224.3, 76.3%, 48%)",
  },
  wrong: {
    label: "Wrong",
    color: "hsl(213.1, 93.9%, 67.8%)",
  },
} satisfies ChartConfig

export default function PieChartComp({chartData}:any) {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardDescription>Score PieChart</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
              outerRadius={100}
              label  
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
