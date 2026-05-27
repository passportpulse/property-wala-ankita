import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  LayoutDashboard, Building2, Users, Settings, Plus, Edit, Trash2, 
  Home, CheckCircle2, Clock, Star, MessageSquare, Briefcase, 
  ChevronRight, Search, Bell, Menu, X, Save, Calendar, Gavel, Handshake,
  Globe, Phone, Mail, Image as ImageIcon, MapPin, Tag, Armchair, Layers, Compass,
  TrendingUp, Maximize, Activity
} from 'lucide-react';

const API_BASE = 'http://localhost:5000/api';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('properties');
  const [data, setData] = useState({ 
    properties: [], categories: [], testimonials: [], 
    visits: [], partners: [], auctions: [], heatmap: [], services: [], settings: {} 
  });
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    setLoading(true);
    try {
      const endpoints = {
        properties: `${API_BASE}/properties`,
        categories: `${API_BASE}/content/categories`,
        testimonials: `${API_BASE}/content/testimonials`,
        visits: `${API_BASE}/features/visits`,
        partners: `${API_BASE}/features/partners`,
        auctions: `${API_BASE}/features/auctions`,
        heatmap: `${API_BASE}/heatmap`,
        services: `${API_BASE}/content/services`,
        settings: `${API_BASE}/content/settings`
      };

      const results = {};
      const keys = Object.keys(endpoints);
      
      const responses = await Promise.allSettled(
        keys.map(key => axios.get(endpoints[key]))
      );

      responses.forEach((res, index) => {
        const key = keys[index];
        if (res.status === 'fulfilled') {
          if (key === 'settings') {
            results[key] = res.value.data.reduce((acc, curr) => {
              acc[curr.key] = curr.value;
              return acc;
            }, {});
          } else {
            results[key] = res.value.data;
          }
        } else {
          console.error(`Failed to fetch ${key}:`, res.reason);
          results[key] = key === 'settings' ? {} : [];
        }
      });

      setData(prev => ({ ...prev, ...results }));
      setLoading(false);
    } catch (error) {
      console.error('Critical error fetching data:', error);
      setLoading(false);
    }
  };

  const updateSetting = async (key, value) => {
    try {
      await axios.post(`${API_BASE}/content/settings`, { key, value });
      fetchAllData();
    } catch (error) {
      console.error('Error updating setting:', error);
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      let endpoint = '';
      if (activeTab === 'properties') endpoint = '/properties';
      else if (activeTab === 'heatmap') endpoint = '/heatmap';
      else if (['visits', 'partners', 'auctions'].includes(activeTab)) endpoint = `/features/${activeTab}`;
      else endpoint = `/content/${activeTab}`;

      const payload = { ...formData };
      if (typeof payload.images === 'string') {
        payload.images = payload.images.split(',').map(img => img.trim());
      }
      if (typeof payload.amenities === 'string') {
        payload.amenities = payload.amenities.split(',').map(a => a.trim());
      }
      if (typeof payload.paymentSchedule === 'string') {
        payload.paymentSchedule = payload.paymentSchedule.split('\n').map(p => p.trim()).filter(Boolean);
      }
      if (typeof payload.documents === 'string') {
        payload.documents = payload.documents.split(',').map(d => d.trim()).filter(Boolean);
      }

      // Parse points text for services tab
      if (activeTab === 'services' && payload.pointsText) {
        payload.points = payload.pointsText.split('\n').filter(line => line.includes(':')).map(line => {
          const [label, ...descParts] = line.split(':');
          return {
            label: label.trim(),
            desc: descParts.join(':').trim()
          };
        });
        delete payload.pointsText;
      }

      if (editingItem) {
        await axios.put(`${API_BASE}${endpoint}/${editingItem._id}`, payload);
      } else {
        await axios.post(`${API_BASE}${endpoint}`, payload);
      }
      
      setShowModal(false);
      fetchAllData();
    } catch (error) {
      console.error('Error saving:', error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this?')) return;
    try {
      let endpoint = '';
      if (activeTab === 'properties') endpoint = '/properties';
      else if (activeTab === 'heatmap') endpoint = '/heatmap';
      else if (['visits', 'partners', 'auctions'].includes(activeTab)) endpoint = `/features/${activeTab}`;
      else endpoint = `/content/${activeTab}`;

      await axios.delete(`${API_BASE}${endpoint}/${id}`);
      fetchAllData();
    } catch (error) {
      console.error('Error deleting:', error);
    }
  }

  const openModal = (item = null) => {
    setEditingItem(item);
    if (item) {
      const preparedItem = { ...item };
      if (Array.isArray(item.images)) preparedItem.images = item.images.join(', ');
      if (Array.isArray(item.amenities)) preparedItem.amenities = item.amenities.join(', ');
      
      if (activeTab === 'services' && Array.isArray(item.points)) {
        preparedItem.pointsText = item.points.map(p => `${p.label}: ${p.desc}`).join('\n');
      }
      
      if (activeTab === 'auctions') {
        if (Array.isArray(item.paymentSchedule)) preparedItem.paymentSchedule = item.paymentSchedule.join('\n');
        if (Array.isArray(item.documents)) preparedItem.documents = item.documents.join(', ');
        if (item.endTime) {
          preparedItem.endTime = new Date(item.endTime).toISOString().substring(0, 16);
        }
      }
      
      setFormData(preparedItem);
    } else {
      if (activeTab === 'heatmap') {
        setFormData({ name: '', price: '', trend: '', demand: '', color: 'bg-red-500', top: '50%', left: '50%', size: 'w-24 h-24' });
      } else if (activeTab === 'services') {
        setFormData({ key: '', name: '', title: '', target: '', pointsText: '', bonus: '', benefit: '', bestFor: '', promise: '' });
      } else if (activeTab === 'auctions') {
        setFormData({
          title: '', city: 'Durgapur', type: 'Bank Auctions', basePrice: '', currentBid: '',
          endTime: new Date(Date.now() + 5*24*60*60*1000).toISOString().substring(0, 16),
          status: 'upcoming', description: '', image: '', marketValue: '', reservePrice: '',
          potentialSavings: '', bhaiyaAnalysis: '', emd: '', bidIncrement: '',
          paymentSchedule: '', possessionType: 'Physical Possession', encumbrances: 'None reported',
          outstandingDues: '', documents: '', localityScore: '4.2/5', nearby: '', heatmapInsight: ''
        });
      } else {
        setFormData({ status: 'active', isOnline: true, isSpotlight: false, owner: { name: '', phone: '', email: '' } });
      }
    }
    setShowModal(true);
  };

  const renderSidebar = () => (
    <div className="sidebar">
      <div className="sidebar-header">
        <div style={{ background: 'var(--secondary)', padding: '8px', borderRadius: '12px', display: 'flex', alignItems: 'center' }}>
          <Building2 size={24} color="white" />
        </div>
        <span style={{ color: 'var(--text-main)', fontSize: '1.25rem' }}>Admin<span style={{ color: 'var(--primary)', fontWeight: '800' }}>Wala</span></span>
      </div>
      <div className="nav-links">
        {[
          { id: 'properties', icon: Home, label: 'Properties' },
          { id: 'heatmap', icon: Activity, label: 'Market Pulse' },
          { id: 'visits', icon: Calendar, label: 'Site Visits' },
          { id: 'partners', icon: Handshake, label: 'Partners' },
          { id: 'auctions', icon: Gavel, label: 'Auctions' },
          { id: 'categories', icon: Tag, label: 'Categories' },
          { id: 'services', icon: Briefcase, label: 'Services' },
          { id: 'testimonials', icon: MessageSquare, label: 'Testimonials' },
          { id: 'settings', icon: Settings, label: 'Site Settings' },
        ].map(link => (
          <button 
            key={link.id}
            className={`nav-link ${activeTab === link.id ? 'active' : ''}`} 
            onClick={() => setActiveTab(link.id)}
          >
            <link.icon size={20} /> <span>{link.label}</span>
          </button>
        ))}
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="animate-in space-y-6">
      <div className="card">
        <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><Globe className="text-primary" /> Global Configurations</h3>
        <div className="grid-2">
          <div className="form-group">
            <label>Hero Title</label>
            <input className="form-control" value={data.settings.heroTitle || ''} onBlur={(e) => updateSetting('heroTitle', e.target.value)} onChange={(e) => setData({...data, settings: {...data.settings, heroTitle: e.target.value}})} />
          </div>
          <div className="form-group">
            <label>Online Users Count</label>
            <input className="form-control" value={data.settings.onlineUsers || ''} onBlur={(e) => updateSetting('onlineUsers', e.target.value)} onChange={(e) => setData({...data, settings: {...data.settings, onlineUsers: e.target.value}})} />
          </div>
          <div className="form-group">
            <label>Support Phone</label>
            <input className="form-control" value={data.settings.supportPhone || ''} onBlur={(e) => updateSetting('supportPhone', e.target.value)} onChange={(e) => setData({...data, settings: {...data.settings, supportPhone: e.target.value}})} />
          </div>
          <div className="form-group">
            <label>Support Email</label>
            <input className="form-control" value={data.settings.supportEmail || ''} onBlur={(e) => updateSetting('supportEmail', e.target.value)} onChange={(e) => setData({...data, settings: {...data.settings, supportEmail: e.target.value}})} />
          </div>
        </div>

        <h3 className="text-xl font-bold mt-10 mb-6 flex items-center gap-2"><LayoutDashboard className="text-primary" /> Stats (Hero Section)</h3>
        <div className="grid-2">
          <div className="form-group">
            <label>Verified Listings Stat</label>
            <input className="form-control" value={data.settings.statVerified || ''} onBlur={(e) => updateSetting('statVerified', e.target.value)} onChange={(e) => setData({...data, settings: {...data.settings, statVerified: e.target.value}})} />
          </div>
          <div className="form-group">
            <label>Deals Closed Stat</label>
            <input className="form-control" value={data.settings.statDeals || ''} onBlur={(e) => updateSetting('statDeals', e.target.value)} onChange={(e) => setData({...data, settings: {...data.settings, statDeals: e.target.value}})} />
          </div>
          <div className="form-group">
            <label>Active Buyers Stat</label>
            <input className="form-control" value={data.settings.statBuyers || ''} onBlur={(e) => updateSetting('statBuyers', e.target.value)} onChange={(e) => setData({...data, settings: {...data.settings, statBuyers: e.target.value}})} />
          </div>
        </div>

        <div className="mt-10 p-6 bg-slate-50 rounded-2xl">
          <label className="flex items-center gap-3 cursor-pointer">
            <input 
              type="checkbox" 
              checked={data.settings.showImportantList === 'true' || data.settings.showImportantList === true} 
              onChange={(e) => updateSetting('showImportantList', e.target.checked)}
              style={{ width: '20px', height: '20px' }}
            />
            <span className="font-bold">Show "Important List" (VIP Section) on Frontend</span>
          </label>
        </div>
      </div>
    </div>
  );

  return (
    <div className="admin-layout">
      {renderSidebar()}
      
      <div className="main-content">
        <header className="header">
          <h1 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--text-main)' }}>
            {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Management
          </h1>
          {activeTab !== 'settings' && (activeTab !== 'visits') && (
            <button className="btn btn-primary" onClick={() => openModal()}>
              <Plus size={20} /> Add New
            </button>
          )}
        </header>

        {loading ? <div className="loading-spinner">Loading...</div> : (
          <div className="card animate-in overflow-x-auto">
            {activeTab === 'settings' ? renderSettings() : (
              <table className="table">
                <thead>
                  {activeTab === 'properties' && <tr><th>Title</th><th>Price</th><th>Location</th><th>Area</th><th>BHK/Bath</th><th>Actions</th></tr>}
                  {activeTab === 'heatmap' && <tr><th>City</th><th>Price</th><th>Trend</th><th>Demand</th><th>Position</th><th>Actions</th></tr>}
                  {activeTab === 'visits' && <tr><th>User</th><th>Property</th><th>Schedule</th><th>Status</th><th>Actions</th></tr>}
                  {activeTab === 'categories' && <tr><th>Name</th><th>Icon</th><th>Properties</th><th>Actions</th></tr>}
                  {activeTab === 'services' && <tr><th>Key</th><th>Name</th><th>Title</th><th>Best For</th><th>Actions</th></tr>}
                  {activeTab === 'testimonials' && <tr><th>Name</th><th>Role</th><th>Rating</th><th>Actions</th></tr>}
                  {activeTab === 'partners' && <tr><th>Name</th><th>Contact</th><th>City/Area</th><th>Type</th><th>RERA/License</th><th>Status</th><th>Actions</th></tr>}
                  {activeTab === 'auctions' && <tr><th>Title</th><th>Price</th><th>Date</th><th>Actions</th></tr>}
                </thead>
                <tbody>
                  {data[activeTab]?.map(item => (
                    <tr key={item._id}>
                      {activeTab === 'properties' && (
                        <>
                          <td>{item.title}</td>
                          <td style={{ color: 'var(--primary)', fontWeight: '700' }}>{item.price}</td>
                          <td>{item.location}, {item.city}</td>
                          <td>{item.sqft}</td>
                          <td>{item.beds} BHK / {item.baths} Bath</td>
                        </>
                      )}
                      {activeTab === 'heatmap' && (
                        <>
                          <td>{item.name}</td>
                          <td>{item.price}</td>
                          <td className="text-emerald-500 font-bold">{item.trend}</td>
                          <td>{item.demand}</td>
                          <td>{item.top} / {item.left}</td>
                        </>
                      )}
                      {activeTab === 'visits' && (
                        <>
                          <td>{item.name}</td>
                          <td>{item.property}</td>
                          <td>{item.date} {item.time}</td>
                          <td><span className={`badge badge-${item.status}`}>{item.status}</span></td>
                        </>
                      )}
                      {activeTab === 'categories' && (
                        <>
                          <td>{item.name}</td>
                          <td>{item.icon}</td>
                          <td>{item.count}</td>
                        </>
                      )}
                      {activeTab === 'testimonials' && (
                        <>
                          <td>{item.name}</td>
                          <td>{item.role}</td>
                          <td>{item.rating} ⭐</td>
                        </>
                      )}
                      {activeTab === 'partners' && (
                        <>
                          <td>
                            <div style={{ fontWeight: 'bold' }}>{item.name}</div>
                            {item.businessName && <div style={{ fontSize: '11px', color: '#64748b' }}>{item.businessName}</div>}
                          </td>
                          <td>
                            <div style={{ fontSize: '12px' }}>{item.phone}</div>
                            {item.email && <div style={{ fontSize: '11px', color: '#64748b' }}>{item.email}</div>}
                          </td>
                          <td>{item.city || 'N/A'}</td>
                          <td>
                            {item.type === 'expert' ? (
                              <span style={{ background: '#f3e8ff', color: '#6b21a8', padding: '4px 8px', borderRadius: '8px', fontSize: '11px', fontWeight: 'bold' }}>Expert</span>
                            ) : (
                              <span style={{ background: '#ffedd5', color: '#c2410c', padding: '4px 8px', borderRadius: '8px', fontSize: '11px', fontWeight: 'bold' }}>Agent</span>
                            )}
                          </td>
                          <td>
                            <div style={{ fontSize: '12px', fontWeight: 'bold' }}>{item.rera || item.licenseNumber || 'None'}</div>
                            {item.experience && <div style={{ fontSize: '10px', color: '#64748b' }}>{item.experience} yrs exp</div>}
                          </td>
                          <td>
                            <span className={`badge badge-${item.status || 'pending'}`}>
                              {item.status || 'pending'}
                            </span>
                          </td>
                        </>
                      )}
                      {activeTab === 'auctions' && (
                        <>
                          <td>{item.title}</td>
                          <td>{item.basePrice}</td>
                          <td>{item.endTime ? new Date(item.endTime).toLocaleString('en-IN') : 'N/A'}</td>
                        </>
                      )}
                      {activeTab === 'services' && (
                        <>
                          <td><strong>{item.key}</strong></td>
                          <td>{item.name}</td>
                          <td>{item.title}</td>
                          <td>{item.bestFor}</td>
                        </>
                      )}
                      <td>
                        <div className="flex gap-2">
                          <button className="btn" onClick={() => openModal(item)}><Edit size={18} /></button>
                          <button className="btn text-red-500" onClick={() => handleDelete(item._id)}><Trash2 size={18} /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content animate-in">
            <div className="modal-header">
              <h2 className="text-xl font-bold">{editingItem ? 'Edit' : 'Add New'} {activeTab.slice(0, -1)}</h2>
              <button onClick={() => setShowModal(false)}><X /></button>
            </div>
            <form onSubmit={handleSave} className="modal-body space-y-6">
              {activeTab === 'properties' && (
                <>
                  <div className="section-title">Basic Information</div>
                  <div className="form-group">
                    <label>Property Title</label>
                    <input className="form-control" value={formData.title || ''} onChange={e => setFormData({...formData, title: e.target.value})} placeholder="e.g. Luxury 3BHK in City Center" required />
                  </div>
                  <div className="grid-2">
                    <div className="form-group">
                      <label>Price</label>
                      <input className="form-control" value={formData.price || ''} onChange={e => setFormData({...formData, price: e.target.value})} required />
                    </div>
                    <div className="form-group">
                      <label>Property Type</label>
                      <input className="form-control" value={formData.type || ''} onChange={e => setFormData({...formData, type: e.target.value})} required />
                    </div>
                  </div>
                  <div className="grid-2">
                    <div className="form-group">
                      <label>Location Area</label>
                      <input className="form-control" value={formData.location || ''} onChange={e => setFormData({...formData, location: e.target.value})} required />
                    </div>
                    <div className="form-group">
                      <label>City</label>
                      <input className="form-control" value={formData.city || ''} onChange={e => setFormData({...formData, city: e.target.value})} required />
                    </div>
                  </div>
                  <div className="section-title">Property Details</div>
                  <div className="grid-3">
                    <div className="form-group">
                      <label><Maximize size={14} /> Area</label>
                      <input className="form-control" value={formData.sqft || ''} onChange={e => setFormData({...formData, sqft: e.target.value})} required />
                    </div>
                    <div className="form-group">
                      <label><Home size={14} /> Beds</label>
                      <input type="number" className="form-control" value={formData.beds || 0} onChange={e => setFormData({...formData, beds: e.target.value})} required />
                    </div>
                    <div className="form-group">
                      <label><Layers size={14} /> Baths</label>
                      <input type="number" className="form-control" value={formData.baths || 0} onChange={e => setFormData({...formData, baths: e.target.value})} required />
                    </div>
                  </div>
                  <div className="grid-3">
                    <div className="form-group">
                      <label><Compass size={14} /> Facing</label>
                      <input className="form-control" value={formData.facing || ''} onChange={e => setFormData({...formData, facing: e.target.value})} />
                    </div>
                    <div className="form-group">
                      <label><Armchair size={14} /> Furnishing</label>
                      <input className="form-control" value={formData.furnishing || ''} onChange={e => setFormData({...formData, furnishing: e.target.value})} />
                    </div>
                    <div className="form-group">
                      <label><Layers size={14} /> Floor</label>
                      <input className="form-control" value={formData.floor || ''} onChange={e => setFormData({...formData, floor: e.target.value})} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Images (Comma separated URLs)</label>
                    <textarea className="form-control" value={formData.images || ''} onChange={e => setFormData({...formData, images: e.target.value})} />
                  </div>
                  <div className="flex flex-wrap gap-4 p-4 bg-slate-50 rounded-xl">
                    <label className="checkbox-label"><input type="checkbox" checked={formData.isSpotlight} onChange={e => setFormData({...formData, isSpotlight: e.target.checked})} /> Spotlight</label>
                    <label className="checkbox-label"><input type="checkbox" checked={formData.isVerified} onChange={e => setFormData({...formData, isVerified: e.target.checked})} /> Verified</label>
                    <label className="checkbox-label"><input type="checkbox" checked={formData.isHotDeal} onChange={e => setFormData({...formData, isHotDeal: e.target.checked})} /> Hot Deal</label>
                    <label className="checkbox-label"><input type="checkbox" checked={formData.isUrgent} onChange={e => setFormData({...formData, isUrgent: e.target.checked})} /> Urgent</label>
                    <label className="checkbox-label"><input type="checkbox" checked={formData.isBestBuy} onChange={e => setFormData({...formData, isBestBuy: e.target.checked})} /> Best Buy</label>
                  </div>
                </>
              )}

              {activeTab === 'heatmap' && (
                <>
                  <div className="form-group">
                    <label>City/Area Name</label>
                    <input className="form-control" value={formData.name || ''} onChange={e => setFormData({...formData, name: e.target.value})} required />
                  </div>
                  <div className="grid-2">
                    <div className="form-group">
                      <label>Avg. Price (e.g. ₹8,500)</label>
                      <input className="form-control" value={formData.price || ''} onChange={e => setFormData({...formData, price: e.target.value})} required />
                    </div>
                    <div className="form-group">
                      <label>Trend (e.g. +6%)</label>
                      <input className="form-control" value={formData.trend || ''} onChange={e => setFormData({...formData, trend: e.target.value})} required />
                    </div>
                  </div>
                  <div className="grid-2">
                    <div className="form-group">
                      <label>Demand Level</label>
                      <input className="form-control" value={formData.demand || ''} onChange={e => setFormData({...formData, demand: e.target.value})} placeholder="e.g. High / Stable" required />
                    </div>
                    <div className="form-group">
                      <label>Map Color (Tailwind class)</label>
                      <select className="form-control" value={formData.color || ''} onChange={e => setFormData({...formData, color: e.target.value})} required>
                        <option value="bg-red-500">Red (High Demand)</option>
                        <option value="bg-yellow-500">Yellow (Stable)</option>
                        <option value="bg-emerald-500">Green (Best Value)</option>
                        <option value="bg-orange-500">Orange (Growing)</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid-3">
                    <div className="form-group">
                      <label>Top (%)</label>
                      <input className="form-control" value={formData.top || ''} onChange={e => setFormData({...formData, top: e.target.value})} placeholder="e.g. 24%" required />
                    </div>
                    <div className="form-group">
                      <label>Left (%)</label>
                      <input className="form-control" value={formData.left || ''} onChange={e => setFormData({...formData, left: e.target.value})} placeholder="e.g. 45%" required />
                    </div>
                    <div className="form-group">
                      <label>Pulse Size</label>
                      <input className="form-control" value={formData.size || ''} onChange={e => setFormData({...formData, size: e.target.value})} placeholder="e.g. w-24 h-24" />
                    </div>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-xl text-[10px] text-orange-800 font-bold leading-relaxed">
                    💡 Tip: Top aur Left values map par position set karti hain (0% se 100%). Check karein ki dot sahi jagah par hai ya nahi.
                  </div>
                </>
              )}

              {activeTab === 'services' && (
                <>
                  <div className="form-group">
                    <label>Unique Key (slug)</label>
                    <input className="form-control" value={formData.key || ''} onChange={e => setFormData({...formData, key: e.target.value})} placeholder="e.g. safety" required />
                  </div>
                  <div className="grid-2">
                    <div className="form-group">
                      <label>Bundle Name</label>
                      <input className="form-control" value={formData.name || ''} onChange={e => setFormData({...formData, name: e.target.value})} placeholder="e.g. Safety Shield" required />
                    </div>
                    <div className="form-group">
                      <label>Full Title</label>
                      <input className="form-control" value={formData.title || ''} onChange={e => setFormData({...formData, title: e.target.value})} placeholder="e.g. Investor’s Safety Shield" required />
                    </div>
                  </div>
                  <div className="grid-2">
                    <div className="form-group">
                      <label>Best For</label>
                      <input className="form-control" value={formData.bestFor || ''} onChange={e => setFormData({...formData, bestFor: e.target.value})} placeholder="e.g. High-Risk Deals" required />
                    </div>
                    <div className="form-group">
                      <label>Bhaiya Promise Tagline</label>
                      <input className="form-control" value={formData.promise || ''} onChange={e => setFormData({...formData, promise: e.target.value})} placeholder="e.g. Sleep easy while we check the papers." required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Target Audience</label>
                    <textarea className="form-control" value={formData.target || ''} onChange={e => setFormData({...formData, target: e.target.value})} placeholder="Describe who this is for..." required rows={3} />
                  </div>
                  <div className="form-group">
                    <label>Points & Details (One per line as Label: Description)</label>
                    <textarea className="form-control font-mono text-sm" value={formData.pointsText || ''} onChange={e => setFormData({...formData, pointsText: e.target.value})} placeholder="Property Due Diligence: Full 30-year chain of title search.&#10;Title Verification: Legal scrutiny of all bank/seller documents." required rows={5} />
                  </div>
                  <div className="grid-2">
                    <div className="form-group">
                      <label>Bonus Feature (Optional)</label>
                      <input className="form-control" value={formData.bonus || ''} onChange={e => setFormData({...formData, bonus: e.target.value})} placeholder="e.g. Free Auction Tender review" />
                    </div>
                    <div className="form-group">
                      <label>Benefit Statement (Optional)</label>
                      <input className="form-control" value={formData.benefit || ''} onChange={e => setFormData({...formData, benefit: e.target.value})} placeholder="e.g. 20% cheaper than individual booking" />
                    </div>
                  </div>
                </>
              )}

              {activeTab === 'auctions' && (
                <>
                  <div className="section-title">Basic Auction Details</div>
                  <div className="form-group">
                    <label>Auction Title</label>
                    <input className="form-control" value={formData.title || ''} onChange={e => setFormData({...formData, title: e.target.value})} placeholder="e.g. 3 BHK Apartment - Bank of Baroda Foreclosure" required />
                  </div>
                  <div className="grid-2">
                    <div className="form-group">
                      <label>City</label>
                      <input className="form-control" value={formData.city || ''} onChange={e => setFormData({...formData, city: e.target.value})} required />
                    </div>
                    <div className="form-group">
                      <label>Auction Type</label>
                      <select className="form-control" value={formData.type || 'Bank Auctions'} onChange={e => setFormData({...formData, type: e.target.value})} required>
                        <option value="Bank Auctions">Bank Auctions</option>
                        <option value="Foreclosures">Foreclosures</option>
                        <option value="Liquidation">Liquidation</option>
                        <option value="Private">Private</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid-3">
                    <div className="form-group">
                      <label>Base / Reserve Price</label>
                      <input className="form-control" value={formData.basePrice || ''} onChange={e => setFormData({...formData, basePrice: e.target.value})} placeholder="e.g. ₹82.5 L" required />
                    </div>
                    <div className="form-group">
                      <label>Current Bid</label>
                      <input className="form-control" value={formData.currentBid || ''} onChange={e => setFormData({...formData, currentBid: e.target.value})} placeholder="e.g. ₹83 L" />
                    </div>
                    <div className="form-group">
                      <label>End Time</label>
                      <input type="datetime-local" className="form-control" value={formData.endTime || ''} onChange={e => setFormData({...formData, endTime: e.target.value})} required />
                    </div>
                  </div>
                  <div className="grid-2">
                    <div className="form-group">
                      <label>Status</label>
                      <select className="form-control" value={formData.status || 'upcoming'} onChange={e => setFormData({...formData, status: e.target.value})} required>
                        <option value="upcoming">Upcoming</option>
                        <option value="active">Active / Live</option>
                        <option value="ended">Ended</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Image URL</label>
                      <input className="form-control" value={formData.image || ''} onChange={e => setFormData({...formData, image: e.target.value})} placeholder="Unsplash/CDN Image Link" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Description</label>
                    <textarea className="form-control" value={formData.description || ''} onChange={e => setFormData({...formData, description: e.target.value})} rows={3} required />
                  </div>

                  <div className="section-title">Bhaiya Foreclosure Matrix & Legal</div>
                  <div className="grid-3">
                    <div className="form-group">
                      <label>Market Value</label>
                      <input className="form-control" value={formData.marketValue || ''} onChange={e => setFormData({...formData, marketValue: e.target.value})} placeholder="e.g. ₹1.10 Cr" />
                    </div>
                    <div className="form-group">
                      <label>Reserve Price (Matrix)</label>
                      <input className="form-control" value={formData.reservePrice || ''} onChange={e => setFormData({...formData, reservePrice: e.target.value})} placeholder="e.g. ₹82.5 L" />
                    </div>
                    <div className="form-group">
                      <label>Potential Savings</label>
                      <input className="form-control" value={formData.potentialSavings || ''} onChange={e => setFormData({...formData, potentialSavings: e.target.value})} placeholder="e.g. ₹27.5 L (25%)" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Bhaiya Analysis</label>
                    <textarea className="form-control" value={formData.bhaiyaAnalysis || ''} onChange={e => setFormData({...formData, bhaiyaAnalysis: e.target.value})} rows={2} />
                  </div>
                  <div className="grid-2">
                    <div className="form-group">
                      <label>EMD (10%)</label>
                      <input className="form-control" value={formData.emd || ''} onChange={e => setFormData({...formData, emd: e.target.value})} placeholder="e.g. ₹8,25,000" />
                    </div>
                    <div className="form-group">
                      <label>Bid Increment</label>
                      <input className="form-control" value={formData.bidIncrement || ''} onChange={e => setFormData({...formData, bidIncrement: e.target.value})} placeholder="e.g. ₹50,000" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Payment Schedule (One instruction per line)</label>
                    <textarea className="form-control font-mono text-sm" value={formData.paymentSchedule || ''} onChange={e => setFormData({...formData, paymentSchedule: e.target.value})} placeholder="T+24 Hours: 25% of bid amount&#10;T+15 Days: Remaining 75% payment" rows={3} />
                  </div>
                  <div className="grid-3">
                    <div className="form-group">
                      <label>Possession Type</label>
                      <input className="form-control" value={formData.possessionType || ''} onChange={e => setFormData({...formData, possessionType: e.target.value})} />
                    </div>
                    <div className="form-group">
                      <label>Encumbrances</label>
                      <input className="form-control" value={formData.encumbrances || ''} onChange={e => setFormData({...formData, encumbrances: e.target.value})} />
                    </div>
                    <div className="form-group">
                      <label>Outstanding Dues</label>
                      <input className="form-control" value={formData.outstandingDues || ''} onChange={e => setFormData({...formData, outstandingDues: e.target.value})} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Documents Checklist (Comma separated list)</label>
                    <input className="form-control" value={formData.documents || ''} onChange={e => setFormData({...formData, documents: e.target.value})} placeholder="Tender Document, Sale Notice, Property Title Deed" />
                  </div>

                  <div className="section-title">Locality & Insights</div>
                  <div className="grid-2">
                    <div className="form-group">
                      <label>Locality Score</label>
                      <input className="form-control" value={formData.localityScore || ''} onChange={e => setFormData({...formData, localityScore: e.target.value})} placeholder="e.g. 4.2/5" />
                    </div>
                    <div className="form-group">
                      <label>Nearby Infrastructure</label>
                      <input className="form-control" value={formData.nearby || ''} onChange={e => setFormData({...formData, nearby: e.target.value})} placeholder="e.g. 200m from Metro Station | 1km from City Hospital." />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Heatmap Insight</label>
                    <input className="form-control" value={formData.heatmapInsight || ''} onChange={e => setFormData({...formData, heatmapInsight: e.target.value})} placeholder="e.g. Prices in this sector have grown 8% YoY." />
                  </div>
                </>
              )}

              {activeTab === 'visits' && (
                <>
                  <div className="section-title">Schedule Site Visit Status</div>
                  <div className="grid-2" style={{ background: '#f8fafc', padding: '20px', borderRadius: '16px', gap: '15px' }}>
                    <div>
                      <p style={{ margin: '0 0 5px 0', fontSize: '11px', color: '#64748b', fontWeight: 'bold', uppercase: 'true' }}>Client Name</p>
                      <p style={{ margin: 0, fontWeight: 'bold' }}>{formData.name}</p>
                    </div>
                    <div>
                      <p style={{ margin: '0 0 5px 0', fontSize: '11px', color: '#64748b', fontWeight: 'bold', uppercase: 'true' }}>Property Project</p>
                      <p style={{ margin: 0, fontWeight: 'bold' }}>{formData.property}</p>
                    </div>
                    <div>
                      <p style={{ margin: '0 0 5px 0', fontSize: '11px', color: '#64748b', fontWeight: 'bold', uppercase: 'true' }}>Scheduled Date & Time</p>
                      <p style={{ margin: 0, fontWeight: 'bold' }}>{formData.date} at {formData.time}</p>
                    </div>
                    <div>
                      <p style={{ margin: '0 0 5px 0', fontSize: '11px', color: '#64748b', fontWeight: 'bold', uppercase: 'true' }}>Phone / Email</p>
                      <p style={{ margin: 0, fontWeight: 'bold' }}>{formData.phone} / {formData.email}</p>
                    </div>
                  </div>

                  <div className="form-group mt-6">
                    <label>Appointment Status</label>
                    <select className="form-control" value={formData.status || 'pending'} onChange={e => setFormData({...formData, status: e.target.value})} required>
                      <option value="pending">⏳ Pending</option>
                      <option value="confirmed">🟢 Confirmed</option>
                      <option value="cancelled">🔴 Cancelled</option>
                    </select>
                  </div>
                </>
              )}
              {activeTab === 'partners' && (
                <>
                  <div className="section-title">Partner Application Details</div>
                  <div className="grid-2" style={{ background: '#f8fafc', padding: '20px', borderRadius: '16px', gap: '15px', marginBottom: '20px' }}>
                    <div>
                      <p style={{ margin: '0 0 5px 0', fontSize: '11px', color: '#64748b', fontWeight: 'bold' }}>PARTNER NAME</p>
                      <p style={{ margin: 0, fontWeight: 'bold' }}>{formData.name || 'N/A'}</p>
                    </div>
                    <div>
                      <p style={{ margin: '0 0 5px 0', fontSize: '11px', color: '#64748b', fontWeight: 'bold' }}>BUSINESS / AGENCY NAME</p>
                      <p style={{ margin: 0, fontWeight: 'bold' }}>{formData.businessName || 'N/A'}</p>
                    </div>
                    <div>
                      <p style={{ margin: '0 0 5px 0', fontSize: '11px', color: '#64748b', fontWeight: 'bold' }}>CONTACT PHONE</p>
                      <p style={{ margin: 0, fontWeight: 'bold' }}>{formData.phone || 'N/A'}</p>
                    </div>
                    <div>
                      <p style={{ margin: '0 0 5px 0', fontSize: '11px', color: '#64748b', fontWeight: 'bold' }}>EMAIL ADDRESS</p>
                      <p style={{ margin: 0, fontWeight: 'bold' }}>{formData.email || 'N/A'}</p>
                    </div>
                    <div>
                      <p style={{ margin: '0 0 5px 0', fontSize: '11px', color: '#64748b', fontWeight: 'bold' }}>CITY / LOCALITY</p>
                      <p style={{ margin: 0, fontWeight: 'bold' }}>{formData.city || 'N/A'}</p>
                    </div>
                    <div>
                      <p style={{ margin: '0 0 5px 0', fontSize: '11px', color: '#64748b', fontWeight: 'bold' }}>PARTNER TYPE</p>
                      <p style={{ margin: 0, fontWeight: 'bold', textTransform: 'uppercase', color: formData.type === 'expert' ? '#6b21a8' : '#c2410c' }}>{formData.type || 'agent'}</p>
                    </div>
                    <div>
                      <p style={{ margin: '0 0 5px 0', fontSize: '11px', color: '#64748b', fontWeight: 'bold' }}>RERA / LICENSE ID</p>
                      <p style={{ margin: 0, fontWeight: 'bold' }}>{formData.rera || formData.licenseNumber || 'None'}</p>
                    </div>
                    <div>
                      <p style={{ margin: '0 0 5px 0', fontSize: '11px', color: '#64748b', fontWeight: 'bold' }}>EXPERIENCE</p>
                      <p style={{ margin: 0, fontWeight: 'bold' }}>{formData.experience ? `${formData.experience} Years` : 'N/A'}</p>
                    </div>
                  </div>

                  <div className="grid-2">
                    <div className="form-group">
                      <label>Partner Type</label>
                      <select className="form-control" value={formData.type || 'agent'} onChange={e => setFormData({...formData, type: e.target.value})} required>
                        <option value="agent">Agent (Broker)</option>
                        <option value="expert">Expert (Consultant)</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Verification Status</label>
                      <select className="form-control" value={formData.status || 'pending'} onChange={e => setFormData({...formData, status: e.target.value})} required>
                        <option value="pending">⏳ Pending Review</option>
                        <option value="approved">🟢 Approved Partner</option>
                        <option value="rejected">🔴 Rejected</option>
                      </select>
                    </div>
                  </div>
                </>
              )}

              <div className="modal-footer">
                <button type="submit" className="btn btn-primary w-full flex items-center justify-center gap-2 py-4">
                  <Save size={20} /> Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style>{`
        :root {
          --primary: #df6a15;
          --secondary: #0f172a;
          --bg: #f8fafc;
          --text-main: #1e293b;
          --shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }
        .admin-layout { display: flex; background: var(--bg); min-height: 100vh; }
        .sidebar { width: 280px; background: white; height: 100vh; position: fixed; border-right: 1px solid #f1f5f9; padding: 2rem 1.5rem; }
        .sidebar-header { display: flex; align-items: center; gap: 1rem; margin-bottom: 3rem; }
        .nav-links { display: flex; flex-direction: column; gap: 0.5rem; }
        .nav-link { display: flex; align-items: center; gap: 1rem; width: 100%; padding: 1rem; border-radius: 12px; border: none; background: transparent; font-weight: 600; color: #64748b; transition: all 0.3s; text-align: left; cursor: pointer; }
        .nav-link.active { background: var(--primary); color: white; box-shadow: 0 10px 15px -3px rgba(223, 106, 21, 0.3); }
        .nav-link:hover:not(.active) { background: #f8fafc; color: var(--primary); }
        
        .main-content { flex: 1; margin-left: 280px; padding: 2rem 3rem; }
        .header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; background: white; padding: 1.5rem 2rem; border-radius: 20px; box-shadow: var(--shadow); }
        .card { background: white; border-radius: 24px; padding: 2rem; box-shadow: var(--shadow); border: 1px solid #f1f5f9; }
        
        .table { width: 100%; border-collapse: separate; border-spacing: 0 0.75rem; }
        .table th { text-align: left; padding: 1rem; color: #64748b; font-size: 0.875rem; font-weight: 600; }
        .table td { padding: 1.25rem 1rem; background: #fff; border-top: 1px solid #f1f5f9; border-bottom: 1px solid #f1f5f9; }
        .table tr td:first-child { border-left: 1px solid #f1f5f9; border-radius: 12px 0 0 12px; }
        .table tr td:last-child { border-right: 1px solid #f1f5f9; border-radius: 0 12px 12px 0; }
        
        .btn { padding: 0.5rem 1rem; border-radius: 10px; border: 1px solid #e2e8f0; background: white; cursor: pointer; transition: all 0.2s; font-weight: 600; }
        .btn-primary { background: var(--primary); color: white; border: none; }
        .btn-primary:hover { opacity: 0.9; transform: translateY(-1px); }
        
        .section-title { font-size: 1rem; font-weight: 800; color: var(--secondary); border-left: 4px solid var(--primary); padding-left: 1rem; margin: 1.5rem 0 1rem; }
        .form-group { display: flex; flex-direction: column; gap: 0.5rem; }
        .form-group label { font-size: 0.875rem; font-weight: 700; color: #64748b; }
        .form-control { padding: 0.75rem 1rem; border: 1px solid #e2e8f0; border-radius: 12px; font-size: 1rem; transition: all 0.2s; }
        .form-control:focus { outline: none; border-color: var(--primary); }
        
        .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
        .grid-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1.5rem; }
        
        .checkbox-label { display: flex; align-items: center; gap: 0.5rem; font-weight: 700; cursor: pointer; font-size: 0.875rem; }
        
        .modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.5); backdrop-filter: blur(4px); display: flex; align-items: center; justify-content: center; z-index: 1000; padding: 2rem; }
        .modal-content { background: white; border-radius: 24px; width: 100%; max-width: 800px; max-height: 90vh; overflow-y: auto; }
        .modal-header { padding: 1.5rem 2rem; border-bottom: 1px solid #f1f5f9; display: flex; justify-content: space-between; align-items: center; }
        .modal-body { padding: 2rem; }
        .modal-footer { padding: 1.5rem 2rem; border-top: 1px solid #f1f5f9; }
        
        .animate-in { animation: slideIn 0.3s ease-out; }
        @keyframes slideIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        
        .loading-spinner { display: flex; justify-content: center; padding: 4rem; font-weight: bold; color: var(--primary); }
      `}</style>
    </div>
  );
};

export default AdminPanel;
