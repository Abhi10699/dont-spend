'use client';
import Link from 'next/link';
import supabase from '@/lib/supabase';
import { PropsWithChildren } from 'react';

function HomeLayout(props: PropsWithChildren) {
  return (
    <div className="container mx-auto px-3">
      <nav className="flex flex-row my-5 justify-between">
        <Link href="/home/">
          <button className="text-2xl font-black">CENTIFY</button>
        </Link>

        <div>
          <Link href="/home/add">
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </button>
          </Link>

          <button onClick={() => supabase.auth.signOut()} className='mx-3'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width={2.5} stroke="currentColor" className="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
            </svg>
          </button>
        </div>
      </nav>
      {props.children}
    </div>
  )
}

export default HomeLayout