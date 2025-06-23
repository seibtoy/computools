import Image from 'next/image';
import { ComponentType } from 'react';

import { Button, type IconProps, Input, icons } from '@/app/components/ui-kit';
import Logo from '@/assets/images/footer-logo.png';

export default function Footer() {
  const InfoIcon = icons.info;
  const logoIcons = {
    facebook: icons.facebook,
    instagram: icons.instagram,
    youtube: icons.youtube,
    tiktok: icons.tiktok,
    discord: icons.discord,
    reddit: icons.reddit,
    x: icons.x,
  };
  const socialMediaIconComponents: ComponentType<IconProps>[] = Object.values(logoIcons);

  return (
    <footer className="bg-light-gray lg:px-21.5 pt-15 pb-5 flex flex-col gap-15 max-lg:px-6">
      <div className="w-full flex justify-between items-center max-lg:flex-col max-lg:gap-12.5 max-lg:justify-center">
        <div className="flex justify-center items-center max-w-100 w-full">
          <Image src={Logo} alt="logo" draggable={false} className="select-none" />
        </div>
        <div className="lg:max-w-100 w-full flex flex-col gap-4">
          <h5 className="uppercase">Sign up for newsletter</h5>
          <div className="flex flex-col gap-4">
            <div className="flex gap-5">
              <div className="pt-1.5">
                <InfoIcon width={20} height={20} strokeWidth={1} />
              </div>
              <span className="uppercase">stay up to date with our new promotions and offers</span>
            </div>
            <div className="flex w-full">
              <div className="flex-1">
                <Input
                  placeholder="E-Mail"
                  variant="search"
                  className="bg-white placeholder:font-semibold placeholder:text-black"
                />
              </div>
              <Button variant="blackBtn" iconPosition="right" icon="rightArrow" className="max-lg:hidden">
                subscribe
              </Button>
              <Button variant="blackBtn" className="lg:hidden">
                subscribe
              </Button>
            </div>
          </div>
        </div>
        <div className="lg:max-w-100 w-full flex flex-col gap-4">
          <h5 className="uppercase">Our community</h5>
          <div className="flex flex-col gap-4">
            <div className="flex gap-5">
              <div className="pt-1.5">
                <InfoIcon width={20} height={20} strokeWidth={1} />
              </div>
              <span className="uppercase">you can find more useful information and expand your circle of friends</span>
            </div>
            <div className="flex justify-evenly gap-4 flex-wrap">
              {socialMediaIconComponents.map((IconComponent, index) => {
                return (
                  <IconComponent
                    key={index}
                    width={20}
                    height={20}
                    className="inline-block mr-2 cursor-pointer"
                    color="var(--color-gray)"
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <hr className="border-medium-gray" />
        <div className="flex justify-between ">
          <span className="uppercase text-sm text-gray">Copyright © 2024. All rights reserved</span>
          <span className="uppercase text-sm text-gray">by computools</span>
        </div>
      </div>
    </footer>
  );
}
