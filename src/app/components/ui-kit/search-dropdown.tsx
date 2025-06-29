'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { Button, Command, CommandEmpty, CommandItem, CommandList, Input, icons } from '@/app/components/ui-kit';
import { cn } from '@/lib';
import { allProducts } from '@/mocks';

interface Props {
  isSearchOpen: boolean;
  setIsSearchOpen: (value: boolean) => void;
}

function SearchDropdown({ isSearchOpen, setIsSearchOpen }: Props) {
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const productNames = allProducts.flat().map((item) => ({
    label: item.name,
    value: item.name,
    key: item.id,
  }));

  const onSelect = (value: string) => {
    setIsSearchOpen(false);
    setSearchQuery(value);
    setIsDropdownOpen(false);
  };

  const CrissCross = icons.crissCross;

  const filtered = productNames.filter((item) => item.label.toLowerCase().includes(searchQuery.toLowerCase()));
  const CheckIcon = icons.check;
  return (
    <form className="flex flex-1 relative" onSubmit={(e) => e.preventDefault()}>
      <div className={cn(isSearchOpen ? '' : 'max-lg:hidden', 'relative w-full')}>
        {searchQuery ? (
          <Button variant="blackBtn" className="absolute z-100 w-10 h-10" onClick={() => setSearchQuery('')}>
            <CrissCross width={20} height={20} />
          </Button>
        ) : (
          ''
        )}

        <Input
          placeholder=""
          variant="search"
          className="bg-white w-full text-base! pl-14"
          leftIcon="magnifyingGlass"
          rightIcon="microphone"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setIsDropdownOpen(e.target.value.length > 0);
          }}
        />
        {isDropdownOpen && (
          <Command className="absolute h-fit rounded-none p-6 hover:bg-white">
            <CommandList className="scrollbar-hide ">
              <CommandEmpty className="uppercase text-base text-center">No results found</CommandEmpty>
              {filtered.map((item) => (
                <CommandItem
                  key={item.key}
                  onSelect={() => onSelect(item.label)}
                  className="group flex items-center gap-5 rounded-none h-10 border-b-1 border-light-gray hover:border-yellow hover:bg-white! py-6 data-[selected=true]:bg-white!"
                >
                  <span className="flex items-center gap-6 text-base group-hover:text-[var(--color-yellow)]">
                    <CheckIcon className="text-[var(--color-medium-gray)] group-hover:text-yellow" />
                    {item.label}
                  </span>
                </CommandItem>
              ))}
            </CommandList>
          </Command>
        )}
      </div>
      <Button
        variant="greenBtn"
        iconPosition="right"
        icon="rightArrow"
        className="h-full max-lg:hidden"
        onClick={() => router.push(`/?search=${encodeURIComponent(searchQuery)}`)}
        type="submit"
      >
        Search
      </Button>
    </form>
  );
}

export { SearchDropdown };
