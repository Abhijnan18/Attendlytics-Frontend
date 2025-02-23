"use client";
import { SparklesCore } from "./ui/sparkles";

export function Hero() {
  return (
    <div className="h-[40rem] w-full bg-[#050505] flex flex-col items-center justify-center overflow-hidden rounded-md mt-20 md:mt-48">
      <h1 className="md:text-7xl text-6xl lg:text-[150px] font-bold tracking-wide leading-tight text-center py-4 bg-clip-text relative z-20">
        Attendlytics
      </h1>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-[#050505] [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>

      <div className="flex space-x-8 mt-10">
        {/* Learn More Link */}
        <a href="#learn-more" className="group inline-block">
          <div className="flex items-center space-x-2">
            <span className="text-[1.5rem] text-[#9fa1a3] transition-colors duration-300 group-hover:text-white">
              Learn More
            </span>
            <svg
              className="w-4 h-4 text-[#9fa1a3] transition-transform duration-300 group-hover:text-white group-hover:translate-y-[-2px]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <div className="h-[2px] bg-[#9fa1a3] mt-1 transition-all duration-300 group-hover:translate-y-[-4px] group-hover:bg-white"></div>
        </a>
        {/* Try Now Link */}
        <a href="#try-now" className="group inline-block">
          <div className="flex items-center space-x-2">
            <span className="text-[1.5rem] text-[#9fa1a3] transition-colors duration-300 group-hover:text-white">
              Try Now
            </span>
            <svg
              className="w-4 h-4 transform rotate-45 text-[#9fa1a3] transition-transform duration-300 group-hover:text-white group-hover:translate-y-[-2px]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
          </div>
          <div className="h-[2px] bg-[#9fa1a3] mt-1 transition-all duration-300 group-hover:translate-y-[-4px] group-hover:bg-white"></div>
        </a>
      </div>
    </div>
  );
}
