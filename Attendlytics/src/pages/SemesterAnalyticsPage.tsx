import React from "react";
import { DatePickerWithRange } from "../components/DatePickerWithRange";
import { AttendanceRateOverPeriod } from "../components/AnalyticsUI/AttendanceRateOverPeriod";
import { AttendanceRate } from "../components/AnalyticsUI/AttendanceRate";
import { ClassAttendanceRate } from "../components/AnalyticsUI/ClassAttendanceRate";
import { StudentEngagementRate } from "../components/AnalyticsUI/StudentEngagementRate";
import { LowAttendanceList } from "../components/AnalyticsUI/LowAttendanceList";
import { AttendanceDistributionPieChart } from "../components/AnalyticsUI/AttendanceDistributionPieChart";
import { useParams } from "react-router-dom";
import { DateRange } from "react-day-picker";
import { differenceInDays } from "date-fns";

const SemesterAnalyticsPage: React.FC = () => {
    const { year } = useParams();
    const currentDate = new Date(); // Get the current date
    const [dateRange, setDateRange] = React.useState<DateRange>({
        from: currentDate, // Set default `from` to the current date
        to: currentDate, // Set default `to` to the current date
    });

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

    return (
        <div className="container mx-auto p-4">
            {/* Header Section */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold tracking-tight text-black dark:text-white">
                    This is {getYearText(year)} Semester Analytics
                </h1>
                <p className="text-muted-foreground mt-2">
                    Analyze current semester's attendance trends.
                </p>
            </div>

            {/* Date Picker Section */}
            <div className="mb-8">
                <DatePickerWithRange
                    date={dateRange}
                    onDateChange={(dateRange) => dateRange && setDateRange(dateRange)}
                />
            </div>

            {/* Conditionally render AttendanceRateOverPeriod */}
            {dateRange?.from && dateRange?.to && differenceInDays(dateRange.to, dateRange.from) >= 3 && (
                <div className="mb-4">
                    <AttendanceRateOverPeriod />
                </div>
            )}

            {/* Grid Section for Cards */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mb-4">
                <div className="rounded-xl bg-muted/50 p-0 flex flex-col">
                    <AttendanceRate />
                </div>
                <div className="rounded-xl bg-muted/50 p-0 flex flex-col">
                    <ClassAttendanceRate />
                </div>
                <div className="rounded-xl bg-muted/50 p-0 flex flex-col">
                    <StudentEngagementRate />
                </div>
            </div>

            {/* Lower Grid Section with Equal Height Cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-4 items-stretch">
                <div className="sm:col-span-1 lg:col-span-2 rounded-xl bg-muted/50 p-0 flex flex-col h-full">
                    <LowAttendanceList />
                </div>
                <div className="sm:col-span-1 lg:col-span-2 rounded-xl bg-muted/50 p-0 flex flex-col h-full">
                    <AttendanceDistributionPieChart />
                </div>
            </div>
        </div>
    );
};

export default SemesterAnalyticsPage;