import { TextReveal } from "./magicui/text-reveal";

export function ProblemStatement() {
    return (
        <div className="z-10 flex min-h-64 items-center justify-center rounded-lg bg-black">
            <TextReveal text="What if you could mark attendance for an entire class in 30 seconds?" />
        </div>
    );
}
