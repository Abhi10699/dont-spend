'use client';
import { withAuth } from "../withAuth"
import Link from 'next/link';

function HomeLayout(props: any) {

  return (
    <div className="container mx-auto p-6">
      <nav className="flex flex-row my-3 justify-between">
        <Link href="/home/">
          <button className="text-xl font-bold">CENTIFY</button>
        </Link>
        <Link href="/home/add">
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </button>
        </Link>
      </nav>
      {props.children}
    </div>
  )
}

export default withAuth(HomeLayout)