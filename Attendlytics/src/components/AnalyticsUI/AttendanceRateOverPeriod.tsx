"use client"

import * as React from "react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
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
    { 'date': '2024-04-01', 'present': 94, 'absent': 6 },
    { 'date': '2024-04-02', 'present': 82, 'absent': 18 },
    { 'date': '2024-04-03', 'present': 81, 'absent': 19 },
    { 'date': '2024-04-04', 'present': 89, 'absent': 11 },
    { 'date': '2024-04-05', 'present': 92, 'absent': 8 },
    { 'date': '2024-04-06', 'present': 88, 'absent': 12 },
    { 'date': '2024-04-07', 'present': 91, 'absent': 9 },
    { 'date': '2024-04-08', 'present': 95, 'absent': 5 },
    { 'date': '2024-04-09', 'present': 77, 'absent': 23 },
    { 'date': '2024-04-10', 'present': 92, 'absent': 8 },
    { 'date': '2024-04-11', 'present': 89, 'absent': 11 },
    { 'date': '2024-04-12', 'present': 94, 'absent': 6 },
    { 'date': '2024-04-13', 'present': 84, 'absent': 16 },
    { 'date': '2024-04-14', 'present': 80, 'absent': 20 },
    { 'date': '2024-04-15', 'present': 78, 'absent': 22 },
    { 'date': '2024-04-16', 'present': 83, 'absent': 17 },
    { 'date': '2024-04-17', 'present': 88, 'absent': 12 },
    { 'date': '2024-04-18', 'present': 91, 'absent': 9 },
    { 'date': '2024-04-19', 'present': 83, 'absent': 17 },
    { 'date': '2024-04-20', 'present': 86, 'absent': 14 },
    { 'date': '2024-04-21', 'present': 83, 'absent': 17 },
    { 'date': '2024-04-22', 'present': 86, 'absent': 14 },
    { 'date': '2024-04-23', 'present': 84, 'absent': 16 },
    { 'date': '2024-04-24', 'present': 81, 'absent': 19 },
    { 'date': '2024-04-25', 'present': 78, 'absent': 22 },
    { 'date': '2024-04-26', 'present': 92, 'absent': 8 },
    { 'date': '2024-04-27', 'present': 91, 'absent': 9 },
    { 'date': '2024-04-28', 'present': 90, 'absent': 10 },
    { 'date': '2024-04-29', 'present': 81, 'absent': 19 },
    { 'date': '2024-04-30', 'present': 80, 'absent': 20 },

]

const chartConfig = {
    rates: {
        label: "Attendance Rate",
    },
    present: {
        label: "Present Rate",
        color: "green", // Green color
    },
    absent: {
        label: "Absent Rate",
        color: "red", // Red color
    },
} satisfies ChartConfig

export function AttendanceRateOverPeriod() {
    const [activeChart, setActiveChart] = React.useState<keyof typeof chartConfig>("present")

    const averages = React.useMemo(
        () => ({
            present: Math.round(chartData.reduce((acc, curr) => acc + curr.present, 0) / chartData.length),
            absent: Math.round(chartData.reduce((acc, curr) => acc + curr.absent, 0) / chartData.length),
        }),
        []
    )

    return (
        <Card>
            <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
                <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
                    <CardTitle>Attendance Rate Trend</CardTitle>
                    <CardDescription>
                        Daily attendance rates for current semester
                    </CardDescription>
                </div>
                <div className="flex">
                    {(["present", "absent"] as const).map((chart) => {
                        return (
                            <button
                                key={chart}
                                data-active={activeChart === chart}
                                className="flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                                onClick={() => setActiveChart(chart)}
                            >
                                <span className="text-xs text-muted-foreground">
                                    {chartConfig[chart].label}
                                </span>
                                <span className="text-lg font-bold leading-none sm:text-3xl">
                                    {averages[chart]}%
                                </span>
                            </button>
                        )
                    })}
                </div>
            </CardHeader>
            <CardContent className="px-2 sm:p-6">
                <ChartContainer
                    config={chartConfig}
                    className="aspect-auto h-[250px] w-full"
                >
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
                            dataKey="date"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            minTickGap={32}
                            tickFormatter={(value) => {
                                const date = new Date(value)
                                return date.toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "numeric",
                                })
                            }}
                        />
                        <ChartTooltip
                            content={
                                <ChartTooltipContent
                                    className="w-[150px]"
                                    nameKey="rates"
                                    labelFormatter={(value) => {
                                        return new Date(value).toLocaleDateString("en-US", {
                                            month: "short",
                                            day: "numeric",
                                            year: "numeric",
                                        })
                                    }}
                                />
                            }
                        />
                        <Line
                            dataKey={activeChart}
                            type="monotone"
                            stroke={`var(--color-${activeChart})`}
                            strokeWidth={2}
                            dot={false}
                        />
                    </LineChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}