import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Globe2, SendIcon, Plane, Landmark } from 'lucide-react'
import React from 'react'

const suggestions = [
  {
    title: 'Create New Trip',
    icon: <Globe2 className="text-blue-400 h-5 w-5" />,
  },
  {
    title: 'Inspire me where to go',
    icon: <Plane className="text-green-400 h-5 w-5" />,
  },
  {
    title: 'Discover Hidden Gems',
    icon: <Landmark className="text-orange-400 h-5 w-5" />,
  },
  {
    title: 'Explore the World',
    icon: <Globe2 className="text-yellow-400 h-5 w-5" />,
  },
]

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
      <div className="border rounded-2xl p-4 mt-8 flex flex-col items-center relative">
        <Textarea
          placeholder="Create a trip from Delhi to Goa"
          className="w-full md:w-[600px] h-28 bg-transparent border border-gray-300 rounded-md p-4 text-lg md:text-xl focus:outline-none focus:ring-0 focus:ring-primary resize-none"
        />
        <Button size={'icon'} className="absolute bottom-6 right-6">
          <SendIcon className="h-4 w-4" />
        </Button>
      </div>

      {/* suggestion list */}
      <div className="mt-6 flex flex-wrap gap-3 justify-center">
        {suggestions.map((suggestion, index) => (
          <div
            key={index}
className="flex items-center gap-2 bg-gray-100 p-3 rounded-lg hover:bg-white transition-colors cursor-pointer"
          >
            {suggestion.icon}
            <h2 className="text-sm md:text-base font-medium">{suggestion.title}</h2>
          </div>
        ))}
      </div>

      {/* video section */}
    </div>
  )
}

export default Hero


