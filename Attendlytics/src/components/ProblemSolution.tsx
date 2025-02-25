"use client";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import { Button } from "./ui/moving-border";
import { Cover } from "@/components/ui/cover";

export function ProblemSolution() {
    return (
        <LampContainer>
            <motion.h1
                initial={{ opacity: 0.5, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
            >
                <div className="mt-24 bg-gradient-to-br from-slate-300 to-white py-4 bg-clip-text text-center text-5xl font-medium tracking-tight text-transparent md:text-7xl"
                >
                    Meet
                    <br />
                    Attendify
                </div>

                <div>
                    <h1 className="text-4xl md:text-4xl lg:text-5xl mt-6 font-medium max-w-7xl mx-auto text-center relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 via-white to-white">
                        Roll Attendance in <Cover>warp speed</Cover>
                    </h1>
                </div>

                <div className="flex justify-center mt-10">
                    <Button
                        borderRadius="1.75rem"
                        className="bg-slate-900 text-white border-slate-800 hover:bg-slate-500 font-bold transition-colors duration-300 ease-in-out"
                    >
                        Try demo
                    </Button>
                </div>




            </motion.h1>

        </LampContainer>
    );
}