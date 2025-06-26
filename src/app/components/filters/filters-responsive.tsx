import { type ComponentProps } from 'react';

import Filters from '@/app/components/filters/filters';
import FiltersSheet from '@/app/components/filters/filters.mobile';

export default function ResponsiveFilters(props: ComponentProps<typeof Filters>) {
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
