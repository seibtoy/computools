'use client';

import { Command, CommandEmpty, CommandItem, CommandList, icons } from '@/app/components/ui-kit';

interface Props {
  query: string;
  items: { label: string; value: string; key: string }[];
  onSelect: (value: string) => void;
}

function SearchDropdown({ query, items, onSelect }: Props) {
  const filtered = items.filter((item) => item.label.toLowerCase().includes(query.toLowerCase()));
  const CheckIcon = icons.check;
  return (
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
  );
}

export { SearchDropdown };
