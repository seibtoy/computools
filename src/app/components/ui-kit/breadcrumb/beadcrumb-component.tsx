'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { icons } from '@/app/components/ui-kit';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/app/components/ui-kit';

type PageKey = keyof typeof pages;

const pages = {
  home: { label: 'home', icon: icons.house },
  laptops: { label: 'laptops', icon: icons.laptop },
  computers: { label: 'computers', icon: icons.computer },
  smartphones: { label: 'smartphone', icon: icons.smartphone },
  'gaming-product': { label: 'gaming products', icon: icons.gamepad },
  'tv-monitors': { label: 'tv & monitors', icon: icons.monitor },
  'audio-products': { label: 'audio products', icon: icons.speaker },
  'large-appliances': { label: 'large appliances', icon: icons.washingMachine },
  'small-appliances': { label: 'small appliances', icon: icons.hairdryer },
  tools: { label: 'tools', icon: icons.drill },
  drones: { label: 'drones', icon: icons.drone },
  chemicals: { label: 'household chemicals', icon: icons.flask },
  dishes: { label: 'dishes', icon: icons.cup },
  promo: { label: 'promotional products', icon: icons.tag },
  favorites: { label: 'favorites', icon: icons.heart },
  basket: { label: 'basket', icon: icons.cart },
  profile: { label: 'profile', icon: icons.user },
  orders: { label: 'orders', icon: icons.list },
  faq: { label: 'faq', icon: icons.faq },
  contacts: { label: 'contacts', icon: icons.headphonesMic },
  default: { label: 'Page', icon: icons.info },
} as const;

export function BreadcrumbComponent() {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);

  const currentPageKey = (segments[segments.length - 1] || 'home') as PageKey;
  const isHome = segments.length === 0;

  const HomeIcon = pages['home'].icon;

  const pageData = pages[currentPageKey] || {
    label: decodeURIComponent(currentPageKey),
    icon: pages.default.icon,
  };

  return (
    <>
      {currentPageKey === 'home' ? (
        <></>
      ) : (
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/" className="flex items-center gap-2">
                  <HomeIcon className="w-4 h-4" />
                  <span className="uppercase text-base font-normal">Home</span>
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            {!isHome && (
              <>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="flex items-center gap-2">
                    <pageData.icon className="w-4 h-4" />
                    <span className="uppercase text-base font-normal">{pageData.label}</span>
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </>
            )}
          </BreadcrumbList>
        </Breadcrumb>
      )}
    </>
  );
}
