// src/pages/HomePage.tsx
import React from "react";
import { DatePickerWithRange } from "../components/DatePickerWithRange";

const SemesterAnalyticsPage: React.FC = () => {
    return (
        <>
            <div>
                <h1>This is Semster Analytics of X year</h1>
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