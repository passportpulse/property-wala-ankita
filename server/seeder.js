const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Property = require('./models/propertyModel');
const Category = require('./models/categoryModel');
const Testimonial = require('./models/testimonialModel');
const ServiceBundle = require('./models/serviceBundleModel');
const ComparisonItem = require('./models/comparisonModel');
const Setting = require('./models/settingModel');
const SiteVisit = require('./models/siteVisitModel');
const PartnerApplication = require('./models/partnerModel');
const Auction = require('./models/auctionModel');
const connectDB = require('./config/db');

dotenv.config({ path: './server/.env' });

const properties = [
  {
    type: "Flats",
    title: "Luxury 3BHK in City Center",
    location: "City Center",
    city: "Durgapur",
    price: "₹65 L",
    numericPrice: 6500000,
    possession: "Ready to Move",
    state: "West Bengal",
    constructionStatus: "Ready to Move",
    images: [
      "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80"
    ],
    image: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?auto=format&fit=crop&w=800&q=80",
    beds: 3, baths: 2, sqft: "1450 SQFT",
    facing: "East",
    furnishing: "Semi-Furnished",
    floor: "4th of 10",
    description: "This premium property is located in the heart of City Center, Durgapur. Featuring modern architecture and ample natural light, it offers the perfect balance of luxury and comfort. Strategically located near schools, hospitals, and markets.",
    amenities: ["Car Parking", "CCTV Security", "24/7 Water", "Power Backup", "Modular Kitchen", "Lift Access", "Garden View", "Gas Connection"],
    isSpotlight: true, isVerified: true, isStarSeller: true, isHotDeal: true,
    status: "active", views24h: 142,
    owner: { name: "Ankit Sharma", phone: "917699988876", email: "ankit@example.com" }
  },
  {
    type: "Commercial Space",
    title: "Prime Office Space",
    location: "Suhatta Complex",
    city: "Durgapur",
    price: "₹1.2 Cr",
    numericPrice: 12000000,
    possession: "Ready to Move",
    state: "West Bengal",
    constructionStatus: "Ready to Move",
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80"
    ],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    beds: 0, baths: 1, sqft: "2200 SQFT",
    facing: "North",
    furnishing: "Unfurnished",
    floor: "2nd of 5",
    description: "Premium office space in a high-footfall area. Ideal for corporate offices or IT firms. Features high-speed elevators and 24/7 security.",
    amenities: ["AC", "Internet", "Security", "Parking"],
    isSpotlight: false, isVerified: true, isUrgent: true,
    status: "negotiation", views24h: 56,
    owner: { name: "Commercial Hub", phone: "917699988876" }
  },
  {
    type: "Plots",
    title: "Residential Plot in Bidhannagar",
    location: "Bidhannagar",
    city: "Durgapur",
    price: "₹45 L",
    numericPrice: 4500000,
    possession: "Immediately",
    state: "West Bengal",
    constructionStatus: "New Launch",
    images: ["https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80"],
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
    beds: 0, baths: 0, sqft: "1800 SQFT",
    facing: "South",
    description: "Government verified corner plot with clear title. Ready for immediate construction.",
    isBestBuy: true, isVerified: true,
    status: "new", views24h: 28,
    owner: { name: "Land Owner", phone: "917699988876" }
  },
  {
    type: "House/Duplex",
    title: "Modern Duplex Villa",
    location: "Lake Gardens",
    city: "Kolkata",
    price: "₹2.5 Cr",
    numericPrice: 25000000,
    possession: "Ready to Move",
    state: "West Bengal",
    constructionStatus: "Ready to Move",
    images: [
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
    ],
    image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=800&q=80",
    beds: 4, baths: 3, sqft: "3200 SQFT",
    facing: "West",
    furnishing: "Fully-Furnished",
    floor: "G+1",
    description: "Luxury duplex villa with private garden and pool. Built with premium materials and high-end finishes.",
    amenities: ["Swimming Pool", "Private Garden", "Servant Room", "Home Theater"],
    isSpotlight: true, isStarSeller: true, isVerified: true,
    status: "active", views24h: 189,
    owner: { name: "Rajesh Gupta", phone: "917699988876" }
  },
  {
    type: "Flats",
    title: "Value 2BHK Near Market",
    location: "Muchipara",
    city: "Durgapur",
    price: "₹38 L",
    numericPrice: 3800000,
    possession: "Ready to Move",
    state: "West Bengal",
    constructionStatus: "Resell",
    images: ["https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80"],
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
    beds: 2, baths: 2, sqft: "1100 SQFT",
    facing: "East",
    furnishing: "Semi-Furnished",
    floor: "1st of 4",
    description: "Affordable 2BHK flat with all essential amenities. Located in a family-friendly neighborhood close to the market.",
    isBestBuy: true, isHotDeal: true,
    status: "active", views24h: 42,
    owner: { name: "Sunil Verma", phone: "917699988876" }
  },
  {
    type: "Flats",
    title: "Modern 2 BHK Cozy Flat",
    location: "Salt Lake",
    city: "Kolkata",
    price: "₹18 K",
    numericPrice: 18000,
    possession: "Ready to Move",
    listingType: "rent",
    state: "West Bengal",
    constructionStatus: "Ready to Move",
    images: ["https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80"],
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
    beds: 2, baths: 2, sqft: "920 SQFT",
    facing: "East",
    furnishing: "Semi-Furnished",
    floor: "3rd of 5",
    description: "Modern 2 BHK cozy flat with lift, security, modular kitchen, and beautiful locality near metro station.",
    amenities: ["Lifts", "Security", "Parking", "AC"],
    isSpotlight: true, isVerified: true,
    status: "active", views24h: 96,
    owner: { name: "Rajesh Kumar", phone: "917699988876", email: "rajesh@example.com" }
  },
  {
    type: "Flats",
    title: "Premium 3 BHK near City Center",
    location: "City Center",
    city: "Durgapur",
    price: "₹25 K",
    numericPrice: 25000,
    possession: "Ready to Move",
    listingType: "rent",
    state: "West Bengal",
    constructionStatus: "Ready to Move",
    images: ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80"],
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
    beds: 3, baths: 2, sqft: "1450 SQFT",
    facing: "South-East",
    furnishing: "Fully-Furnished",
    floor: "5th of 8",
    description: "Spacious 3 BHK luxury flat for rent with swimming pool, power backup, and top-tier security.",
    amenities: ["Gated Community", "Parking", "Power Backup", "WiFi", "AC"],
    isHotDeal: true, isVerified: true,
    status: "active", views24h: 112,
    owner: { name: "Suman Das", phone: "917699988876" }
  }
];

