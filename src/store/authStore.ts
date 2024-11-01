import { create } from 'zustand';

type UserRole = 'admin' | 'voter' | null;

interface AuthState {
  isAuthenticated: boolean;
  userRole: UserRole;
  userId: string | null;
  login: (role: 'admin' | 'voter', userId: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  userRole: null,
  userId: null,
  login: (role, userId) => set({ isAuthenticated: true, userRole: role, userId }),
  logout: () => set({ isAuthenticated: false, userRole: null, userId: null }),
}));