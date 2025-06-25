import Link from 'next/link';
import { useState } from 'react';
import type { ComponentType, SVGProps } from 'react';

import { Popover, PopoverContent, PopoverTrigger, icons } from '@/app/components/ui-kit';
import { useAuthStore } from '@/store';

interface Data {
  label: string;
  path: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  info?: boolean;
}
export default function PersonalAreaPopup() {
  const [open, setOpen] = useState(false);

  const User = icons.user;
  const CrissCross = icons.crissCross;

  const logout = useAuthStore((state) => state.logout);

  const areaData: Data[] = [
    { label: 'Profile', icon: icons.user, path: '/profile' },
    { label: 'Orders', icon: icons.list, path: '/orders', info: true },
    { label: 'Faq', icon: icons.faq, path: '/faq' },
    { label: 'Contact us', icon: icons.headphonesMic, path: '/contacts' },
    { label: 'Sign out', icon: icons.logout, path: '/' },
  ];

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger>
        <User className="cursor-pointer" fill="var(--color-light-gray)" />
      </PopoverTrigger>
      <PopoverContent className="flex flex-col gap-5 rounded-none w-125 h-125 mr-5 mt-5 p-12.5">
        <div className="flex justify-between items-center">
          <h5 className="uppercase">personal area</h5>
          <CrissCross className="cursor-pointer" onClick={() => setOpen(false)} />
        </div>
        <div>
          <ul className="font-normal uppercase whitespace-nowrap">
            {areaData.slice(0, 4).map((item, index) => {
              const IconComponent = item.icon;

              return (
                <Link href={item.path} key={index} scroll={false} passHref>
                  <li className="flex items-center gap-4 h-15 px-5 relative hover:bg-super-light-gray">
                    <div className="w-5 flex items-center justify-center">
                      <IconComponent color="var(--color-gray)" />
                    </div>
                    <span>{item.label}</span>
                    {item.info ? (
                      <div className="absolute right-0 w-6 h-6 rounded-full bg-super-light-gray flex items-center justify-center text-base">
                        12
                      </div>
                    ) : (
                      ''
                    )}
                  </li>
                </Link>
              );
            })}
            <div className="py-5">
              <hr />
            </div>
            {areaData.slice(4, 5).map((item, index) => {
              const IconComponent = item.icon;

              return (
                <Link href={item.path} key={index} scroll={false} passHref onClick={logout}>
                  <li className="flex items-center gap-4 h-15 px-5 relative hover:bg-super-light-gray">
                    <div className="w-5 flex items-center justify-center">
                      <IconComponent color="var(--color-gray)" />
                    </div>
                    <span>{item.label}</span>
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </PopoverContent>
    </Popover>
  );
}
