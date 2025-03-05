"use client";

import { Pie, PieChart } from "recharts";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    ChartLegend,
    ChartLegendContent,
} from "@/components/ui/chart";

const chartData = [
    { category: "excellent", Attendance: 35, fill: "hsl(142.1 76.2% 36.1%)" }, // Green
    { category: "good", Attendance: 25, fill: "hsl(45 93.4% 47.5%)" },         // Yellow
    { category: "bad", Attendance: 20, fill: "hsl(25 95.2% 45.1%)" },           // Orange
    { category: "critical", Attendance: 20, fill: "hsl(0 84.2% 60.2%)" },       // Red
];

const chartConfig = {
    Attendance: {
        label: "Attendance",
    },
    excellent: {
        label: "Excellent (85%+): ",
        color: "hsl(142.1 76.2% 36.1%)",
    },
    good: {
        label: "Good (75-85%): ",
        color: "hsl(45 93.4% 47.5%)",
    },
    bad: {
        label: "Bad (50-75%): ",
        color: "hsl(25 95.2% 45.1%)",
    },
    critical: {
        label: "Critical (<50%): ",
        color: "hsl(0 84.2% 60.2%)",
    },
} satisfies ChartConfig;

export function AttendanceDistributionPieChart() {
    return (
        <Card className="flex flex-col">
            <CardHeader className="items-center pb-0">
                <CardTitle>Attendance Distribution</CardTitle>
                <CardDescription>Current Semester Overview</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square w-full max-h-[400px] pb-0 [&_.recharts-pie-label-text]:fill-foreground"
                >
                    <PieChart>
                        <ChartTooltip content={<ChartTooltipContent nameKey="category" />} />
                        <Pie
                            data={chartData}
                            dataKey="Attendance"
                            nameKey="category"
                            label={({ category }) => category.toUpperCase()}
                        />
                        <ChartLegend
                            content={<ChartLegendContent nameKey="category" />}
                            className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center my-4"
                        />
                    </PieChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
}
