'use client';

import { useState } from 'react';

import { Button, Checkbox, Input, icons } from '@/app/components/ui-kit';

interface Props {
  filtersData: {
    [key: string]: (string | number)[];
  };
  selectedFilters: { [key: string]: (string | number)[] };
  onChange: (key: string, value: string | number) => void;
  onClearAll: () => void;
}

type State = {
  [key: string]: (string | number)[];
};

const hasSelectedFilters = (selectedFilters: State = {}): boolean => {
  return Object.values(selectedFilters).some((values) => values.length > 0);
};

export default function Filters({ filtersData, selectedFilters, onChange, onClearAll }: Props) {
  const ChevronUp = icons.chevronUp;
  const filterKeys = Object.keys(filtersData);

  const [filtersOpen, setFiltersOpen] = useState(true);

  const [openSubcategories, setOpenSubcategories] = useState<Record<string, boolean>>(() => {
    const initialState: Record<string, boolean> = {};
    filterKeys.forEach((key) => (initialState[key] = true));
    return initialState;
  });

  const toggleSubcategory = (key: string) => {
    setOpenSubcategories((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <form className="flex flex-col gap-10">
      <div className="flex items-center justify-between">
        <div className="flex gap-3 items-center" onClick={() => setFiltersOpen(!filtersOpen)}>
          <ChevronUp
            width={16}
            height={16}
            className={`${filtersOpen ? 'rotate-0' : 'rotate-180'} transition-transform duration-300`}
          />
          <h5 className="uppercase">Filters</h5>
        </div>
        {hasSelectedFilters(selectedFilters) && (
          <Button
            variant="greenBtn"
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onClearAll();
            }}
          >
            Clear all
          </Button>
        )}
      </div>
      <div
        className="flex flex-col gap-10 overflow-hidden transition-[max-height] duration-500 ease-in-out"
        style={{ maxHeight: filtersOpen ? '1800px' : '0px' }}
      >
        {filterKeys.map((key) => (
          <div key={key}>
            <div className="flex gap-3 items-center" onClick={() => toggleSubcategory(key)}>
              <ChevronUp
                width={16}
                height={16}
                className={`${openSubcategories[key] ? 'rotate-0' : 'rotate-180'} transition-transform duration-300`}
              />
              <h6 className="uppercase">{key}</h6>
            </div>

            <div
              className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
              style={{ maxHeight: openSubcategories[key] ? '1000px' : '0px' }}
            >
              <div className="flex h-10 mt-4">
                <div className="flex-1">
                  <Input
                    placeholder=""
                    variant="search"
                    className="bg-super-light-gray w-full"
                    leftIcon="magnifyingGlass"
                  />
                </div>
                <Button variant="greenBtn" icon="rightArrow" type="button" className="h-full" />
              </div>
              {filtersData[key].map((value) => {
                const isChecked = selectedFilters[key]?.includes(value) ?? false;

                return (
                  <div key={value.toString()} className="flex items-center gap-3 mt-6">
                    <Checkbox
                      checked={isChecked}
                      onCheckedChange={() => onChange(key, value)}
                      className="rounded-none border-black data-[state=checked]:bg-green-flash data-[state=checked]:border-0 w-5 h-5"
                      indicatorClassname="text-black"
                    />
                    <span className="uppercase text-base font-medium">{value}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </form>
  );
}
