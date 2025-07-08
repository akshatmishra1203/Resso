import * as React from "react";
import { cn } from "@/lib/utils";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "group relative overflow-hidden rounded-2xl border border-white/10",
      "bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90",
      "backdrop-blur-xl shadow-xl shadow-purple-500/5",
      "hover:shadow-2xl hover:shadow-purple-500/10 hover:border-purple-500/20",
      "transition-all duration-500 hover:scale-[1.02]",
      "before:absolute before:inset-0 before:rounded-2xl",
      "before:bg-gradient-to-br before:from-purple-600/5 before:via-transparent before:to-pink-600/5",
      "before:opacity-0 before:transition-opacity before:duration-500",
      "hover:before:opacity-100",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative flex flex-col space-y-2 p-8",
      "border-b border-white/5",
      "bg-gradient-to-r from-transparent via-white/[0.02] to-transparent",
      className
    )}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "text-xl font-bold leading-tight tracking-tight",
      "bg-gradient-to-r from-white via-purple-100 to-pink-100",
      "bg-clip-text text-transparent",
      "group-hover:from-purple-200 group-hover:via-white group-hover:to-pink-200",
      "transition-all duration-500",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "text-sm text-gray-400 leading-relaxed",
      "group-hover:text-gray-300 transition-colors duration-300",
      className
    )}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative p-8 pt-6",
      "text-gray-200",
      className
    )}
    {...props}
  />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative flex items-center justify-between p-8 pt-0",
      "border-t border-white/5",
      "bg-gradient-to-r from-transparent via-white/[0.02] to-transparent",
      className
    )}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

// Enhanced Card Variants
const GlassCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <Card
    ref={ref}
    className={cn(
      "bg-white/5 backdrop-blur-2xl border-white/20",
      "hover:bg-white/10 hover:border-white/30",
      className
    )}
    {...props}
  />
));
GlassCard.displayName = "GlassCard";

const GradientCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <Card
    ref={ref}
    className={cn(
      "bg-gradient-to-br from-purple-900/20 via-slate-800/40 to-pink-900/20",
      "border-purple-500/20 hover:border-purple-400/40",
      "shadow-purple-500/20 hover:shadow-purple-500/30",
      className
    )}
    {...props}
  />
));
GradientCard.displayName = "GradientCard";

const MusicCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <Card
    ref={ref}
    className={cn(
      "bg-gradient-to-br from-indigo-900/30 via-purple-800/20 to-pink-900/30",
      "border-indigo-500/20 hover:border-indigo-400/40",
      "shadow-indigo-500/20 hover:shadow-indigo-500/30",
      "after:absolute after:inset-0 after:rounded-2xl",
      "after:bg-gradient-to-tr after:from-transparent after:via-white/[0.02] after:to-transparent",
      "after:opacity-0 after:transition-opacity after:duration-500",
      "hover:after:opacity-100",
      className
    )}
    {...props}
  />
));
MusicCard.displayName = "MusicCard";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  GlassCard,
  GradientCard,
  MusicCard,
};