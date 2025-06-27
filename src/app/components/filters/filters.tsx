import { type ComponentProps } from 'react';

import FiltersContent from './filters-content';

export default function Filters(props: ComponentProps<typeof FiltersContent>) {
  return <FiltersContent {...props} />;
}
