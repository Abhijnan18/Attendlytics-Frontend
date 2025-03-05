"use client"

import { TrendingUp } from "lucide-react"
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

const chartData = [
    { session: "Session 1", engagement: 75 },
    { session: "Session 2", engagement: 82 },
    { session: "Session 3", engagement: 68 },
    { session: "Session 4", engagement: 91 },
    { session: "Session 5", engagement: 78 },
    { session: "Session 6", engagement: 85 },
]

const chartConfig = {
    engagement: {
        label: "Engagement Rate: ",
        color: "hsl(var(--chart-1))",
    },
} satisfies ChartConfig

export function StudentEngagementRate() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Student Engagement Rate</CardTitle>
                <CardDescription>Session 1 - 6 (2024)</CardDescription>
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
                            dataKey="session"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => value.replace("Session ", "")}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Line
                            dataKey="engagement"
                            type="natural"
                            stroke={chartConfig.engagement.color}
                            strokeWidth={2}
                            dot={false}
                        />
                    </LineChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 font-medium leading-none">
                    Trending up by 8.5% this period <TrendingUp className="h-4 w-4" />
                </div>
                <div className="leading-none text-muted-foreground">
                    Showing engagement rates across all sessions
                </div>
            </CardFooter>
        </Card>
    )
}