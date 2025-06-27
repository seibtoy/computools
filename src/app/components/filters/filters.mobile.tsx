import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import Image from 'next/image';
import { type ComponentProps } from 'react';

import {
  DialogTitle,
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  icons,
} from '@/app/components/ui-kit';

import Logo from '../../../../public/assets/images/logo.png';
import FiltersContent from './filters-сontent';

export default function FiltersSheet(props: ComponentProps<typeof FiltersContent>) {
  const Funnel = icons.funnel;
  const CrissCross = icons.crissCross;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Funnel width={20} height={20} color="black" className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="bg-white border-white text-black flex flex-col gap-5 rounded-none px-6 w-screen max-lg:overflow-y-auto scrollbar-hide max-lg:pb-10"
      >
        <SheetHeader className="h-21 flex flex-row justify-between items-center border-b-1 border-gray">
          <Image src={Logo} alt="Logo" width={40} height={40} />
          <SheetClose>
            <CrissCross className="cursor-pointer" color="var(--color-black)" />
          </SheetClose>
        </SheetHeader>
        <VisuallyHidden>
          <DialogTitle className="hidden">Filters</DialogTitle>
        </VisuallyHidden>
        <FiltersContent {...props} />
      </SheetContent>
    </Sheet>
  );
}
