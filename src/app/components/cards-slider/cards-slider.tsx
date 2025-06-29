'use client';

import { useEffect, useState } from 'react';

import Card from '@/app/components/cards-slider/item-card/item-card';
import {
  Button,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/app/components/ui-kit';
import { useWindowSize } from '@/hooks';
import type { ProductData } from '@/interfaces';
import { cn } from '@/lib';

interface Props {
  title: string;
  data: ProductData[];
  tagLabel: string;
  tagColor: string;
}

export default function CardsSlider({ title, data, tagColor, tagLabel }: Props) {
  const { width } = useWindowSize();
  const [visibleSlides, setVisibleSlides] = useState(5);

  useEffect(() => {
    if (width >= 1600) setVisibleSlides(5);
    else if (width >= 1400) setVisibleSlides(4);
    else if (width >= 1200) setVisibleSlides(3);
    else if (width >= 600) setVisibleSlides(2);
    else setVisibleSlides(1);
  }, [width]);

  const hiddenCount = data.length - visibleSlides;

  const getItemBasis = (visibleSlides: number) => {
    switch (visibleSlides) {
      case 5:
        return 'basis-1/5';
      case 4:
        return 'basis-1/4';
      case 3:
        return 'basis-1/3';
      case 2:
        return 'basis-1/2';
      case 1:
      default:
        return 'basis-full';
    }
  };

  return (
    <div className="flex flex-col gap-10.5 max-xl:gap-20 max-lg:gap-10.5 relative">
      <div className="flex items-center gap-4 flex-wrap max-sm:gap-2">
        <h4 className="uppercase font-black text-3xl! max-lg:text-xl! whitespace-nowrap">{title}</h4>
        {hiddenCount > 0 && <span className="uppercase text-3xl font-bold text-medium-gray">+{hiddenCount}</span>}
      </div>
      <div className="w-full max-w-screen-xl mx-auto px-4">
        {data.length === 0 ? (
          <div className="flex items-center justify-center py-20 text-center text-lg text-medium-gray">
            No products found
          </div>
        ) : (
          <Carousel
            key={visibleSlides}
            opts={{ slidesToScroll: visibleSlides, align: 'start', containScroll: 'trimSnaps' }}
          >
            <CarouselContent>
              {data.map((card, index) => {
                const isLastVisible = (index + 1) % visibleSlides === 0;
                return (
                  <CarouselItem key={card.id} className={cn(getItemBasis(visibleSlides), 'pl-0 pt-0')}>
                    <Card
                      className={cn(isLastVisible ? 'border-r-0! pb-[23px]!' : '')}
                      tagLabel={tagLabel}
                      tagColor={tagColor}
                      title={card.name}
                      price={card.price}
                      imageSrc={card.image}
                    />
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <div className="flex items-center gap-6 absolute top-0 right-0 max-xl:top-15 max-lg:top-0">
              <Button className="uppercase h-full" variant="blackBtn">
                See all
              </Button>
              <div className="max-sm:hidden">
                <CarouselPrevious variant="blackBtn" className="static rounded-none w-10 h-10" />
                <CarouselNext variant="blackBtn" className="static rounded-none w-10 h-10" />
              </div>
            </div>
          </Carousel>
        )}
      </div>
    </div>
  );
}
