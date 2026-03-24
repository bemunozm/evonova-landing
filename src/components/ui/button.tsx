import * as React from "react"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "default", ...props }, ref) => {
    
    // Simulating class-variance-authority for the button
    const baseClasses = "inline-flex items-center justify-center whitespace-nowrap rounded-[var(--radius)] text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
    
    const variants: Record<string, string> = {
      default: "bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--primary)]/90",
      destructive: "bg-red-500 text-slate-50 hover:bg-red-500/90",
      outline: "border border-[var(--border)] bg-transparent hover:bg-[var(--surface)] hover:text-[var(--foreground)]",
      secondary: "bg-[var(--surface)] text-[var(--foreground)] hover:bg-[var(--surface)]/80",
      ghost: "hover:bg-[var(--surface)] hover:text-[var(--foreground)]",
      link: "text-[var(--primary)] underline-offset-4 hover:underline",
    }
    
    const sizes: Record<string, string> = {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-12 rounded-md px-8 text-base",
      icon: "h-10 w-10",
    }

    const variantClass = variants[variant] || variants.default
    const sizeClass = sizes[size] || sizes.default
    const combinedClasses = `${baseClasses} ${variantClass} ${sizeClass} ${className}`

    return (
      <button
        className={combinedClasses}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
