import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus-visible:ring-blue-500 ring-offset-white",
        primary: "border border-blue-600 bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500 ring-offset-white",
        destructive: "border border-red-600 bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500 ring-offset-white",
        outline: "border border-gray-300 bg-transparent text-gray-700 hover:bg-gray-100 focus-visible:ring-gray-500 ring-offset-white",
        secondary: "border border-gray-200 bg-gray-100 text-gray-700 hover:bg-gray-200 focus-visible:ring-gray-500 ring-offset-white",
        ghost: "text-gray-700 hover:bg-gray-100 focus-visible:ring-gray-500 ring-offset-white",
        link: "text-blue-600 underline-offset-4 hover:underline focus-visible:ring-blue-500",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 px-3 text-xs",
        lg: "h-12 px-6 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
