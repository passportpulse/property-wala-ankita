import React, { useState } from 'react';

interface DeveloperPlan {
  name: string;
  activeProjects: number;
  leadQuality: string;
  microsites: boolean;
  videoWalkthroughs: boolean;
  dedicatedManager: boolean;
  price: string;
}

const DeveloperSignUpPage: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    reraNumber: '',
    email: '',
    mobile: '',
    city: '',
    terms: false,
  });

  const [verification, setVerification] = useState({
    emailVerified: false,
    mobileVerified: false,
  });

  const cities = [
    'Delhi NCR',
    'Mumbai',
    'Bangalore',
    'Hyderabad',
    'Chennai',
    'Kolkata',
    'Pune',
    'Ahmedabad',
  ];

  const developerPlans: DeveloperPlan[] = [
    {
      name: 'Emerging Builder',
      activeProjects: 2,
      leadQuality: 'Standard',
      microsites: false,
      videoWalkthroughs: false,
      dedicatedManager: false,
      price: 'Free',
    },
    {
      name: 'City Giant',
      activeProjects: 10,
      leadQuality: 'Verified',
      microsites: true,
      videoWalkthroughs: true,
      dedicatedManager: false,
      price: '₹9,999/month',
    },
    {
      name: 'National Leader',
      activeProjects: Infinity,
      leadQuality: 'Priority Verified',
      microsites: true,
      videoWalkthroughs: true,
      dedicatedManager: true,
      price: 'Custom',
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleVerifyEmail = () => {
    setVerification((prev) => ({ ...prev, emailVerified: true }));
    alert('OTP sent to your email!');
  };

  const handleVerifyMobile = () => {
    setVerification((prev) => ({ ...prev, mobileVerified: true }));
    alert('Verification code sent via WhatsApp!');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.reraNumber) {
      alert('RERA Registration Number is mandatory!');
      return;
    }
    if (!verification.emailVerified || !verification.mobileVerified) {
      alert('Please complete verification for both email and mobile!');
      return;
    }
    alert('Developer account created successfully!');
  };

  const handleRequestDemo = () => {
    alert('Demo request submitted! A Bhaiya Expert will contact you soon.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 py-12">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Build Your Legacy with Property Wala Bhaiya
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          From Foundation to Finish—Reach Thousands of Verified Buyers Every Day.
        </p>
      </header>

      <main className="max-w-4xl mx-auto px-6">
        <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Quick Entry - Create Your Developer Account
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Full Name / Representative Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., Vikram Singh"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., Skyline Developers Pvt Ltd"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                RERA Registration Number *
              </label>
              <input
                type="text"
                name="reraNumber"
                value={formData.reraNumber}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter RERA number"
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Work Email
                </label>
                <div className="flex gap-2">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="work@company.com"
                    required
                  />
                  <button
                    type="button"
                    onClick={handleVerifyEmail}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Verify
                  </button>
                </div>
                {verification.emailVerified && (
                  <span className="text-green-600 text-sm mt-1">✓ Verified</span>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Primary Mobile Number
                </label>
                <div className="flex gap-2">
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="+91 9876543210"
                    required
                  />
                  <button
                    type="button"
                    onClick={handleVerifyMobile}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Verify
                  </button>
                </div>
                {verification.mobileVerified && (
                  <span className="text-green-600 text-sm mt-1">✓ Verified</span>
                )}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                City of Operation
              </label>
              <select
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select a city</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white text-xl font-bold rounded-lg hover:bg-blue-700 transition-colors"
            >
              CREATE DEVELOPER ACCOUNT
            </button>
          </form>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
            Developer Suite Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="text-4xl mb-3">📦</div>
              <h3 className="font-bold mb-2">Bulk Listing Manager</h3>
              <p className="text-sm text-gray-600">
                Upload entire townships or multiple phases in one go via CSV or API.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="text-4xl mb-3">🌐</div>
              <h3 className="font-bold mb-2">Project Microsites</h3>
              <p className="text-sm text-gray-600">
                Every project gets a dedicated, SEO-optimized page on our portal.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="text-4xl mb-3">🗺️</div>
              <h3 className="font-bold mb-2">Virtual Site Visits</h3>
              <p className="text-sm text-gray-600">
                Integrated support for Matterport 3D tours and drone footage.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="text-4xl mb-3">📊</div>
              <h3 className="font-bold mb-2">Lead CRM</h3>
              <p className="text-sm text-gray-600">
                Dedicated dashboard to track every site visit request and inquiry.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="text-4xl mb-3">📈</div>
              <h3 className="font-bold mb-2">Heat Map Analytics</h3>
              <p className="text-sm text-gray-600">
                Access the &quot;Bhaiya Heat Map&quot; to see where demand is highest.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Developer Verification
          </h2>
          <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-400">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">✅</span>
              <h3 className="text-2xl font-bold text-blue-800">
                Bhaiya Approved Builder Badge
              </h3>
            </div>
            <p className="text-gray-700 mb-4">
              To earn this badge, developers must upload the following documents:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>RERA Certificate for each project</li>
              <li>Possession Track Record (history of previous projects)</li>
              <li>Sanctioned Building Plans</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
            Developer Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-gray-200">
              <h3 className="text-2xl font-bold mb-2 text-center">Emerging Builder</h3>
              <p className="text-center text-gray-600 mb-6">{/* pricing */}</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Up to 2 Active Projects
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Standard Lead Quality
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-400">✗</span> Microsites
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-400">✗</span> Video Walkthroughs
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-400">✗</span> Dedicated Manager
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-blue-500">
              <h3 className="text-2xl font-bold mb-2 text-center">City Giant</h3>
              <p className="text-center text-gray-600 mb-6">{/* pricing */}</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Up to 10 Active Projects
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Verified Lead Quality
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Microsites
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-400">✗</span> Video Walkthroughs
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-400">✗</span> Dedicated Manager
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-green-500">
              <h3 className="text-2xl font-bold mb-2 text-center">National Leader</h3>
              <p className="text-center text-gray-600 mb-6">{/* pricing */}</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Unlimited Active Projects
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Priority Verified Lead Quality
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Microsites
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Video Walkthroughs
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Dedicated Manager
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Developer Promise</h2>
          <form onSubmit={handleSubmit} className="flex items-start gap-4">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              checked={formData.terms}
              onChange={handleInputChange}
              className="mt-1 w-5 h-5 text-blue-600 rounded"
              required
            />
            <div>
              <label htmlFor="terms" className="text-gray-700">
                By signing up, I agree to provide only RERA-approved project details and to update the &quot;Available Units&quot; in real-time. I understand that misrepresentation of project status will lead to the suspension of my corporate account.
              </label>
              <br />
              <button
                type="submit"
                className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Submit Application
              </button>
            </div>
          </form>
        </section>

        <div className="text-center">
          <button
            onClick={handleRequestDemo}
            className="px-8 py-3 bg-blue-600 text-white text-xl font-bold rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
          >
            Request a Demo
          </button>
          <p className="text-gray-500 mt-2 text-sm">
            Big developers often want a Bhaiya Expert to walk them through bulk-upload and lead-tracking features before committing to a high-value plan.
          </p>
        </div>
      </main>
    </div>
  );
};

export default DeveloperSignUpPage;