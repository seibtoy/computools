import CardsSlider from '@/app/components/cards-slider/cards-slider';
import { smartphonesProducts } from '@/mocks';
import { shuffleArray } from '@/utils';

export default function SmartphonesPage() {
  const hotProducts = smartphonesProducts.filter((product) => product.isHot);
  const shuffledHotProducts = shuffleArray(hotProducts);

  const topSoldProduct = smartphonesProducts.filter((product) => product.isTopSeller);
  const shuffledTopSellers = shuffleArray(topSoldProduct);

  const popularProducts = smartphonesProducts.filter((product) => product.isPopular);
  const shuffledPopularProduct = shuffleArray(popularProducts);

  return (
    <div className="flex flex-col gap-25">
      <CardsSlider data={shuffledHotProducts} title="Hot New Products" tagLabel="new" tagColor="bg-brown" />
      <CardsSlider data={shuffledTopSellers} title="Top sellers" tagLabel="top" tagColor="bg-green" />
      <CardsSlider data={shuffledPopularProduct} title="Popular products" tagLabel="-10%" tagColor="bg-liliac" />
    </div>
  );
}
