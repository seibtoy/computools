import { type ComponentProps, useId } from 'react';

import { type IconName, icons } from '@/app/components/ui-kit';
import { cn } from '@/lib/utils';

type InputVariant = 'default' | 'search' | 'auth';

interface Props extends ComponentProps<'input'> {
  variant?: InputVariant;
  placeholder: string;
  label?: string;
  labelClassname?: string;
  leftIcon?: IconName;
  rightIcon?: IconName;
  rightIconColor?: string;
  leftIconColor?: string;
}

function Input({
  className,
  label,
  leftIcon,
  rightIcon,
  labelClassname,
  id,
  rightIconColor,
  leftIconColor,
  placeholder,
  variant = 'default',
  type,
  ...props
}: Props) {
  const inputId = useId();
  const finalId = id ?? inputId;
  const LeftIconComponent = leftIcon ? icons[leftIcon] : null;
  const RightIconComponent = rightIcon ? icons[rightIcon] : null;

  const regular =
    'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive';

  const search =
    'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-10 w-full min-w-0 bg-transparent px-3 py-1 text-base transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive';

  const auth =
    'file:text-foreground font-urw-geometric placeholder:text-medium-gray selection:bg-primary selection:text-primary-foreground dark:bg-input/30 flex h-10 w-full min-w-0 bg-transparent border-b-1 border-medium-gray px-4 py-1 text-base transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive';

  const iconPadding = cn(
    LeftIconComponent && 'pl-10',
    RightIconComponent && 'pr-10',
    !LeftIconComponent && 'pl-4',
    !RightIconComponent && 'pr-4'
  );

  const variants = {
    default: regular,
    search: search,
    auth: auth,
  };

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className={cn(labelClassname, 'font-medium text-sm')} htmlFor={finalId}>
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        {LeftIconComponent && (
          <LeftIconComponent
            color={leftIconColor}
            className="absolute left-3 w-5 h-5 text-muted-foreground pointer-events-none"
          />
        )}
        <input
          id={finalId}
          type={type}
          data-slot="input"
          placeholder={placeholder}
          className={cn(variants[variant], iconPadding, className)}
          {...props}
        />
        {RightIconComponent && (
          <RightIconComponent
            color={rightIconColor}
            className="absolute right-3 w-5 h-5 text-muted-foreground pointer-events-none"
          />
        )}
      </div>
    </div>
  );
}

export { Input };
