"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useParams } from "react-router-dom";


export default function SignupFormDemo() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  const { role } = useParams<{ role: string }>();
  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 bg-black h-[50vh]">
      <h2 className="font-bold text-3xl text-neutral-200 justify-center text-center">
        Log In as <span className="text-blue-500">{role}</span>
      </h2>
      <form className="my-8" onSubmit={handleSubmit}>

        <LabelInputContainer className="mb-4 h-20">
          <Label className="text-white" htmlFor="email">Email Address</Label>
          <Input className="bg-[#27272a] text-white" id="email" placeholder="" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4 h-20">
          <Label className="text-white" htmlFor="password">Password</Label>
          <Input className="bg-[#27272a] text-white" id="password" placeholder="" type="password" />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-blue-500 to-blue-600 bg-blue-700 w-full text-white rounded-md h-12 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Log In &rarr;
          <BottomGradient />
        </button>


      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-gray-100 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