const categories = [
  { key: "flats", label: "🔥 Hot Deal | ✨ New Launch", caption: "Elevate your lifestyle with modern amenities and stunning views.", tagline: "A place to call home." },
  { key: "plots", label: "✅ Govt. Verified | ⏳ Limited Availability", caption: "Your vision, your foundation. Secure a premium piece of land today.", tagline: "Secure your future." },
  { key: "house-duplex", label: "💎 Premium Asset | 📉 Price Drop", caption: "Experience the luxury of space and privacy.", tagline: "Own a home that reflects your success." }
];

const settings = [
  { key: "supportPhone", value: "+91 76999 88876" },
  { key: "supportEmail", value: "support@propertywalabhaiya.com" },
  { key: "heroTitle", value: "Elevate Your Living Experience" },
  { key: "onlineUsers", value: "142" },
  { key: "statVerified", value: "1,240+" },
  { key: "statDeals", value: "482" },
  { key: "statBuyers", value: "8.4K" },
  { key: "showImportantList", value: true }
];

const heatmapData = [
  { name: "Delhi (NCR)", price: "₹8,500", trend: "+6%", demand: "High", color: "bg-red-500", top: "24%", left: "45%", size: "w-24 h-24" },
  { name: "Mumbai", price: "₹12,200", trend: "+4%", demand: "Very High", color: "bg-red-600", top: "58%", left: "30%", size: "w-32 h-32" },
  { name: "Kolkata", price: "₹4,100", trend: "+2%", demand: "Stable", color: "bg-emerald-500", top: "48%", left: "75%", size: "w-28 h-28" },
  { name: "Bangalore", price: "₹7,800", trend: "+5%", demand: "High", color: "bg-orange-500", top: "78%", left: "45%", size: "w-20 h-20" },
  { name: "Durgapur Hub", price: "₹3,800", trend: "+3%", demand: "Growing", color: "bg-yellow-400", top: "48%", left: "71%", size: "w-24 h-24" },
];

const serviceBundles = [
  {
    key: "safety",
    name: "Safety Shield",
    title: "Investor’s Safety Shield",
    target: "For Auction & Resale Buyers: Users buying through auctions or secondary markets who are nervous about legal traps.",
    points: [
      { label: "Property Due Diligence", desc: "Full 30-year chain of title search." },
      { label: "Title Verification", desc: "Legal scrutiny of all bank/seller documents." },
      { label: "Valuation Services", desc: "To ensure the 'Deal' is actually below market price." },
      { label: "Home Loan Assistance", desc: "Specialized support for complex auction funding." },
    ],
    bonus: "Free 'Auction Tender Document' review.",
    benefit: "20% cheaper than booking services individually.",
    promise: "Sleep easy while we check the papers.",
    bestFor: "High-Risk Deals"
  },
  {
    key: "handover",
    name: "Seamless Handover",
    title: "The Seamless Handover Pack",
    target: "For Homebuyers: End-users who have found a home and need help with the 'boring' paperwork.",
    points: [
      { label: "Documentation Drafting", desc: "Agreement to Sell (ATS) and Sale Deed preparation." },
      { label: "Property Registration", desc: "End-to-end coordination at the Sub-Registrar Office." },
      { label: "Mutation Services", desc: "Ensuring your name is updated in Government records post-sale." },
      { label: "Vastu Consultancy", desc: "Basic energy audit and directional alignment for the new home." },
    ],
    bonus: "",
    benefit: "A dedicated 'Bhaiya Relationship Manager' to handle the government office visits.",
    promise: "You enjoy the house; we handle the queue.",
    bestFor: "First-Time Buyers"
  },
  {
    key: "developer",
    name: "Developer’s Launchpad",
    title: "Developer’s Launchpad",
    target: "For Landowners & Builders: Users looking to monetize land or start a small construction project.",
    points: [
      { label: "DPR Preparation", desc: "Detailed financial and technical feasibility report." },
      { label: "JV Documentation", desc: "Airtight collaboration agreements between land owner and builder." },
      { label: "Government Liaison", desc: "Initial assistance with Sanctions and CLU (Change of Land Use)." },
      { label: "Valuation Services", desc: "Official market valuation for project financing." },
    ],
    bonus: "",
    benefit: "Priority access to the 'Property Wala Bhaiya' Featured Listings once the project starts.",
    promise: "Professionalizing your project from Day 1.",
    bestFor: "Strategic Growth"
  }
];

