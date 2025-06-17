import { Slot } from '@radix-ui/react-slot';
import { type VariantProps, cva } from 'class-variance-authority';
import type { ComponentProps } from 'react';

import { type IconName, icons } from '@/app/components/ui-kit';
import { cn } from '@/lib/utils';

interface Props extends ComponentProps<'button'>, VariantProps<typeof buttonVariants> {
  icon?: IconName;
  iconPosition?: 'left' | 'right';
  asChild?: boolean;
}

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground shadow-xs hover:bg-primary/90',
        blackBtn:
          'bg-black text-primary-foreground rounded-none uppercase font-regular text-base hover:cursor-pointer hover:bg-green-flash hover:text-black hover:font-bold',
        grayBtn:
          'bg-light-gray text-gray rounded-none uppercase font-regular text-base hover:cursor-pointer hover:bg-green-flash hover:text-black hover:font-bold',
        whiteBtn:
          'bg-white text-black border-1 border-medium-gray rounded-none uppercase font-regular text-base hover:cursor-pointer hover:bg-light-gray',
      },
      size: {
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        icon: 'size-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

function Button({ className, variant, size, asChild = false, children, iconPosition = 'left', icon, ...props }: Props) {
  const Comp = asChild ? Slot : 'button';
  const IconComponent = icon ? icons[icon] : null;

  return (
    <Comp
      data-slot="button"
      className={cn('inline-flex justify-center items-center gap-2', buttonVariants({ variant, size, className }))}
      {...props}
    >
      {IconComponent && iconPosition === 'left' && <IconComponent className="w-4 h-4" />}
      {children}
      {IconComponent && iconPosition === 'right' && <IconComponent className="w-4 h-4" />}
    </Comp>
  );
}

export { Button, buttonVariants };
