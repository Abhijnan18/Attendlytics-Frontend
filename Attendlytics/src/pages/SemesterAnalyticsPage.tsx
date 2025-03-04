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

    return (
        <>
            <div>
                <h1>This is {getYearText(year)} Semester Analytics</h1>
            </div>
            <div>
                <DatePickerWithRange />
            </div>
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                <div className="aspect-video rounded-xl bg-muted/50" />
                <div className="aspect-video rounded-xl bg-muted/50" />
                <div className="aspect-video rounded-xl bg-muted/50" />
            </div>
            <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </>
    );
};

export default SemesterAnalyticsPage;
