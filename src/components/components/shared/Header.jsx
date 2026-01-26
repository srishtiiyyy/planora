import { Link } from "react-router-dom"
import { Button } from "../ui/button"
import { Plane, Plus, User } from "lucide-react"

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 
      bg-white/80 backdrop-blur-md 
      border-b border-gray-200">

      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-md">
            <Plane className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-lg text-gray-900 tracking-wide">
            PLANORA
          </span>
        </Link>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            className="rounded-full flex items-center gap-2 px-5
              border-gray-300 hover:border-indigo-500
              hover:text-indigo-600 transition-all"
          >
            <Plus className="w-4 h-4" />
            Create Trip
          </Button>

          <Button
            className="rounded-full flex items-center gap-2 px-5
              bg-indigo-600 hover:bg-indigo-700
              text-white shadow-md transition-all"
          >
            <User className="w-4 h-4" />
            Login
          </Button>
        </div>

      </div>
    </header>
  )
}

export default Header
