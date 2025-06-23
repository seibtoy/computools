import Image from 'next/image';

import HeadphonesBanner from '@/assets/images/banners/headphones-banner.png';
import LaptopBanner from '@/assets/images/banners/laptop-banner.png';
import MainBanner from '@/assets/images/banners/main-banner.png';
import TabletBanner from '@/assets/images/banners/tablet-banner.png';

export default function Banner() {
  return (
    <section className="flex flex-col gap-8">
      <div className="flex">
        <Image src={MainBanner} alt="main-banner" className="cursor-pointer flex-1" />
      </div>
      <div className="flex justify-between gap-8 flex-1">
        <div>
          <Image src={LaptopBanner} alt="laptop-banner" className="cursor-pointer" />
        </div>
        <div>
          <Image src={TabletBanner} alt="tablet-banner" className="cursor-pointer" />
        </div>
        <div>
          <Image src={HeadphonesBanner} alt="headphones-banner" className="cursor-pointer" />
        </div>
      </div>
    </section>
  );
}
