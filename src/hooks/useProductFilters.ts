'use client';

import { useMemo, useState } from 'react';

type State = {
  [key: string]: (string | number)[];
};

export function useProductFilters<T extends { filters: Record<string, string | number> }>(products: T[]) {
  const [selectedFilters, setSelectedFilters] = useState<State>({});

  const toggleFilter = (key: string, value: string | number) => {
    setSelectedFilters((prev) => {
      const values = prev[key] || [];
      return {
        ...prev,
        [key]: values.includes(value) ? values.filter((v) => v !== value) : [...values, value],
      };
    });
  };

  const clearAllFilters = () => setSelectedFilters({});

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      Object.entries(selectedFilters).every(([key, values]) => {
        return values.length === 0 || values.includes(product.filters[key]);
      })
    );
  }, [products, selectedFilters]);

  return { filteredProducts, selectedFilters, toggleFilter, clearAllFilters };
}
