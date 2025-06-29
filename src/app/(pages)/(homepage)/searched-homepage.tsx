'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

import CardsSlider from '@/app/components/cards-slider/cards-slider';
import Card from '@/app/components/cards-slider/item-card/item-card';
import { allProducts } from '@/mocks';

type Props = {
  onSearchCheck: (active: boolean) => void;
};

export default function SearchedHomepage({ onSearchCheck }: Props) {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('search') ?? '';

  const searchProduct = allProducts.filter((p) => p.name.toLowerCase().includes(searchQuery?.toLowerCase() ?? ''));

  const firstSearchResult = searchProduct[0];
  const similarProductsName = searchQuery?.split(' ')[0].toLowerCase();

  const similarProducts = allProducts.filter(
    (p) =>
      p.id !== firstSearchResult?.id &&
      p.category === firstSearchResult?.category &&
      p.name.toLowerCase().includes(similarProductsName)
  );

  const isSearchActive = searchQuery.trim() !== '' && searchProduct.length > 0;

  useEffect(() => {
    onSearchCheck(isSearchActive);
  }, [isSearchActive, onSearchCheck]);

  if (!isSearchActive) return null;

  return (
    <div className="flex flex-col gap-25">
      <div className="flex flex-col gap-10 max-w-65">
        <h4 className="uppercase">Search results</h4>
        <Card
          imageSrc={searchProduct[0].image}
          price={searchProduct[0].price}
          title={searchProduct[0].name}
          tagColor="bg-green"
          tagLabel="Top"
        />
      </div>
      <CardsSlider data={similarProducts} title="Similar products" tagLabel="new" tagColor="bg-brown" />
    </div>
  );
}
