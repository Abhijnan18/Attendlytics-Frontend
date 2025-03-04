// src/pages/SemesterAnalyticsPage.tsx
import React from "react";
import { DatePickerWithRange } from "../components/DatePickerWithRange";
import { useParams } from "react-router-dom";

const SemesterAnalyticsPage: React.FC = () => {
    const { year } = useParams();

    const getYearText = (year: string | undefined) => {
        switch (year) {
            case "1":
                return "1st Year";
            case "2":
                return "2nd Year";
            case "3":
                return "3rd Year";
            case "4":
                return "4th Year";
            default:
                return "";
        }
    };

    // Attendance rate logic
    const attendanceRate = 85; // Example value, replace with dynamic data
    const getAttendanceColor = (rate: number) => {
        if (rate > 75) return "text-green-600 dark:text-green-400";
        if (rate >= 50 && rate <= 75) return "text-yellow-600 dark:text-yellow-400";
        return "text-red-600 dark:text-red-400";
    };

    return (
        <>
            {/* Header Section */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold tracking-tight">
                    This is {getYearText(year)} Semester Analytics
                </h1>
                <p className="text-muted-foreground mt-2">
                    Analyze current semester's attendance trends.
                </p>
            </div>

            {/* Date Picker Section */}
            <div className="mb-8">
                <DatePickerWithRange />
            </div>

            {/* Grid Section for Cards */}
            <div className="grid auto-rows-min gap-4 md:grid-cols-4 mb-[1rem]">

                <div className="aspect-video rounded-xl bg-muted/50 p-6 flex flex-col justify-center items-center">
                    <h2 className="text-lg font-semibold">Attendance Rate</h2>
                    <p className={`text-4xl font-bold mt-2 ${getAttendanceColor(attendanceRate)}`}>
                        {attendanceRate}%
                    </p>
                </div>


                <div className="aspect-video rounded-xl bg-muted/50 p-6 flex flex-col justify-center items-center">
                    <h2 className="text-lg font-semibold">Pass Rate</h2>
                    <p className="text-4xl font-bold mt-2">92%</p>
                </div>


                <div className="aspect-video rounded-xl bg-muted/50 p-6 flex flex-col justify-center items-center">
                    <h2 className="text-lg font-semibold">Average Score</h2>
                    <p className="text-4xl font-bold mt-2">85</p>
                </div>

                <div className="aspect-video rounded-xl bg-muted/50 p-6 flex flex-col justify-center items-center">
                    <h2 className="text-lg font-semibold">Average Score</h2>
                    <p className="text-4xl font-bold mt-2">85</p>
                </div>
            </div>


            <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 p-6 md:min-h-min">
                <h2 className="text-xl font-semibold mb-4">Detailed Analytics</h2>
                <p className="text-muted-foreground">
                    Explore detailed insights and trends for the semester.
                </p>
            </div>
        </>
    );
};

export default SemesterAnalyticsPage;