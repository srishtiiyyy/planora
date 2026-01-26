import { useState } from "react"
import { Calendar } from "lucide-react"
import axios from "axios"
import { auth, googleProvider } from "../lib/firebase"
import { signInWithPopup } from "firebase/auth"

const CreateTrip = () => {
  const [step, setStep] = useState(1)

  const [destination, setDestination] = useState("")
  const [suggestions, setSuggestions] = useState([])
  const [days, setDays] = useState(1)
  const [daysError, setDaysError] = useState("")
  const [budget, setBudget] = useState("")
  const [travelWith, setTravelWith] = useState("")
  const [showAuthModal, setShowAuthModal] = useState(false)

  /* ===============================
     GOOGLE LOGIN
     =============================== */
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider)
      console.log("User:", result.user)

      alert(`Logged in as ${result.user.displayName}`)
      setShowAuthModal(false)

      // TODO: redirect / generate plan
    } catch (error) {
      console.error(error)
      alert("Google login failed")
    }
  }

  /* ===============================
     GeoDB City Autocomplete
     =============================== */
  const fetchCities = async (query) => {
    if (!query) {
      setSuggestions([])
      return
    }

    try {
      const res = await axios.get(
        "https://wft-geo-db.p.rapidapi.com/v1/geo/cities",
        {
          params: {
            namePrefix: query,
            limit: 10,
            sort: "-population",
          },
          headers: {
            "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
            "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
          },
        }
      )

      const uniqueCities = []
      const seen = new Set()

      res.data.data.forEach((city) => {
        const key = `${city.city}-${city.country}`
        if (!seen.has(key)) {
          seen.add(key)
          uniqueCities.push(city)
        }
      })

      // 🇮🇳 Prioritize India
      uniqueCities.sort((a, b) => {
        if (a.country === "India") return -1
        if (b.country === "India") return 1
        return 0
      })

      setSuggestions(uniqueCities.slice(0, 5))
    } catch (error) {
      console.error("GeoDB error:", error)
    }
  }

  /* ===============================
     Days validation
     =============================== */
  const handleDaysChange = (e) => {
    const value = Number(e.target.value)
    setDays(value)

    if (value > 5) {
      setDaysError("Trip duration cannot exceed 5 days")
    } else if (value < 1) {
      setDaysError("Trip must be at least 1 day")
    } else {
      setDaysError("")
    }
  }

  return (
    <>
      <div className="pt-28 min-h-screen bg-gray-50 flex justify-center">
        <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl border overflow-hidden">

          {/* Progress bar */}
          <div className="h-2 bg-indigo-100 w-full">
            <div
              className="h-full bg-indigo-600 transition-all duration-500"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>

          <div className="p-10">

            {/* Step dots */}
            <div className="flex justify-center gap-2 mb-8">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    step === s ? "w-10 bg-indigo-600" : "w-3 bg-gray-300"
                  }`}
                />
              ))}
            </div>

            {/* ================= STEP 1 ================= */}
            {step === 1 && (
              <>
                <h1 className="text-3xl font-bold text-center mb-2">
                  Where&apos;s your next adventure?
                </h1>
                <p className="text-gray-500 text-center mb-10">
                  Select your destination and duration (max 5 days).
                </p>

                <div className="space-y-6 max-w-xl mx-auto">

                  {/* Destination */}
                  <div className="relative">
                    <label className="block text-sm font-medium mb-2">
                      Destination
                    </label>

                    <input
                      type="text"
                      placeholder="Search for a city..."
                      value={destination}
                      onChange={(e) => {
                        setDestination(e.target.value)
                        fetchCities(e.target.value)
                      }}
                      className="w-full h-12 px-4 border rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
                    />

                    {suggestions.length > 0 && (
                      <div className="absolute z-10 bg-white w-full border rounded-lg shadow mt-1 max-h-60 overflow-auto">
                        {suggestions.map((city) => (
                          <div
                            key={`${city.id}-${city.country}`}
                            onClick={() => {
                              setDestination(`${city.city}, ${city.country}`)
                              setSuggestions([])
                            }}
                            className="px-4 py-2 hover:bg-indigo-50 cursor-pointer"
                          >
                            <span className="font-medium">{city.city}</span>
                            <span className="text-gray-500 text-sm">
                              {" "}• {city.country}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
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
                        value={days}
                        onChange={handleDaysChange}
                        className="w-full h-12 pl-12 pr-4 border rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>

                    {daysError && (
                      <p className="text-red-500 text-sm mt-1">
                        {daysError}
                      </p>
                    )}
                  </div>
                </div>
              </>
            )}

            {/* ================= STEP 2 ================= */}
            {step === 2 && (
              <>
                <h1 className="text-3xl font-bold text-center mb-2">
                  What&apos;s your budget?
                </h1>

                <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto mt-10">
                  {[
                    { label: "Budget Friendly", icon: "$" },
                    { label: "Moderate", icon: "$$" },
                    { label: "Luxury", icon: "$$$" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      onClick={() => setBudget(item.label)}
                      className={`p-8 rounded-2xl border cursor-pointer text-center transition
                        ${
                          budget === item.label
                            ? "border-indigo-600 bg-indigo-50"
                            : "hover:border-gray-400"
                        }`}
                    >
                      <div className="text-3xl mb-3">{item.icon}</div>
                      <p className="font-semibold">{item.label}</p>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* ================= STEP 3 ================= */}
            {step === 3 && (
              <>
                <h1 className="text-3xl font-bold text-center mb-2">
                  Who are you traveling with?
                </h1>

                <div className="grid grid-cols-4 gap-6 max-w-4xl mx-auto">
                  {[
                    { label: "Solo Traveler", desc: "Exploring at your own pace", icon: "🧭" },
                    { label: "Couple", desc: "Romantic getaways", icon: "💕" },
                    { label: "Family", desc: "Kid-friendly activities", icon: "👨‍👩‍👧‍👦" },
                    { label: "Group/Friends", desc: "Thrill-seekers group", icon: "🥳" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      onClick={() => setTravelWith(item.label)}
                      className={`p-6 rounded-2xl border cursor-pointer text-center transition
                        ${
                          travelWith === item.label
                            ? "border-indigo-600 bg-indigo-50"
                            : "hover:border-gray-400"
                        }`}
                    >
                      <div className="text-4xl mb-4">{item.icon}</div>
                      <p className="font-semibold text-lg">{item.label}</p>
                      <p className="text-gray-400 text-sm mt-1">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* Navigation buttons */}
            <div className="flex justify-between mt-12">
              {step > 1 ? (
                <button onClick={() => setStep(step - 1)} className="text-gray-500">
                  Back
                </button>
              ) : (
                <div />
              )}

              <button
                onClick={() => {
                  if (step === 3) setShowAuthModal(true)
                  else setStep(step + 1)
                }}
                disabled={
                  (step === 1 && (!destination || daysError)) ||
                  (step === 2 && !budget) ||
                  (step === 3 && !travelWith)
                }
                className={`px-8 py-3 rounded-xl font-semibold transition
                  ${
                    (step === 1 && destination && !daysError) ||
                    (step === 2 && budget) ||
                    (step === 3 && travelWith)
                      ? "bg-indigo-600 text-white hover:bg-indigo-700"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
              >
                {step === 3 ? "Generate Plan ✓" : "Continue →"}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* ================= AUTH MODAL ================= */}
      {showAuthModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 w-full max-w-md text-center">
            <h2 className="text-2xl font-bold mb-2">
              Sign in to continue
            </h2>
            <p className="text-gray-500 mb-6">
              Login to generate your travel plan
            </p>

            <button
              onClick={handleGoogleLogin}
              className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700"
            >
              Continue with Google
            </button>

            <button
              onClick={() => setShowAuthModal(false)}
              className="mt-4 text-gray-500"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default CreateTrip
