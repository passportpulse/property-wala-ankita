import React, { useState, useEffect } from 'react';
import { ChevronLeft, SlidersHorizontal, ArrowUpDown, LayoutGrid, List, Search, MapPin, Filter, X } from 'lucide-react';
import PropertyCard from '../../../components/PropertyCard';
import FeaturedPropertyModal from '../../../components/modals/FeaturedPropertyModal';
import ReportListingModal from '../../../components/modals/ReportListingModal';
import axios from 'axios';

export default function BuyResults({ formData, onBack }) {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [reportingProperty, setReportingProperty] = useState(null);
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('newest');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get('http://localhost:5000/api/properties', {
          params: {
            city: formData.city,
            location: formData.loc,
            type: formData.type,
            status: formData.status,
            minPrice: formData.minPrice,
            maxPrice: formData.maxPrice
          }
        });
        setProperties(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching properties:', error);
        setLoading(false);
      }
    };

    fetchProperties();
  }, [formData]);

  const parsePrice = (p) => {
    if (!p) return 0;
    if (typeof p === 'number') return p;
    let str = p.toString().replace(/[₹\s,]/g, '');
    if (str.toLowerCase().endsWith('cr')) return parseFloat(str) * 10000000;
    if (str.toLowerCase().endsWith('l') || str.toLowerCase().endsWith('lakh')) return parseFloat(str) * 100000;
    return parseFloat(str) || 0;
  };

  const sortedProperties = [...properties].sort((a, b) => {
    if (sortBy === 'price-low') {
      return parsePrice(a.price) - parsePrice(b.price);
    }
    if (sortBy === 'price-high') {
      return parsePrice(b.price) - parsePrice(a.price);
    }
    if (sortBy === 'popular') {
      return (b.views24h || 0) - (a.views24h || 0);
    }
    // newest
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* HEADER & TOP BAR */}
      <div className="bg-white p-6 sm:p-10 rounded-[2.5rem] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] border border-slate-100">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          
          <div className="space-y-2">
            <button 
              onClick={onBack}
              className="group flex items-center gap-2 text-slate-400 hover:text-dark-orange transition-all mb-4"
            >
              <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center group-hover:bg-orange-50 group-hover:rotate-[-10deg] transition-all">
                <ChevronLeft size={16} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest">Back to Search</span>
            </button>
            
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tighter">
                {properties.length} Properties <span className="text-dark-orange">Found</span>
            </h2>
            <div className="flex items-center gap-2 text-slate-400 text-xs font-bold">
                <MapPin size={14} className="text-dark-orange" />
                <span>{formData.city} • {formData.loc} • ₹{formData.minPrice/100000}L - ₹{formData.maxPrice/10000000}Cr</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 w-full lg:w-auto">
            {/* View Mode */}
            <div className="flex bg-slate-50 p-1.5 rounded-2xl border border-slate-100">
                <button 
                    onClick={() => setViewMode('grid')}
                    className={`p-3 rounded-xl transition-all ${viewMode === 'grid' ? 'bg-white shadow-md text-dark-orange' : 'text-slate-400 hover:text-slate-600'}`}
                >
                    <LayoutGrid size={18} />
                </button>
                <button 
                    onClick={() => setViewMode('list')}
                    className={`p-3 rounded-xl transition-all ${viewMode === 'list' ? 'bg-white shadow-md text-dark-orange' : 'text-slate-400 hover:text-slate-600'}`}
                >
                    <List size={18} />
                </button>
            </div>

            {/* Sort Dropdown */}
            <div className="relative flex-1 lg:flex-none">
                <select 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full lg:w-48 pl-6 pr-10 py-4 bg-white border border-slate-100 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-900 appearance-none focus:outline-none focus:border-dark-orange shadow-sm"
                >
                    <option value="newest">Newest First</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="popular">Most Popular</option>
                </select>
                <ArrowUpDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 pointer-events-none" />
            </div>

            {/* Filter Toggle (Mobile) */}
            <button 
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-dark-orange transition-all active:scale-95 shadow-xl"
            >
                <SlidersHorizontal size={16} /> Filters
            </button>
          </div>
        </div>

        {/* ACTIVE FILTERS CHIPS */}
        <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-slate-50">
            <FilterChip label={formData.city} onRemove={() => {}} />
            <FilterChip label={formData.loc} onRemove={() => {}} />
            <FilterChip label={`Max ₹${formData.maxPrice/10000000}Cr`} onRemove={() => {}} />
            <button className="text-[9px] font-black text-dark-orange uppercase underline underline-offset-4 ml-2">Clear All</button>
        </div>
      </div>

      {/* RESULTS GRID */}
      <div className={`grid gap-6 sm:gap-10 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
        {sortedProperties.length > 0 ? (
            sortedProperties.map(property => (
                <PropertyCard 
                    key={property._id || property.id}
                    item={property}
                    onSelect={setSelectedProperty}
                    onReport={setReportingProperty}
                />
            ))
        ) : (
            <div className="col-span-full py-32 flex flex-col items-center justify-center text-center space-y-6">
                <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center text-slate-300 border-2 border-dashed border-slate-200">
                    <Search size={40} />
                </div>
                <div className="space-y-2">
                    <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">No Properties Found</h3>
                    <p className="text-sm text-slate-400 font-medium max-w-xs">We couldn't find any listings matching your current filters. Try adjusting your search criteria.</p>
                </div>
                <button 
                    onClick={onBack}
                    className="px-10 py-4 bg-dark-orange text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-900 transition-all shadow-xl"
                >
                    Reset All Filters
                </button>
            </div>
        )}
      </div>

      {/* MODALS */}
      <FeaturedPropertyModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
      />

      <ReportListingModal 
        isOpen={!!reportingProperty}
        onClose={() => setReportingProperty(null)}
        propertyId={reportingProperty?.id}
        propertyTitle={reportingProperty?.title}
      />
    </div>
  );
}

function FilterChip({ label, onRemove }) {
    return (
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-100 rounded-full">
            <span className="text-[10px] font-black uppercase tracking-tight text-slate-900">{label}</span>
            <button onClick={onRemove} className="text-slate-300 hover:text-red-500 transition-colors">
                <X size={12} />
            </button>
        </div>
    );
}
