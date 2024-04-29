import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'
import { useUtil } from 'src/hooks'

const buttonVariants = cva(
	`inline-flex items-center justify-center rounded-md
   text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none
    focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 
    disabled:pointer-events-none disabled:opacity-50`,
	{
		variants: {
			variant: {
				default: 'bg-primary text-primary-foreground hover:bg-primary/90',
				destructive: 'bg-red-600 text-red-500-foreground hover:bg-red-500/90',
				outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
				secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
				ghost: 'hover:bg-accent hover:text-accent-foreground',
				link: 'text-primary underline-offset-4 hover:underline',
				redNotHover: ' border bg-[#FFDAD3]  border-[#FF8771]',
				greenNotHover: ' border bg-[#CFF2D8]  border-[#54D073]',
				defaultNotHover: 'bg-white border border-[#e9e8e8] ',
			},
			size: {
				default: 'h-10 px-4 py-2',
				sm: 'h-9 rounded-md px-3',
				lg: 'h-11 rounded-md px-8',
				icon: 'h-10 w-10',
				cardOption: 'w-full rounded-lg flex gap-4 items-center p-3 justify-start',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	}
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	const Comp = asChild ? Slot : 'button'
	const { cn } = useUtil()
	return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
})
Button.displayName = 'Button'

export { Button, buttonVariants }
