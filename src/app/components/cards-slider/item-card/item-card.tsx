'use client';

import Image from 'next/image';
import { useState } from 'react';

import { icons } from '@/app/components/ui-kit';
import { cn } from '@/lib';

interface Props {
  tagColor: string;
  tagLabel: string;
  imageSrc: string;
  price: number;
  title: string;
  className?: string;
}

export default function Card({ tagLabel, tagColor, imageSrc, price, title, className }: Props) {
  const Heart = icons.heart;
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div
      className={cn(
        className,
        'flex flex-col gap-7 w-full px-7.5 pt-7.5 pb-6 border-b-1 border-medium-gray border-r-1'
      )}
    >
      <div className="flex items-center justify-between">
        <div className={cn(tagColor, 'uppercase w-12.5 h-6 flex items-center justify-center text-white text-xs')}>
          {tagLabel}
        </div>
        <Heart fill={isLiked ? 'var(--color-green-flash)' : 'white'} onClick={() => setIsLiked((prev) => !prev)} />
      </div>
      <div className="relative w-full aspect-[3/4] max-h-70">
        <Image
          src={imageSrc}
          alt="item"
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          loading="lazy"
          className="object-contain select-none"
        />
      </div>
      <div className="flex flex-col gap-2">
        <span className="uppercase text-lg truncate">{title}</span>
        <span className="font-extrabold text-xl">${price}</span>
      </div>
    </div>
  );
}
