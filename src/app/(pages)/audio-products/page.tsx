'use client';

import MainLayout from '@/app/(pages)/mainLayout';
import CardsSlider from '@/app/components/cards-slider/cards-slider';
import FiltersComponent from '@/app/components/filters/filters-component';
import { useProductFilters } from '@/hooks';
import { audioProducts, filters } from '@/mocks';
import { shuffleArray } from '@/utils';

export default function AudioProductsPage() {
  const { filteredProducts, selectedFilters, toggleFilter, clearAllFilters } = useProductFilters(audioProducts);

  const hotProducts = filteredProducts.filter((product) => product.isHot);
  const shuffledHotProducts = shuffleArray(hotProducts);

  const topSoldProduct = filteredProducts.filter((product) => product.isTopSeller);
  const shuffledTopSellers = shuffleArray(topSoldProduct);

  const popularProducts = filteredProducts.filter((product) => product.isPopular);
  const shuffledPopularProduct = shuffleArray(popularProducts);

  return (
    <MainLayout
      filtersContent={
        <>
          <FiltersComponent
            filtersData={filters.audioProducts}
            selectedFilters={selectedFilters}
            onChange={toggleFilter}
            onClearAll={clearAllFilters}
          />
        </>
      }
    >
      <div className="flex flex-col gap-25">
        <CardsSlider data={shuffledHotProducts} title="Hot New Products" tagLabel="new" tagColor="bg-brown" />
        <CardsSlider data={shuffledTopSellers} title="Top sellers" tagLabel="top" tagColor="bg-green" />
        <CardsSlider data={shuffledPopularProduct} title="Popular products" tagLabel="-10%" tagColor="bg-liliac" />
      </div>
    </MainLayout>
  );
}
