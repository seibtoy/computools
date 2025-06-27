import { type ComponentProps } from 'react';

import FiltersSheet from '@/app/components/filters/filters.mobile';

import Filters from './filters';

export default function FiltersComponent(props: ComponentProps<typeof Filters>) {
  return (
    <>
      <div className="hidden lg:block">
        <Filters {...props} />
      </div>
      <div className="lg:hidden">
        <FiltersSheet {...props} />
      </div>
    </>
  );
}
