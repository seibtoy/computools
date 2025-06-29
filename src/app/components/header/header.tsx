'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { AuthDialog } from '@/app/components/dialogs/authentication';
import PersonalAreaPopupMobile from '@/app/components/header/personal-area/personal-area.mobile.sheet';
import PersonalAreaPopup from '@/app/components/header/personal-area/personal-area.popup';
import { Badge, SearchDropdown, icons } from '@/app/components/ui-kit';
import { cn } from '@/lib';
import { useAuthStore } from '@/store';

import MobileLogo from '../../../../public/assets/images/background-logo.png';
import DesktopLogo from '../../../../public/assets/images/header-logo.png';

const MagnifyingGlass = icons.magnifyingGlass;
const ChevronDown = icons.chevronDown;
const Heart = icons.heart;
const Cart = icons.cart;
const CrossedUser = icons.crossedUser;

export default function Header() {
  const [isOpenAuth, setIsOpenAuth] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  return (
    <header className="flex items-center max-lg:justify-between max-lg:h-15 max-lg:pr-6 h-21.5 bg-light-gray">
      <Link href="/" className="shrink-0">
        <Image src={MobileLogo} alt="logo" className="max-lg:h-15 max-lg:w-15 lg:hidden cursor-pointer" />
      </Link>
      <Link href="/" className="shrink-0">
        <Image src={DesktopLogo} alt="logo" className="h-21.5 w-86 max-lg:hidden cursor-pointer" />
      </Link>
      <div className="w-full h-full flex justify-center items-center lg:pl-10 lg:pr-21.5 max-lg:px-4 gap-10">
        <SearchDropdown isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} />
        <div className="flex items-center h-full max-lg:hidden">
          <div className="flex items-center gap-2 h-full px-2 font-medium">
            ENG <ChevronDown width={14} height={14} />
          </div>
          <div className="h-10 border-1 border-medium-gray ml-5 mr-7"></div>
          <div className="flex items-center gap-10">
            <div className="relative ">
              <Heart width={20} height={20} />
              <Badge className="absolute bottom-4 left-4 h-4 w-4 pb-1 rounded-full px-1 flex items-center justify-center">
                12
              </Badge>
            </div>
            <div className="relative">
              <Cart width={20} height={20} />
              <Badge className="absolute bottom-4 left-4 h-4 w-4 pb-1 rounded-full px-1 flex items-center justify-center">
                0
              </Badge>
            </div>
            {isLoggedIn ? (
              <PersonalAreaPopup />
            ) : (
              <CrossedUser
                width={20}
                height={20}
                type="button"
                color="var(--color-red)"
                className="cursor-pointer"
                onClick={() => setIsOpenAuth(true)}
              />
            )}
          </div>
        </div>
      </div>
      <div className="flex gap-6 lg:hidden">
        <MagnifyingGlass
          width={20}
          height={20}
          color="black"
          className={cn(isSearchOpen ? 'hidden' : 'cursor-pointer')}
          onClick={() => setIsSearchOpen(true)}
        />
        <PersonalAreaPopupMobile onOpenChange={setIsOpenAuth} />
      </div>
      <AuthDialog open={isOpenAuth} onOpenChange={setIsOpenAuth} />
    </header>
  );
}
