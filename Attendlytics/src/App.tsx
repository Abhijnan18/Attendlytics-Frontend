import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ProblemStatement } from "./components/ProblemStatement";
import { ProblemSolution } from "./components/ProblemSolution";
import { Features } from "./components/Features";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="min-h-screen"
      >
        <Hero />
        <ProblemStatement />
        <ProblemSolution />
        <Features />
        <Footer />
      </motion.div>
    </>
  );
};

export default App;
