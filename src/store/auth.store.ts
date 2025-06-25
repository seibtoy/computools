import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Props {
  isLoggedIn: boolean;
  userEmail: string | null;
  login: (email: string) => void;
  logout: () => void;
}

export const useAuthStore = create<Props>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      userEmail: null,
      login: (email) => set({ isLoggedIn: true, userEmail: email }),
      logout: () => set({ isLoggedIn: false, userEmail: null }),
    }),
    {
      name: 'auth-storage',
    }
  )
);
