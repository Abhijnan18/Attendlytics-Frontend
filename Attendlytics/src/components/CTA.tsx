import { Vortex } from "./ui/vortex";

export function CTA() {
    return (
        <div className="w-full md:max-w-6xl mx-auto md:mb-20 md:rounded-3xl md:border md:border-neutral-800 md:shadow-2xl h-[30rem] overflow-hidden">
            <Vortex
                backgroundColor="black"
                rangeY={800}
                particleCount={500}
                baseHue={120}
                className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
            >
                <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
                    Attendify <br />Attendance Simplified
                </h2>
                <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
                    AI-powered tracking, real-time insights, and effortless management for smarter classrooms.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
                    <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
                        Book Demo
                    </button>
                    <button className="px-4 py-2  text-white ">Log In</button>
                </div>
            </Vortex>
        </div>
    );
}
