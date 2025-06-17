import Image from 'next/image';

import { Button, Input, icons } from '@/app/components/ui-kit';

import MobileLogo from '../../../../public/assets/background-logo.png';
import DesktopLogo from '../../../../public/assets/header-logo.png';

const MagnifyingGlass = icons.magnifyingGlass;
const MenuAlt = icons.menuAlt;
const ChevronDown = icons.chevronDown;
const Heart = icons.heart;
const Cart = icons.cart;
const CrossedUser = icons.crossedUser;

export const Header = () => {
  return (
    <section className="flex items-center max-lg:justify-between max-lg:h-15 max-lg:pr-6 h-21.5 bg-light-gray">
      <Image src={MobileLogo} alt="logo" className="max-lg:h-15 max-lg:w-15 lg:hidden" />
      <Image src={DesktopLogo} alt="logo" className="h-21.5 w-86 max-lg:hidden" />
      <div className="flex gap-6 lg:hidden">
        <MagnifyingGlass width={20} height={20} color="black" className="cursor-pointer" />
        <MenuAlt width={20} height={20} color="black" className="cursor-pointer" />
      </div>
      <div className="w-full h-full flex justify-center items-center pl-10 pr-21.5 max-lg:hidden gap-10">
        <div className="flex flex-1">
          <div className="flex-1">
            <Input
              placeholder=""
              variant="search"
              className="bg-white w-full"
              leftIcon="magnifyingGlass"
              rightIcon="microphone"
            />
          </div>
          <Button variant="greenBtn" iconPosition="right" icon="rightArrow" className="h-full">
            Search
          </Button>
        </div>
        <div className="flex items-center h-full">
          <div className="flex items-center gap-2 h-full px-2">
            ENG <ChevronDown />
          </div>
          <div className="h-10 border-1 border-medium-gray ml-5 mr-7"></div>
          <div className="flex items-center gap-10">
            <div className="relative ">
              <Heart />
              <div className="absolute bottom-3.5 left-3.5 rounded-full bg-black w-4 h-4 text-sm pb-0.5 text-white flex items-center justify-center">
                12
              </div>
            </div>
            <div className="relative">
              <Cart />
              <div className="absolute bottom-3.5 left-3.5 rounded-full bg-black w-4 h-4 text-sm pb-0.5 text-white flex items-center justify-center">
                0
              </div>
            </div>
            <CrossedUser color="var(--color-red)" />
          </div>
        </div>
      </div>
    </section>
  );
};
