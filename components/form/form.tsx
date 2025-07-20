import { cn } from "@/lib/utils";

export const FormLabel = ({
  children,
  htmlFor,
  className,
}: {
  children: React.ReactNode;
  htmlFor: string;
  className?: string;
}) => (
  <label htmlFor={htmlFor} className={cn("text-gray-600 font-medium text-sm", className)}>
    {children}
  </label>
);

export const InputDescription = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <p className={cn("text-muted-foreground text-xs", className)}>{children}</p>
);

export const ErrorMessage = ({ children }: { children: React.ReactNode | undefined }) => (
  <span className="text-xs font-medium text-red-500">{children}</span>
);
