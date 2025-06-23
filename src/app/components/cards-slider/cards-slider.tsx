'use client';

import { useEffect, useRef, useState } from 'react';
import Slider, { type Settings } from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import Card from '@/app/components/cards-slider/item-card/item-card';
import { Button } from '@/app/components/ui-kit';
import { useWindowSize } from '@/hooks';
import type { ProductData } from '@/interfaces';

interface Props {
  title: string;
  data: ProductData[];
  tagLabel: string;
  tagColor: string;
}

export default function CardsSlider({ title, data, tagColor, tagLabel }: Props) {
  const sliderRef = useRef<Slider | null>(null);
  const { width } = useWindowSize();
  const [visibleSlides, setVisibleSlides] = useState(5);

  useEffect(() => {
    if (width >= 1600) setVisibleSlides(5);
    else if (width >= 1400) setVisibleSlides(4);
    else if (width >= 1200) setVisibleSlides(3);
    else if (width >= 600) setVisibleSlides(2);
    else setVisibleSlides(1);
  }, [width]);

  useEffect(() => {
    sliderRef.current?.slickGoTo(0);
  }, [data]);

  const hiddenCount = data.length - visibleSlides;

  const settings: Settings = {
    dots: false,
    infinite: false,
    speed: 400,
    arrows: false,
    slidesToShow: visibleSlides,
    slidesToScroll: visibleSlides,
  };

  return (
    <div className="flex flex-col gap-10.5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 flex-wrap max-sm:gap-2">
          <h4 className="uppercase font-black text-3xl! max-lg:text-xl! whitespace-nowrap">{title}</h4>
          {hiddenCount > 0 && <span className="uppercase text-3xl font-bold text-medium-gray">+{hiddenCount}</span>}
        </div>
        <div className="flex items-center gap-6">
          <Button className="uppercase" variant="blackBtn">
            See all
          </Button>
          <div className="flex max-sm:hidden">
            <Button
              className="uppercase"
              variant="blackBtn"
              icon="leftArrow"
              onClick={() => sliderRef.current?.slickPrev()}
            />
            <Button
              className="uppercase"
              variant="blackBtn"
              icon="rightArrow"
              onClick={() => sliderRef.current?.slickNext()}
            />
          </div>
        </div>
      </div>
      <div className="w-full max-w-screen-xl mx-auto px-4">
        {data.length === 0 ? (
          <div className="flex items-center justify-center py-20 text-center text-lg text-medium-gray">
            No products found
          </div>
        ) : (
          <Slider ref={sliderRef} {...settings}>
            {data.map((card) => (
              <Card
                key={card.id}
                tagLabel={tagLabel}
                tagColor={tagColor}
                title={card.name}
                price={card.price}
                imageSrc={card.image}
              />
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
}