const auctions = [
  {
    title: "3 BHK Apartment - Bank of Baroda Foreclosure",
    city: "Durgapur",
    type: "Bank Auctions",
    basePrice: "₹82.5 L",
    currentBid: "₹83 L",
    endTime: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
    status: "active",
    description: "3 BHK premium apartment located at Moulana Azad, City Centre, Durgapur. Bank foreclosure auction with direct bank possession.",
    image: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?auto=format&fit=crop&w=800&q=80",
    marketValue: "₹1.10 Cr",
    reservePrice: "₹82.5 L",
    potentialSavings: "₹27.5 L (25%)",
    bhaiyaAnalysis: "Based on recent sales in the same building, this property is being auctioned at nearly 25% below current market rates. Even with ₹5 Lakhs in renovation, you're looking at instant equity!",
    emd: "₹8,25,000",
    bidIncrement: "₹50,000",
    paymentSchedule: ["T+24 Hours: 25% of bid amount must be paid if you win", "T+15 Days: Remaining 75% payment deadline"],
    possessionType: "Physical Possession",
    encumbrances: "None reported",
    outstandingDues: "₹45,000",
    documents: ["Tender Document", "Sale Notice"],
    localityScore: "4.2/5",
    nearby: "200m from Metro Station | 1km from City Hospital.",
    heatmapInsight: "Prices in this sector have grown 8% YoY. High rental demand from working professionals."
  },
  {
    title: "Premium 4 BHK Residential Villa",
    city: "Kolkata",
    type: "Foreclosures",
    basePrice: "₹1.8 Cr",
    currentBid: "₹1.85 Cr",
    endTime: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
    status: "active",
    description: "Premium independent 4 BHK villa at Lake Gardens, Kolkata. Foreclosure sale due to NPA settlement.",
    image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=800&q=80",
    marketValue: "₹2.40 Cr",
    reservePrice: "₹1.8 Cr",
    potentialSavings: "₹60 L (25%)",
    bhaiyaAnalysis: "An outstanding duplex villa in one of Kolkata's elite residential blocks. The reserve price is extremely competitive, presenting an exceptional value-add opportunity.",
    emd: "₹18,00,000",
    bidIncrement: "₹1,00,000",
    paymentSchedule: ["T+24 Hours: 25% of bid amount", "T+30 Days: Remaining 75% payment deadline"],
    possessionType: "Physical Possession",
    encumbrances: "None reported",
    outstandingDues: "₹1,20,000",
    documents: ["Tender Document", "Sale Notice", "Property Title Deed"],
    localityScore: "4.7/5",
    nearby: "100m from Lake | 500m from Metro Station | Near South City Mall.",
    heatmapInsight: "Lake Gardens is a premium high-growth pocket. Annual price appreciation averages 12%."
  }
];

const importData = async () => {
  try {
    await connectDB();
    const HeatMap = require('./models/heatmapModel');
    
    await Property.deleteMany();
    await Category.deleteMany();
    await Testimonial.deleteMany();
    await ServiceBundle.deleteMany();
    await ComparisonItem.deleteMany();
    await Setting.deleteMany();
    await SiteVisit.deleteMany();
    await PartnerApplication.deleteMany();
    await HeatMap.deleteMany();
    await Auction.deleteMany();

    await Property.insertMany(properties);
    await Category.insertMany(categories);
    await Setting.insertMany(settings);
    await HeatMap.insertMany(heatmapData);
    await ServiceBundle.insertMany(serviceBundles);
    await Auction.insertMany(auctions);

    console.log('--- ALL ADVANCED DATA MIGRATED TO DATABASE SUCCESSFULLY ---');
    process.exit();
  } catch (error) {
    console.error(`Error with data import: ${error}`);
    process.exit(1);
  }
};

importData();
