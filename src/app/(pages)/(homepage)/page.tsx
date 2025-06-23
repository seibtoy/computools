import CardsSlider from '@/app/components/cards-slider/cards-slider';
import { allProducts } from '@/mocks';
import { shuffleArray } from '@/utils';

export default function Homepage() {
  const hotProducts = allProducts.filter((product) => product.isHot);
  const shuffledHotProducts = shuffleArray(hotProducts);

  const topSoldProduct = allProducts.filter((product) => product.isTopSeller);
  const shuffledTopSellers = shuffleArray(topSoldProduct);

  const popularProducts = allProducts.filter((product) => product.isPopular);
  const shuffledPopularProduct = shuffleArray(popularProducts);

  const accessoriesProducts = allProducts.filter((product) => product.isAccessory);
  const shuffledAccessoriesProduct = shuffleArray(accessoriesProducts);

  return (
    <div className="flex flex-col gap-25">
      <CardsSlider data={shuffledHotProducts} title="Hot New Products" tagLabel="new" tagColor="bg-brown" />
      <CardsSlider data={shuffledTopSellers} title="Top sellers" tagLabel="top" tagColor="bg-green" />
      <CardsSlider data={shuffledPopularProduct} title="Popular products" tagLabel="-10%" tagColor="bg-liliac" />
      <CardsSlider
        data={shuffledAccessoriesProduct}
        title="popular accessories"
        tagLabel="-10%"
        tagColor="bg-turquoise"
      />
    </div>
  );
}
