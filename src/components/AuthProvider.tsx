import React, { useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useAuthStore, recoverSession } from '../lib/store';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { setUser, setSession } = useAuthStore();

  useEffect(() => {
    // Recover session on mount
    recoverSession();

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN') {
        setUser(session?.user ?? null);
        setSession(session);
      } else if (event === 'SIGNED_OUT') {
        setUser(null);
        setSession(null);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [setUser, setSession]);

  return <>{children}</>;
}