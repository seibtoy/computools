'use client';

import { Suspense } from 'react';
import { useState } from 'react';

import MainLayout from '../mainLayout';
import DefaultHomepage from './default-homepage';
import SearchedHomepage from './searched-homepage';

export default function Homepage() {
  const [isSearchActive, setIsSearchActive] = useState(false);

  return (
    <MainLayout>
      {!isSearchActive && <DefaultHomepage />}
      <Suspense fallback={<div>Loading search...</div>}>
        <SearchedHomepage onSearchCheck={setIsSearchActive} />
      </Suspense>
    </MainLayout>
  );
}
