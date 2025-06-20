'use client';

import { usePathname } from 'next/navigation';
import { type ReactNode, useEffect } from 'react';

interface Props {
  children: ReactNode;
}

export default function ScrollRestoration({ children }: Props) {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);

  return <>{children}</>;
}
