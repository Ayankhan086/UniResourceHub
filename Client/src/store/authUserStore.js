import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useAuthUserStore = create(
  persist(  
    (set) => ({
      user: null,
      token: null,
      isAdmin: false,
      setUser: (user) => set({ user }),
      setToken: (token) => set({ token }),
      setIsAdmin: (isAdmin) => set({ isAdmin }),
      logout: () => set({ user: null, token: null, isAdmin: false }),
    }),
    {
      name: 'auth-user-store', // name in localStorage
    }
  )
);