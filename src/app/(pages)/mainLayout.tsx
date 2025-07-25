'use client';

import type { ReactNode } from 'react';

import Banner from '@/app/components/banner/banner';
import Footer from '@/app/components/footer/footer';
import Header from '@/app/components/header/header';
import Sidebar from '@/app/components/sidebar/sidebar';
import { BreadcrumbComponent, Button, PagginationComponent } from '@/app/components/ui-kit';

interface Props {
  filtersContent?: ReactNode;
  bannerContent?: ReactNode;
  children: ReactNode;
}

export default function MainLayout({ children, filtersContent, bannerContent = <Banner /> }: Props) {
  return (
    <>
      <Header />
      <div className="flex flex-col lg:flex-row pb-21.5">
        <div className="flex flex-col gap-25 lg:min-w-70 lg:max-w-110 lg:w-full lg:ml-21.5 max-lg:mx-6 max-lg:mt-6 max-lg:mb-0 overflow-x-auto scrollbar-hide h-fit">
          <div className="flex flex-col gap-35">
            <div className="lg:border-r-1 lg:border-medium-gray lg:pt-10">
              <Sidebar />
            </div>
            {filtersContent && (
              <div className="px-13 py-2 lg:border-r-1 lg:border-medium-gray max-lg:hidden">{filtersContent}</div>
            )}
          </div>
        </div>
        <main className="flex-1 min-w-0 pl-10.5 pr-21.5 max-lg:px-6 max-lg:pt-0">
          <div className="flex items-center max-lg:justify-between h-20">
            <BreadcrumbComponent />
            {filtersContent && <div className="lg:hidden">{filtersContent}</div>}
          </div>
          <div className="max-w-360 mx-auto ">
            <div className="pb-25 max-lg:pb-20">{bannerContent}</div>
            {children}
          </div>
        </main>
      </div>
      <div className="flex flex-col items-center justify-center pb-20 gap-20">
        <div className="flex">
          <div className="h-10 bg-super-light-gray flex items-center justify-center px-4 uppercase font-medium">
            Explore more products
          </div>
          <Button variant="blackBtn" className="w-10 h-10">
            ...
          </Button>
        </div>
        <PagginationComponent />
      </div>
      <Footer />
    </>
  );
}
