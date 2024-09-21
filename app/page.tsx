import Link from "next/link";
import Image from "next/image";
import profilePic from '@/app/assets/shoes.jpg'


export default function Home() {
  return (
    <div>
      <div className="min-h-screen text-white">
        {/* Navbar + Hero Section */}
        <nav className="w-full py-4 px-8 bg-black text-white flex justify-between items-center fixed top-0 left-0 z-10">
          <div className="text-2xl font-bold">CENTIFY</div>
        </nav>
        <section className="h-screen flex flex-col justify-center items-center text-center px-4 bg-black">
          <h1 className="text-6xl font-bold mb-6 text-white">Make Every Cent Count</h1>
          <p className="text-xl md:text-2xl mb-6 text-gray-300">
            Take control of your spending and achieve your financial goals.
          </p>
          <Link href="/auth">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-500 transition-colors">
              Start Saving
            </button>
          </Link>
        </section>

      </div>
      <section className="py-20 bg-white">
        <h2 className="text-3xl font-semibold mb-10 text-gray-900 text-center">
          What You'll Love About Don’t Spend
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
          {/* Card 1 */}
          <div className="flex items-start bg-white rounded-lg border-2 border-gray-400 hover:border-gray-600 transition-colors p-8">
            <div className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center mr-6">
              <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {/* Rectangle */}
                <rect x="2" y="4" width="20" height="16" stroke="currentColor" strokeWidth="2" fill="none" />
                {/* Horizontal Lines */}
                <line x1="4" y1="8" x2="20" y2="8" stroke="currentColor" strokeWidth="2">
                  <animate attributeName="stroke-dasharray" from="0,20" to="20,20" dur="1s" repeatCount="indefinite" />
                </line>
                <line x1="4" y1="12" x2="20" y2="12" stroke="currentColor" strokeWidth="2">
                  <animate attributeName="stroke-dasharray" from="0,20" to="20,20" dur="1s" begin="0.5s" repeatCount="indefinite" />
                </line>
                <line x1="4" y1="16" x2="20" y2="16" stroke="currentColor" strokeWidth="2">
                  <animate attributeName="stroke-dasharray" from="0,20" to="20,20" dur="1s" begin="1s" repeatCount="indefinite" />
                </line>
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Set Your Target</h3>
              <p className="text-gray-700">
                Choose a target purchase, like shoes or a vacation.
              </p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="flex items-start bg-white rounded-lg border-2 border-gray-400 hover:border-gray-600 transition-colors p-8">
            <div className="flex-shrink-0 w-16 h-16  rounded-full flex items-center justify-center mr-6">
              <svg className="w-10 h-10 text-yellow-600" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {/* Wallet */}
                <rect x="4" y="8" width="16" height="12" rx="2" fill="currentColor" />
                <rect x="6" y="12" width="12" height="2" fill="white" />

                {/* Coins */}
                <circle cx="8" cy="5" r="2" fill="currentColor">
                  <animate attributeName="cy" from="3" to="5" dur="0.8s" repeatCount="indefinite" />
                </circle>
                <circle cx="12" cy="5" r="2" fill="currentColor" opacity="0.8">
                  <animate attributeName="cy" from="3" to="5" dur="0.8s" begin="0.4s" repeatCount="indefinite" />
                </circle>
                <circle cx="16" cy="5" r="2" fill="currentColor" opacity="0.6">
                  <animate attributeName="cy" from="3" to="5" dur="0.8s" begin="0.8s" repeatCount="indefinite" />
                </circle>
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Track Small Expenses</h3>
              <p className="text-gray-700">
                Log daily small purchases that add up over time.
              </p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="flex items-start bg-white rounded-lg border-2 border-gray-400 hover:border-gray-600 transition-colors p-8">
            <div className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center mr-6">
              <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {/* Chart Line */}
                <path
                  d="M3 18l4-4 4 4 4-6 4 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                >
                  <animate
                    attributeName="stroke-dasharray"
                    from="0,24"
                    to="24,0"
                    dur="1s"
                    repeatCount="indefinite"
                  />
                </path>

                {/* Grid Lines */}
                <line x1="3" y1="18" x2="21" y2="18" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
                <line x1="3" y1="14" x2="21" y2="14" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
                <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Visualize Savings</h3>
              <p className="text-gray-700">
                See how fast you can save by cutting unnecessary expenses.
              </p>
            </div>
          </div>
          {/* Card 4 */}
          <div className="flex items-start bg-white rounded-lg border-2 border-gray-400 hover:border-gray-600 transition-colors p-8">
            <div className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center mr-6">
              <svg className="w-10 h-10 text-indigo-600" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {/* Rocket Body */}
                <path
                  d="M12 2l2 6-4 0 2-6zM10 8l4 0-2 12-2-12z"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                >
                  <animate
                    attributeName="transform"
                    type="translate"
                    from="0 0"
                    to="0 -10"
                    dur="2s"
                    repeatCount="1"
                    begin="0s"
                  />
                </path>
                {/* Rocket Flames */}
                <path
                  d="M10 20l4 0-2 2-2-2z"
                  fill="currentColor"
                >
                  <animate
                    attributeName="fill"
                    from="orange"
                    to="red"
                    dur="0.5s"
                    repeatCount="indefinite"
                    begin="0s"
                  />
                </path>
              </svg>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Achieve Your Goal</h3>
              <p className="text-gray-700">
                Watch your savings grow and reach your goal faster.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="py-20 bg-white text-gray-900">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 items-center">
          {/* Left Column: Expense & Target */}
          <div className="space-y-4">
            <h3 className="text-3xl font-bold mb-4 text-gray-800">Your Goal: $150 Sneakers</h3>
            <p className="text-lg mb-4 text-gray-700">
              You want to buy sneakers that cost $150, but you're spending $1.50 on Oreos every day.
            </p>
            <p className="text-lg text-gray-600">
              If you save that money, you'd buy the shoes in <strong className="font-semibold">100 days</strong> instead of spending it on snacks.
            </p>
          </div>
          {/* Right Column: Image */}
          <div className="relative">
            <Image src={profilePic} alt="Sneakers" className="w-full h-auto rounded-lg" width={200} height={200} />
            <div className="absolute inset-0 rounded-lg"></div>
          </div>
        </div>
      </section>



      {/* Call to Action Section */}
      <footer className="bg-gray-800 text-gray-200 py-6 text-center">
        <p>&copy; 2024 Don't Spend. All rights reserved.</p>
        <nav className="mt-4">
          <a href="#" className="text-indigo-400 hover:underline mx-2">Privacy Policy</a>
          <a href="#" className="text-indigo-400 hover:underline mx-2">Terms of Service</a>
        </nav>
      </footer>

    </div >
  );
}
