import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import Image from 'next/image';
import Link from 'next/link';
import type { ComponentType, SVGProps } from 'react';

import {
  Badge,
  DialogTitle,
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  icons,
} from '@/app/components/ui-kit';
import { useAuthStore } from '@/store';

import Logo from '../../../../../public/assets/images/green-logo.png';

interface Props {
  onOpenChange: (open: boolean) => void;
}

interface Data {
  label: string;
  path: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  info?: boolean;
}
export default function PersonalAreaPopup({ onOpenChange }: Props) {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  const MenuAlt = icons.menuAlt;
  const CrissCross = icons.crissCross;
  const Languages = icons.languages;

  const logout = useAuthStore((state) => state.logout);

  const languages = ['ENG', 'UA', 'AR'];

  const areaData: Data[] = [
    { label: 'Favorites', icon: icons.heart, path: '/favorites', info: true },
    { label: 'Basket', icon: icons.cart, path: '/basket', info: true },
    { label: 'Profile', icon: icons.user, path: '/profile' },
    { label: 'Orders', icon: icons.list, path: '/orders', info: true },
    { label: 'Faq', icon: icons.faq, path: '/faq' },
    { label: 'Contact us', icon: icons.headphonesMic, path: '/contacts' },
    { label: 'Sign out', icon: icons.logout, path: '/' },
    { label: 'Sign in & sign up', icon: icons.crossedUser, path: '/' },
  ];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <MenuAlt width={20} height={20} color="black" className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent className="bg-black border-black text-white flex flex-col gap-5 rounded-none px-6 w-screen max-lg:overflow-y-auto pb-5">
        <SheetHeader className="h-21 flex flex-row justify-between items-center border-b-1 border-gray">
          <Image src={Logo} alt="Logo" />
          <SheetClose>
            <CrissCross width={20} height={20} className="cursor-pointer" color="var(--color-white)" />
          </SheetClose>
        </SheetHeader>
        <VisuallyHidden>
          <DialogTitle className="hidden">Personal area</DialogTitle>
        </VisuallyHidden>
        <div>
          <div className="flex flex-col">
            <div className="flex items-center gap-4 px-5 h-15">
              <Languages width={20} height={20} color="var(--color-gray)" />
              <span className="uppercase">Languages</span>
            </div>
            <ul>
              {languages.map((item, index) => (
                <ol key={index} className="flex items-center h-15 px-5 ml-9">
                  {item}
                </ol>
              ))}
            </ul>
          </div>
          <div className="py-5">
            <hr className="border-gray" />
          </div>
          <ul className="font-light uppercase whitespace-nowrap">
            {areaData.slice(0, 2).map((item, index) => {
              const IconComponent = item.icon;

              return (
                <Link href={item.path} key={index} scroll={false} passHref>
                  <li className="flex items-center gap-4 h-15 px-5 relative">
                    <div className="w-5 flex items-center justify-center">
                      <IconComponent width={20} height={20} color="var(--color-gray)" />
                    </div>
                    <span>{item.label}</span>
                    {item.info ? (
                      <Badge className="absolute right-0 w-6 h-6 rounded-full bg-dark-gray flex items-center justify-center text-base text-white">
                        12
                      </Badge>
                    ) : (
                      ''
                    )}
                  </li>
                </Link>
              );
            })}
            <div className="py-5">
              <hr className="border-gray" />
            </div>
            {areaData.slice(2, 6).map((item, index) => {
              const IconComponent = item.icon;

              return (
                <Link href={item.path} key={index} scroll={false} passHref>
                  <li className="flex items-center gap-4 h-15 px-5 relative">
                    <div className="w-5 flex items-center justify-center">
                      <IconComponent width={20} height={20} color="var(--color-gray)" />
                    </div>
                    <span>{item.label}</span>
                    {item.info ? (
                      <div className="absolute right-0 w-6 h-6 rounded-full bg-dark-gray flex items-center justify-center text-base text-white">
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
              <hr className="border-gray" />
            </div>
            {isLoggedIn ? (
              <>
                {areaData.slice(6, 7).map((item, index) => {
                  const IconComponent = item.icon;

                  return (
                    <Link href={item.path} key={index} scroll={false} passHref>
                      <li className="flex items-center gap-4 h-15 px-5 relative" onClick={logout}>
                        <div className="w-5 flex items-center justify-center">
                          <IconComponent width={20} height={20} color="var(--color-gray)" />
                        </div>
                        <span>{item.label}</span>
                      </li>
                    </Link>
                  );
                })}
              </>
            ) : (
              <>
                {areaData.slice(7, 8).map((item, index) => {
                  const IconComponent = item.icon;

                  return (
                    <Link href={item.path} key={index} scroll={false} passHref>
                      <li>
                        <SheetClose
                          className="flex items-center gap-4 h-15 px-5 relative uppercase cursor-pointer"
                          onClick={() => onOpenChange(true)}
                        >
                          <div className="w-5 flex items-center justify-center">
                            <IconComponent width={20} height={20} color="var(--color-rosy-red)" />
                          </div>
                          <span className="text-rosy-red">{item.label}</span>
                        </SheetClose>
                      </li>
                    </Link>
                  );
                })}
              </>
            )}
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
}
