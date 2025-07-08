import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 overflow-hidden group",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 hover:from-purple-500 hover:to-pink-500 active:scale-95 before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:via-transparent before:to-white/20 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700",
        destructive:
          "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg shadow-red-500/25 hover:shadow-xl hover:shadow-red-500/40 hover:from-red-500 hover:to-red-600 active:scale-95 before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:via-transparent before:to-white/20 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700",
        outline:
          "border-2 border-purple-500/30 bg-transparent text-purple-200 shadow-sm hover:bg-purple-500/10 hover:border-purple-400/50 hover:text-purple-100 hover:shadow-lg hover:shadow-purple-500/20 active:scale-95 backdrop-blur-sm",
        secondary:
          "bg-gradient-to-r from-slate-700 to-slate-800 text-gray-200 shadow-lg shadow-slate-500/20 hover:shadow-xl hover:shadow-slate-500/30 hover:from-slate-600 hover:to-slate-700 active:scale-95 before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/10 before:via-transparent before:to-white/10 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700",
        ghost: 
          "text-gray-300 hover:bg-purple-500/20 hover:text-purple-100 hover:shadow-lg hover:shadow-purple-500/20 active:scale-95 backdrop-blur-sm",
        link: 
          "text-purple-400 underline-offset-4 hover:underline hover:text-purple-300 transition-colors",
        glass:
          "bg-white/10 backdrop-blur-xl border border-white/20 text-white shadow-lg shadow-black/20 hover:bg-white/20 hover:border-white/30 hover:shadow-xl hover:shadow-black/30 active:scale-95",
        gradient:
          "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 active:scale-95 before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:via-transparent before:to-white/20 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700",
        music:
          "bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 hover:from-cyan-500 hover:to-blue-500 active:scale-95 before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:via-transparent before:to-white/20 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-lg px-4 text-xs",
        lg: "h-12 rounded-xl px-8 text-base",
        icon: "h-11 w-11",
        xl: "h-14 rounded-2xl px-10 text-lg",
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
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

// Enhanced Button Components
const GlowButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size }),
          "animate-pulse hover:animate-none",
          "shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/70",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
GlowButton.displayName = "GlowButton";

const NeonButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "outline", size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size }),
          "border-2 border-cyan-400 text-cyan-400 shadow-lg shadow-cyan-500/50",
          "hover:bg-cyan-400/10 hover:text-cyan-300 hover:shadow-xl hover:shadow-cyan-500/70",
          "before:absolute before:inset-0 before:border-2 before:border-cyan-400/20 before:rounded-xl",
          "before:animate-pulse",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
NeonButton.displayName = "NeonButton";

const FloatingButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size }),
          "transform hover:scale-110 hover:-translate-y-1 transition-all duration-300",
          "shadow-2xl hover:shadow-3xl",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
FloatingButton.displayName = "FloatingButton";

export { 
  Button, 
  buttonVariants, 
  GlowButton, 
  NeonButton, 
  FloatingButton 
};