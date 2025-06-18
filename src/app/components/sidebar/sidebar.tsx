import Link from 'next/link';
import type { SVGProps } from 'react';

import { icons } from '@/app/components/ui-kit';

interface Data {
  label: string;
  path: string;
  icon: React.ComponentType<SVGProps<SVGSVGElement>>;
}

export default function Sidebar() {
  const sidebarData: Data[] = [
    { label: 'Laptops', icon: icons.laptop, path: '/laptops' },
    { label: 'Computers', icon: icons.computer, path: '/computers' },
    { label: 'Smartphones', icon: icons.smartphone, path: '/smartphones' },
    { label: 'Gaming products', icon: icons.gamepad, path: '/gaming-product' },
    { label: 'TV & monitors', icon: icons.monitor, path: '/tv-monitors' },
    { label: 'Audio products', icon: icons.speaker, path: '/audio-products' },
    { label: 'Large appliances', icon: icons.washingMachine, path: '/large-appliances' },
    { label: 'Small appliances', icon: icons.hairdryer, path: '/small-appliances' },
    { label: 'Tools', icon: icons.drill, path: '/tools' },
    { label: 'Drones', icon: icons.drone, path: '/drones' },
    { label: 'Household chemicals', icon: icons.flask, path: '/chemicals' },
    { label: 'Dishes', icon: icons.cup, path: '/dishes' },
    { label: 'Promotional products', icon: icons.tag, path: '/promo' },
  ];

  return (
    <nav>
      <ul className="flex flex-col max-lg:flex-row max-lg:gap-4 scrollbar-hide">
        {sidebarData.map((item, index) => {
          const IconComponent = item.icon;

          return (
            <Link href={item.path} key={index} passHref>
              <li className="flex items-center gap-4 h-15 max-lg:h-10 max-lg:bg-super-light-gray max-lg:px-4">
                <div className="w-5 flex items-center justify-center">
                  <IconComponent color={index === sidebarData.length - 1 ? 'var(--color-red)' : 'var(--color-gray)'} />
                </div>
                <span className="font-normal uppercase whitespace-nowrap">{item.label}</span>
              </li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
}
