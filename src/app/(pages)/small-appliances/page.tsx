import CardsSlider from '@/app/components/cards-slider/cards-slider';
import { smallAppliancesProducts } from '@/mocks';
import { shuffleArray } from '@/utils';

export default function SmallAppliancesPage() {
  const hotProducts = smallAppliancesProducts.filter((product) => product.isHot);
  const shuffledHotProducts = shuffleArray(hotProducts);

  const topSoldProduct = smallAppliancesProducts.filter((product) => product.isTopSeller);
  const shuffledTopSellers = shuffleArray(topSoldProduct);

  const popularProducts = smallAppliancesProducts.filter((product) => product.isPopular);
  const shuffledPopularProduct = shuffleArray(popularProducts);

  return (
    <div className="flex flex-col gap-25">
      <CardsSlider data={shuffledHotProducts} title="Hot New Products" tagLabel="new" tagColor="bg-brown" />
      <CardsSlider data={shuffledTopSellers} title="Top sellers" tagLabel="top" tagColor="bg-green" />
      <CardsSlider data={shuffledPopularProduct} title="Popular products" tagLabel="-10%" tagColor="bg-liliac" />
    </div>
  );
}
