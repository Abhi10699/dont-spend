'use client';

import { useState, useEffect } from 'react';
import supabase from './supabase';
import { useRouter } from 'next/navigation';
import { UserResponse } from '@supabase/supabase-js';


export function withAuth(Component: React.ComponentType) {
  return (props: any) => {
    const [isLoading, setLoading] = useState(true)
    const [sessionUser, setSessionUser] = useState<UserResponse>()
    const router = useRouter();
    useEffect(() => {
      const authUserFn = async () => {
        const user = await supabase.auth.getUser()
        if (user) {
          setSessionUser(user)
          setLoading(false)
        }
        else {
          router.push("/")
        }
      }

      authUserFn()
    }, [router])

    if (isLoading) {
      return <h1>Loading..</h1>
    }

    return <Component sessionUser={sessionUser} {...props} />

  };
}