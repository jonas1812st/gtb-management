import { cn } from "@/lib/utils";
import "@/styles/loading.scss";

type Size = "base" | "sm";
const Loader = ({
  size,
  screen = false,
}: {
  className?: string;
  size?: Size;
  screen?: boolean;
}) => (
  <div
    role="status"
    className={cn(
      "w-full flex justify-center items-center",
      screen ? "h-screen" : "h-full",
    )}
  >
    <svg
      className={`inline ${size === "sm" ? "w-8 h-8" : "w-24 h-24"} animate-spin`}
      width="24"
      height="24"
      stroke="#4d7c8a"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="spinner_V8m1">
        <circle cx="12" cy="12" r="9.5" fill="none" strokeWidth="2"></circle>
      </g>
    </svg>
    <span className="sr-only">Loading...</span>
  </div>
);

export default Loader;
