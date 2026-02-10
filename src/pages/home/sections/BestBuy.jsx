import { ArrowRight, MapPin } from "lucide-react";

const bestBuys = [
  {
    title: "2 BHK Apartment",
    type: "Ready to Move",
    location: "City Centre, Durgapur",
    price: "₹48 Lakh",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
  },
  {
    title: "3 BHK Independent House",
    type: "New Construction",
    location: "Benachity, Durgapur",
    price: "₹72 Lakh",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    title: "Residential Plot",
    type: "Clear Title",
    location: "Muchipara, Durgapur",
    price: "₹32 Lakh",
    image:
      "https://images.unsplash.com/photo-1501183638710-841dd1904471",
  },
  {
    title: "1 BHK Investment Flat",
    type: "Rental Demand Area",
    location: "Bidhannagar, Durgapur",
    price: "₹26 Lakh",
    image:
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c",
  },
];

export default function BestBuySection() {
  return (
    <section className="pb-16 lg:pb-32 bg-white font-poppins">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="mb-12 text-center">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-coral-red">
            Durgapur Properties
          </span>
          <h2 className="mt-2 text-3xl lg:text-5xl font-black text-dark-slate">
            <span className="bg-linear-to-r from-coral-red via-soft-orange to-peach-glow bg-clip-text text-transparent">
                Best Buys 
              </span>
             {" "}in Durgapur
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-slate text-base lg:text-lg">
            Carefully selected properties across prime areas of Durgapur,
            offering strong value, clear documentation, and real market demand.
          </p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {bestBuys.map((item, i) => (
            <div
              key={i}
              className="group rounded-2xl overflow-hidden bg-white border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* IMAGE */}
              <div className="relative h-48">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />

                {/* SOFT FADE */}
                <div className="absolute inset-x-0 bottom-0 h-2 bg-linear-to-t from-white via-white/90 to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-500">
                  {item.type}
                </p>

                <h3 className="mt-1 text-lg font-bold text-dark-slate">
                  {item.title}
                </h3>

                <div className="mt-2 flex items-center gap-2 text-sm text-muted-slate">
                  <MapPin className="w-4 h-4" />
                  {item.location}
                </div>

                <div className="mt-4 text-lg font-bold text-dark-slate">
                  {item.price}
                </div>

                {/* CTA */}
                <div className="mt-5 flex items-center justify-between text-sm font-semibold text-slate-600 group-hover:text-coral-red transition-colors">
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <button className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-coral-red text-white font-semibold hover:bg-soft-orange transition">
            View All Properties in Durgapur
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
