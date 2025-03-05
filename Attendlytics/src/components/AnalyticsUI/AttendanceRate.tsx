"use client"

import { TrendingDown } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

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
    { session: "1", desktop: 186 },
    { session: "2", desktop: 305 },
    { session: "3", desktop: 237 },
    { session: "4", desktop: 73 },
    { session: "5", desktop: 209 },
    { session: "6", desktop: 214 },
]

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "hsl(var(--chart-1))",
    },
} satisfies ChartConfig

export function AttendanceRate() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Attendance Rate</CardTitle>
                <CardDescription>Session 1 - Session 6</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <BarChart accessibilityLayer data={chartData}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="session"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8} />
                    </BarChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 font-medium leading-none">
                    Trending down by 5.2%<TrendingDown className="h-4 w-4" />
                </div>
                <div className="leading-none text-muted-foreground">
                    Attendance decreases after 3rd session
                </div>
            </CardFooter>
        </Card>
    )
}
