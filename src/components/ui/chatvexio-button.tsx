import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const chatvexioButtonVariants = cva(
  "cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground shadow-sm hover:bg-[hsl(var(--primary-hover))] hover:shadow-md transform hover:-translate-y-0.5 hover:cursor-pointer",
        secondary: "bg-secondary text-secondary-foreground border border-primary hover:bg-[hsl(var(--secondary-hover))] shadow-sm hover:shadow-md transform hover:-translate-y-0.5",
        outline: "border border-border bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-6 py-3",
        sm: "h-8 rounded-md px-4 text-xs",
        lg: "h-12 rounded-lg px-8 text-base font-semibold",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

export interface ChatvexioButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof chatvexioButtonVariants> {
  asChild?: boolean
}

const ChatvexioButton = React.forwardRef<HTMLButtonElement, ChatvexioButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(chatvexioButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
ChatvexioButton.displayName = "ChatvexioButton"

export { ChatvexioButton, chatvexioButtonVariants }