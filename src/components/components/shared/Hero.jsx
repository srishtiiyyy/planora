import React from "react"
import { Button } from "../ui/button"
import { FaArrowRightLong } from "react-icons/fa6"
import { Plane } from "lucide-react"
import { useNavigate } from "react-router-dom"

const Hero = () => {
    const navigate=useNavigate()
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center bg-gradient-to-br from-indigo-50 via-purple-50 to-yellow-50">

      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-300 rounded-full blur-3xl opacity-30" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-300 rounded-full blur-3xl opacity-30" />
      <div className="absolute -bottom-32 left-20 w-96 h-96 bg-pink-300 rounded-full blur-3xl opacity-30" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border mb-6">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500" />
          </span>
          <span className="text-sm font-medium text-indigo-900">
            AI-Powered Travel Agent v2.0
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-6 leading-tight">
          Design Your Dream <br /> Getaway in Seconds
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Tell us where you want to go, and let our advanced AI craft the perfect
          itinerary tailored to your budget and interests.
        </p>

        {/* CTA */}
        <Button onClick={()=>navigate('/create-trip')}className="rounded-full px-8 py-6 text-lg flex items-center gap-3 mx-auto shadow-lg bg-black text-white hover:bg-black/90">
          Start Planning
          <FaArrowRightLong className="ml-2 w-5! h-5! group-hover:tracking-wide" />
        </Button>

        {/* Bottom feature icons */}
        <div className="mt-16 flex justify-center gap-14">

          {/* Smart Routes */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center hover:scale-105 transition">
              <Plane className="w-6 h-6 text-indigo-600" />
            </div>
            <span className="text-sm text-gray-700">Smart Routes</span>
          </div>

          {/* Budget Control */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center hover:scale-105 transition">
              <span className="text-indigo-600 text-xl font-bold">$</span>
            </div>
            <span className="text-sm text-gray-700">Budget Control</span>
          </div>

          {/* Personalized */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center hover:scale-105 transition">
              <span className="text-indigo-600 text-xl">❤</span>
            </div>
            <span className="text-sm text-gray-700">Personalized</span>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
