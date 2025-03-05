"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, Rectangle, XAxis } from "recharts"

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
    { section: "sectionA", attendanceRate: 92, fill: "rgb(226, 54, 112)" },
    { section: "sectionB", attendanceRate: 85, fill: "rgb(232, 140, 48)" },
    { section: "sectionC", attendanceRate: 78, fill: "rgb(175, 87, 219)" },
]

const chartConfig = {
    attendanceRate: {
        label: "Attendance Rate: ",
    },
    sectionA: {
        label: "Section A",
        color: "hsl(var(--chart-1))",
    },
    sectionB: {
        label: "Section B",
        color: "hsl(var(--chart-2))",
    },
    sectionC: {
        label: "Section C",
        color: "hsl(var(--chart-3))",
    },
} satisfies ChartConfig

export function ClassAttendanceRate() {
    // Find index of section with highest attendance
    const maxAttendance = Math.max(...chartData.map(d => d.attendanceRate));
    const activeIndex = chartData.findIndex(d => d.attendanceRate === maxAttendance);

    return (
        <Card>
            <CardHeader>
                <CardTitle>Class Attendance Rate</CardTitle>
                <CardDescription>Current Semester Overview</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <BarChart accessibilityLayer data={chartData}>
                        <CartesianGrid vertical={true} />
                        <XAxis
                            dataKey="section"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) =>
                                chartConfig[value as keyof typeof chartConfig]?.label
                            }
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Bar
                            dataKey="attendanceRate"
                            strokeWidth={2}
                            radius={8}
                            activeIndex={activeIndex}
                            activeBar={({ ...props }) => {
                                return (
                                    <Rectangle
                                        {...props}
                                        fillOpacity={0.8}
                                        stroke={props.payload.fill}
                                        strokeDasharray={4}
                                        strokeDashoffset={4}
                                    />
                                )
                            }}
                        />
                    </BarChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 font-medium leading-none">
                    Top performing section: {chartData[activeIndex].section.replace('section', '').toUpperCase()} <TrendingUp className="h-4 w-4" />
                </div>
                <div className="leading-none text-muted-foreground">
                    Showing attendance rates for current academic semester
                </div>
            </CardFooter>
        </Card>
    )
}