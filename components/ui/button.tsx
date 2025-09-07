import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import Icon from "@mdi/react";
import { mdiLoading } from "@mdi/js";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        light: "bg-primary/10 text-foreground hover:bg-primary/20",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        xs: "h-7 rounded-md px-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10", // FIX: maybe update these classnames to h-8 w-8... first look into the project to find similar custom overrides when configuring size="icon" or size={"icon"}
      },
      iconEnabled: {
        true: "flex items-center space-x-2",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  icon?: {
    path: string;
    iconPos?: "start" | "end"; // TODO: not yet implemented
    className?: string;
    size?: number; // default 0.7
  };
}

export type ButtonVariants = ButtonProps["variant"];

const TextComponent = ({ enabled, children }: React.PropsWithChildren<{ enabled: boolean }>) =>
  enabled ? <span>{children}</span> : <>{children}</>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, loading = false, icon, children, ...props }, ref) => {
    const iconEnabled = !!icon?.path;

    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className, iconEnabled }))}
        ref={ref}
        disabled={loading}
        {...props}
      >
        {iconEnabled ? (
          <Icon
            path={!loading ? icon.path : mdiLoading}
            className={cn(icon.className, loading ? "animate-spin" : "")}
            size={icon?.size ?? 0.7} // TODO: maybe delete the default size to remind everytime to set a size
          />
        ) : null}
        <TextComponent enabled={iconEnabled}>{children}</TextComponent>
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
