// src/pages/HomePage.tsx
import React from "react";
import { Hero } from "../components/Hero";
import { ProblemStatement } from "../components/ProblemStatement";
import { ProblemSolution } from "../components/ProblemSolution";
import { Features } from "../components/Features";
import { CTA } from "../components/CTA";

const HomePage: React.FC = () => {
    return (
        <>
            <Hero />
            <ProblemStatement />
            <ProblemSolution />
            <Features />
            <CTA />
        </>
    );
};

export default HomePage;
