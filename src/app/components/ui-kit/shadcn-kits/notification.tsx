import { icons } from '@/app/components/ui-kit';
import { cn } from '@/lib';

type Variants = 'positive' | 'negative';

interface Props {
  variant: Variants;
  label: string;
  className?: string;
}

function Notification({ variant, className, label }: Props) {
  const Info = icons.info;
  const CrissCross = icons.crissCross;

  const variantStyles =
    variant === 'positive'
      ? 'flex items-center gap-2 px-4 h-10.5 rounded-[4px] text-[14px] bg-super-light-green text-green border border-green'
      : 'flex items-center gap-2 px-4 h-10.5 rounded-[4px] text-[14px] bg-super-light-red text-red border border-red';

  return (
    <div className={cn(className, 'uppercase', variantStyles)}>
      <Info width={14} />
      {label}
      {variant === 'positive' ? <CrissCross width={11} /> : ''}
    </div>
  );
}

export { Notification };
