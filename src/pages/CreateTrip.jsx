import { useState } from "react"
import { Calendar } from "lucide-react"

const CreateTrip = () => {
  const [destination, setDestination] = useState("")
  const [days, setDays] = useState(1)

  return (
    <div className="pt-28 min-h-screen bg-gray-50 flex justify-center">
      
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-xl border overflow-hidden">

        {/* Progress bar */}
        <div className="h-2 bg-indigo-100 w-full">
          <div className="h-full bg-indigo-600 w-1/3 transition-all duration-500" />
        </div>

        {/* Card content */}
        <div className="p-10">

          {/* Step indicator dots */}
          <div className="flex justify-center gap-2 mb-8">
            <div className="w-10 h-2 bg-indigo-600 rounded-full" />
            <div className="w-3 h-2 bg-gray-300 rounded-full" />
            <div className="w-3 h-2 bg-gray-300 rounded-full" />
          </div>

          {/* Heading */}
          <h1 className="text-3xl font-bold text-center mb-2">
            Where&apos;s your next adventure?
          </h1>
          <p className="text-gray-500 text-center mb-10">
            Select your destination and duration (max 5 days).
          </p>

          {/* Form */}
          <div className="space-y-6 max-w-xl mx-auto">

            {/* Destination */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Destination
              </label>
              <input
                type="text"
                placeholder="Search for a city..."
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full h-12 px-4 border rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Days */}
            <div>
              <label className="block text-sm font-medium mb-2">
                How many days?
              </label>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="number"
                  min={1}
                  max={5}
                  value={days}
                  onChange={(e) => setDays(e.target.value)}
                  className="w-full h-12 pl-12 pr-4 border rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

          </div>

          {/* Continue button */}
          <div className="flex justify-end mt-10">
            <button
              disabled={!destination}
              className={`flex items-center gap-2 px-8 py-3 rounded-xl font-semibold transition
                ${
                  destination
                    ? "bg-indigo-600 text-white hover:bg-indigo-700"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
            >
              Continue →
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default CreateTrip
