import { Search, MapPin } from "lucide-react";

export default function RentHero() {
  return (
    <section className="bg-white border-b">
      <div className="max-w-6xl mx-auto px-4 py-8 lg:py-12">

        {/* Heading */}
        <div className="text-center mb-6">
          <h1 className="text-2xl lg:text-4xl font-semibold text-slate-900">
            Find Rental Properties
          </h1>
          <p className="text-sm lg:text-base text-slate-500 mt-2">
            Verified listings. Transparent pricing.
          </p>
        </div>

        {/* Search Box */}
        <div className="bg-slate-50 border rounded-xl p-3 lg:p-4 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">

            {/* Location */}
            <div className="flex items-center bg-white border rounded-lg px-3 py-2">
              <MapPin size={18} className="text-slate-400 mr-2" />
              <input
                type="text"
                placeholder="Enter city or locality"
                className="w-full outline-none text-sm"
              />
            </div>

            {/* Property Type */}
            <select className="border rounded-lg px-3 py-2 text-sm bg-white">
              <option>Property Type</option>
              <option>1 BHK</option>
              <option>2 BHK</option>
              <option>3 BHK</option>
              <option>Studio</option>
            </select>

            {/* Budget */}
            <select className="border rounded-lg px-3 py-2 text-sm bg-white">
              <option>Budget</option>
              <option>Under ₹10,000</option>
              <option>₹10,000 - ₹20,000</option>
              <option>₹20,000 - ₹40,000</option>
              <option>Above ₹40,000</option>
            </select>

            {/* Search Button */}
            <button className="bg-dark-orange hover:bg-orange-600 text-white rounded-lg px-4 py-2 text-sm font-medium flex items-center justify-center gap-2 transition">
              <Search size={18} />
              Search
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}
