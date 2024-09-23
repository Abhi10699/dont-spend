'use client';

import { usePathname } from 'next/navigation';
import { createContext, PropsWithChildren, useEffect, useState } from 'react';
import supabase from './supabase';
import { User } from '@supabase/supabase-js';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

type AuthProviderProps = {
  onUserValidationSuccessfull(user: User): void
  onUserValidationFailed(): void
  router: AppRouterInstance

}
export const AuthContext = createContext<User | null>(null);

export function AuthProvider(props: PropsWithChildren<AuthProviderProps>) {
  const [isValidating, setIsValidating] = useState(true);
  const [userSate, setUserState] = useState<User | null>(null);
  const path = usePathname();

  const { onUserValidationFailed, onUserValidationSuccessfull } = props;


  useEffect(() => {
    if (path == "/" || path == "/home") {
      const checkUser = async () => {
        const { data: user } = await supabase.auth.getUser();
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
          onUserValidationSuccessfull(user)
        }
        else {
          setUserState(null)
          onUserValidationFailed()
        }
        setIsValidating(false);
      });

      return () => {
        subscription.data.subscription.unsubscribe()
      }
    }
  }, [path, onUserValidationFailed, onUserValidationSuccessfull])

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