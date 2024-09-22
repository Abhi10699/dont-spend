'use client'

import { withAuth } from "../withAuth"

function Home(props: any) {
  return (
    <div className="container mx-auto p-6">
      <div className="p-6 bg-[#131313] rounded-lg shadow-lg grid gap-4 md:grid-cols-2">
        {/* Left Column: Name, Price, Money Saved */}
        <div className="flex flex-row justify-between">
          <div>
            {/* Name of Item (Low Priority) */}
            <h3 className="text-lg md:text-xl font-bold text-gray-300">OREO Chips</h3>

            {/* Price (Low Priority) */}
            <p className="text-sm md:text-base text-gray-400">$50</p>

            {/* Money Saved (High Priority) */}
            <div className="mt-4">
              <h4 className="text-2xl md:text-3xl font-bold text-yellow-400">$200 Saved</h4>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <p className="text-4xl">🔥</p>
            <p className="font-bold">30 Days</p>
          </div>
        </div>

        {/* Right Column: Action Buttons and Goal List */}
        <div className="flex flex-col justify-between mt-4 md:mt-0">
          {/* Buttons: Add/Remove Purchase (High Priority) */}
          <div className="flex justify-start md:justify-end gap-2 mb-4">
            <button className="py-3 w-full border-2 text-white rounded-lg border-green-400">Remove 😁</button>
            <button className="py-3 w-full border-2 text-white rounded-lg border-red-400">Add 😖</button>
          </div>

          {/* Goal List */}
          <div className="border-t border-gray-700 pt-4">
            <h4 className="text-lg font-medium text-gray-300">Goals</h4>
            <ul className="mt-2">
              <li className="text-sm text-gray-400 mb-6">
                Goal 1: <strong className="text-white">30 days</strong> to reach target
                <div className="w-full bg-gray-700 rounded-full h-2.5 mt-2">
                  <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '50%' }}></div>
                </div>
              </li>
              <li className="text-sm text-gray-400">
                Goal 2: <strong className="text-white">60 days</strong> to reach target
                <div className="w-full bg-gray-700 rounded-full h-2.5 mt-2">
                  <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '25%' }}></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  )
}

export default withAuth(Home);