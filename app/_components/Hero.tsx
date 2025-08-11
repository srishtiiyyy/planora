import { Textarea } from '@/components/ui/textarea'
import React from 'react'

function Hero() {
  return (
    <div className="mt-24 flex flex-col items-center text-center">
      {/* Heading */}
      <div>
        <h1 className="text-xl md:text-5xl font-bold">
          Hey, I'm your personal <span className="text-primary">TRIP PLANNER</span>
        </h1>
        
        <p className="mt-4 text-lg md:text-2xl font-medium">
          From idea to itinerary — flights, hotels, and stays in seconds.
        </p>
      </div>

      {/* Search box */}
      <div className="border rounded-2xl p-4 mt-8 flex flex-col items-center">
        <Textarea
          placeholder="Create a trip from Delhi to Goa"
          className="w-full md:w-[600px] h-28 bg-transparent border border-gray-300 rounded-md p-4 text-lg md:text-xl focus:outline-none focus:ring-0 focus:ring-primary resize-none"
        />
      </div>

      {/* suggestion list */}
      {/* video section */}
    </div>
  )
}

export default Hero


