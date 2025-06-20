export interface ProductData {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  filters: Record<string, string | number | string[]>;
  isHot: boolean;
  isNew: boolean;
  isTopSeller: boolean;
  isPopular: boolean;
  isAccessory: boolean;
}
