'use client';

import { useRef } from 'react';
import Slider, { type Settings } from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import { Button } from '@/app/components/ui-kit';
import type { ProductData } from '@/interfaces';

import Card from './item-card/item-card';

interface Props {
  title: string;
  data: ProductData[];
  tagLabel: string;
  tagColor: string;
}

export default function CardsSlider({ title, data, tagColor, tagLabel }: Props) {
  const sliderRef = useRef<Slider | null>(null);

  const handleLeft = () => sliderRef.current?.slickPrev();
  const handleRight = () => sliderRef.current?.slickNext();

  const settings: Settings = {
    dots: false,
    infinite: false,
    speed: 400,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col gap-10.5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 flex-wrap max-sm:gap-2">
          <h4 className="uppercase font-black text-3xl! max-lg:text-xl! whitespace-nowrap">{title}</h4>
          <span className="uppercase text-3xl font-bold text-medium-gray max-lg:text-xl!">
            +{data.length - (settings.slidesToShow ?? 0)}
          </span>
        </div>
        <div className="flex items-center gap-6">
          <Button className="uppercase" variant="blackBtn">
            See all
          </Button>
          <div className="flex max-sm:hidden">
            <Button className="uppercase" variant="blackBtn" icon="leftArrow" onClick={handleLeft} />
            <Button className="uppercase" variant="blackBtn" icon="rightArrow" onClick={handleRight} />
          </div>
        </div>
      </div>
      <div className="w-full max-w-screen-xl mx-auto px-4">
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
      </div>
    </div>
  );
}
