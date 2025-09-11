import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import Cookies from 'js-cookie';
import { supabase } from './supabase';
import type { User } from '@supabase/supabase-js';

interface AuthState {
  user: User | null;
  session: any | null;
  setUser: (user: User | null) => void;
  setSession: (session: any | null) => void;
  signOut: () => Promise<void>;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      session: null,
      setUser: (user) => set({ user }),
      setSession: (session) => {
        set({ session });
        if (session) {
          // Set session cookie with 7 days expiry
          Cookies.set('session', session.access_token, { expires: 7 });
        } else {
          Cookies.remove('session');
        }
      },
      signOut: async () => {
        await supabase.auth.signOut();
        Cookies.remove('session');
        set({ user: null, session: null });
      },
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({ user: state.user }),
    }
  )
);

// Session recovery function
export const recoverSession = async () => {
  const sessionToken = Cookies.get('session');
  if (sessionToken) {
    try {
      const { data: { session }, error } = await supabase.auth.getSession();
      if (error) throw error;
      if (session) {
        useAuthStore.getState().setSession(session);
        useAuthStore.getState().setUser(session.user);
      }
    } catch (error) {
      console.error('Error recovering session:', error);
      Cookies.remove('session');
    }
  }
};