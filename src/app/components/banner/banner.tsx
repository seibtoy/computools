import Image from 'next/image';

import HeadphonesBanner from '../../../../public/assets/banners/headphones-banner.png';
import LaptopBanner from '../../../../public/assets/banners/laptop-banner.png';
import MainBanner from '../../../../public/assets/banners/main-banner.png';
import TabletBanner from '../../../../public/assets/banners/tablet-banner.png';

export default function Banner() {
  return (
    <section className="flex flex-col gap-8">
      <div>
        <Image src={MainBanner} alt="main-banner" className="cursor-pointer" />
      </div>
      <div className="flex justify-between gap-8">
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
