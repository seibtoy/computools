import filters from '../mocks/filters.json';
import audioProducts from '../mocks/products/audio-proudcts.json';
import chemicalsProducts from '../mocks/products/chemicals.json';
import computersProducts from '../mocks/products/computers.json';
import dishesProducts from '../mocks/products/dishes.json';
import dronesProducts from '../mocks/products/drones.json';
import gamingProducts from '../mocks/products/gaming-products.json';
import laptopsProducts from '../mocks/products/laptops.json';
import largeAppliancesProducts from '../mocks/products/large-appliances.json';
import smallAppliancesProducts from '../mocks/products/small-appliances.json';
import smartphonesProducts from '../mocks/products/smartphones.json';
import toolsProducts from '../mocks/products/tools.json';
import tvMonitorsProducts from '../mocks/products/tv-monitors.json';

const allProducts = [
  audioProducts,
  chemicalsProducts,
  computersProducts,
  dishesProducts,
  dronesProducts,
  gamingProducts,
  laptopsProducts,
  largeAppliancesProducts,
  smallAppliancesProducts,
  smartphonesProducts,
  toolsProducts,
  tvMonitorsProducts,
].flat();

export {
  audioProducts,
  chemicalsProducts,
  computersProducts,
  dishesProducts,
  dronesProducts,
  gamingProducts,
  laptopsProducts,
  largeAppliancesProducts,
  smallAppliancesProducts,
  smartphonesProducts,
  toolsProducts,
  tvMonitorsProducts,
  filters,
  allProducts,
};
