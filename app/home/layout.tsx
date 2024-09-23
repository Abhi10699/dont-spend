import Link from 'next/link';
function HomeLayout(props: any) {
  return (
    <div className="container mx-auto px-3">
      <nav className="flex flex-row my-5 py-5 justify-between border-b-2 border-gray-600">
        <Link href="/home/">
          <button className="text-2xl font-black">CENTIFY</button>
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

export default HomeLayout