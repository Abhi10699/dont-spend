'use client';

import { usePathname } from 'next/navigation';
import { createContext, PropsWithChildren, useEffect, useState } from 'react';
import supabase from './supabase';
import { User } from '@supabase/supabase-js';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

type AuthProviderProps = {
  onUserValidationSuccessfull: (user: User) => any
  onUserValidationFailed: () => void
  router: AppRouterInstance

}
export const AuthContext = createContext<User | null>(null);

export function AuthProvider(props: PropsWithChildren<AuthProviderProps>) {
  const [isValidating, setIsValidating] = useState(true);
  const [userSate, setUserState] = useState<User | null>(null);
  const path = usePathname();

  useEffect(() => {
    if (path == "/" || path == "/home") {
      const checkUser = async () => {
        const { data: user, error } = await supabase.auth.getUser();
        if (user) {
          setUserState(user.user)
        }
        else {
          setUserState(null)
        }
      }

      checkUser();

      const subscription = supabase.auth.onAuthStateChange((_, authSession) => {
        const user = authSession?.user;
        if (user) {
          setUserState(user)
          props.onUserValidationSuccessfull(user)
        }
        else {
          setUserState(null)
          props.onUserValidationFailed()
        }
        setIsValidating(false);
      });

      return () => {
        subscription.data.subscription.unsubscribe()
      }
    }
  }, [path])

  if (isValidating) {
    return (
      <div>
        <h1>Please wait while we validate you!</h1>
      </div>
    )
  }
  else {
    return (
      <AuthContext.Provider value={userSate}>
        {props.children}
      </AuthContext.Provider>
    )
  }
}