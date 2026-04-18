import React from "react";
import DashboardLayout from "./DashboardLayout";
import { 
  ShieldCheck, 
  Briefcase, 
  MapPin, 
  Clock, 
  ChevronRight, 
  Zap,
  Star,
  Scale,
  FileText,
  UserCheck,
  TrendingUp,
  AlertCircle,
  Settings,
  CreditCard,
  User,
  MoreVertical,
  CheckCircle2,
  Filter,
  Search,
  Download,
  Calendar,
  DollarSign,
  PieChart,
  ArrowRight
} from "lucide-react";

export default function PartnerDashboard({ subPath }) {
  if (subPath === "requests") return <RequestsPage />;
  if (subPath === "verifications") return <VerificationsPage />;
  if (subPath === "earnings") return <EarningsPage />;
  if (subPath === "settings") return <ExpertSettingsPage />;

  return (
    <DashboardLayout role="expert" userName="Adv. Subhash Mondal">
      {/* Expert Profile Header */}
      <div className="relative bg-slate-900 rounded-[3rem] p-10 lg:p-14 mb-8 overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center gap-12 group">
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-dark-orange/10 rounded-full blur-[120px] -mr-40 -mt-20 group-hover:bg-dark-orange/15 transition-all duration-1000"></div>
         
         <div className="relative z-10 w-full lg:w-1/3">
            <div className="bg-white/5 backdrop-blur-3xl rounded-[2.5rem] p-8 border border-white/10 shadow-inner flex flex-col items-center text-center">
               <div className="relative mb-6">
                  <div className="w-24 h-24 rounded-[2rem] bg-orange-100 flex items-center justify-center text-dark-orange font-black text-3xl shadow-xl shadow-orange-500/20">
                     SM
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-2xl bg-dark-orange text-white flex items-center justify-center border-4 border-slate-900 shadow-lg">
                     <ShieldCheck size={20} />
                  </div>
               </div>
               <h2 className="text-xl font-black text-white uppercase tracking-tight mb-1">Adv. Subhash Mondal</h2>
               <p className="text-[10px] font-black uppercase text-dark-orange tracking-[0.3em] mb-4">Legal Expert • Tier 1</p>
               <div className="flex items-center gap-4 py-3 px-6 rounded-2xl bg-white/5 border border-white/5">
                  <div className="text-center">
                     <p className="text-lg font-black text-white leading-none">4.9</p>
                     <p className="text-[8px] font-black uppercase text-slate-500 tracking-widest mt-1">Rating</p>
                  </div>
                  <div className="w-px h-8 bg-white/10"></div>
                  <div className="text-center">
                     <p className="text-lg font-black text-white leading-none">124</p>
                     <p className="text-[8px] font-black uppercase text-slate-500 tracking-widest mt-1">Cases</p>
                  </div>
               </div>
            </div>
         </div>

         <div className="relative z-10 w-full lg:w-2/3">
            <h1 className="text-3xl lg:text-5xl font-black text-white uppercase tracking-tight mb-6">Expert <br className="hidden lg:block"/><span className="text-dark-orange">Command Center</span></h1>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
               <DocMetric label="Legal Audit" value="28" icon={<Scale className="text-dark-orange" />} />
               <DocMetric label="Title Checks" value="45" icon={<FileText className="text-orange-400" />} />
               <DocMetric label="KYC Verif" value="312" icon={<UserCheck className="text-dark-orange" />} />
            </div>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
         <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-xl">
               <div className="flex items-center justify-between mb-10">
                  <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">Assignment Queue</h3>
                  <span className="text-[10px] bg-orange-100 text-dark-orange px-4 py-1.5 rounded-full font-black uppercase tracking-widest">3 Priority Requests</span>
               </div>
               <div className="space-y-4">
                  <AssignmentRow name="Agreement Review" client="S.K. Builders" price="₹4,500" time="2h remaining" primary />
                  <AssignmentRow name="Land Title Search" client="Joydeep Roy" price="₹12,000" time="1d remaining" />
                  <AssignmentRow name="Valuation Audit" client="ICICI Bank" price="₹8,200" time="3h remaining" />
               </div>
            </div>
         </div>
         <div className="lg:col-span-1 space-y-8">
            <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white flex flex-col justify-between min-h-[400px]">
               <div>
                  <h3 className="text-lg font-black uppercase tracking-widest text-orange-400 mb-8">Performance Tips</h3>
                  <p className="text-slate-400 text-sm font-medium leading-relaxed mb-10">You are currently in the <b>Top 5%</b> of legal experts in Durgapur. Maintain your 24h response time to unlock <b>Platinum Inquiries</b>.</p>
                  <div className="p-6 rounded-[2rem] bg-white/5 border border-white/5 border-dashed space-y-4">
                     <TipItem text="Upload Bar Council ID Update" />
                     <TipItem text="Set Out-of-Office Dates" />
                  </div>
               </div>
               <button className="w-full py-4 rounded-2xl bg-dark-orange text-white text-[11px] font-black uppercase tracking-widest mt-8 shadow-xl shadow-orange-500/20">Go Platinum</button>
            </div>
         </div>
      </div>
    </DashboardLayout>
  );
}

// --- SUB PAGES ---

function RequestsPage() {
  return (
    <DashboardLayout role="expert" userName="Adv. Subhash Mondal">
       <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
             <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase font-poppins">Assignment <span className="text-dark-orange">Inbox</span></h2>
             <p className="text-slate-500 font-medium text-sm mt-2">Manage legal reviews, site audits, and expert consultancy requests.</p>
          </div>
          <div className="flex gap-4">
             <div className="h-14 w-64 bg-white border border-slate-100 rounded-2xl shadow-sm flex items-center px-6">
                <Search size={18} className="text-slate-400" />
                <input type="text" placeholder="Search requests..." className="bg-transparent border-none outline-none ml-4 text-sm font-bold w-full" />
             </div>
          </div>
       </div>

       <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl overflow-hidden">
          <div className="p-8 border-b border-slate-50 flex items-center justify-between bg-slate-50/30">
             <div className="flex gap-8">
                <TabBtn label="Active (3)" active />
                <TabBtn label="Review Needed (1)" />
                <TabBtn label="Archived" />
             </div>
             <Filter size={18} className="text-slate-400 cursor-pointer" />
          </div>
          <div className="p-4 lg:p-10 space-y-4">
             <DetailedRequestRow title="Property Title Clearance" client="HDFC Realty" type="Legal" deadline="24 Oct, 2024" fee="₹18,500" status="Priority" />
             <DetailedRequestRow title="Floor Plan Verification" client="Green Hills Dev" type="Architecture" deadline="26 Oct, 2024" fee="₹7,200" status="Standard" />
             <DetailedRequestRow title="RERA Compliance Audit" client="Pioneer Homes" type="Audit" deadline="30 Oct, 2024" fee="₹22,000" status="Complex" />
          </div>
       </div>
    </DashboardLayout>
  );
}

function VerificationsPage() {
  return (
    <DashboardLayout role="expert" userName="Adv. Subhash Mondal">
       <div className="mb-12">
          <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase font-poppins">Compliance <span className="text-dark-orange">Center</span></h2>
          <p className="text-slate-500 font-medium text-sm mt-2 ml-1">Assuring 100% data accuracy for the Bhaiya Marketplace.</p>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatMiniCard label="Pending Audits" value="12" icon={<Clock className="text-orange-500" />} />
          <StatMiniCard label="Pass Rate" value="94%" icon={<CheckCircle2 className="text-green-500" />} />
          <StatMiniCard label="Rejections" value="08" icon={<AlertCircle className="text-red-500" />} />
          <StatMiniCard label="Trusted Rank" value="Tier 1" icon={<Star className="text-dark-orange" />} />
       </div>

       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <VerificationTask title="Skyline Grande Phase II" docs={8} progress={75} status="Verifying" />
          <VerificationTask title="Regency Plaza Apartments" docs={12} progress={100} status="Completed" />
          <VerificationTask title="The Park Avenue" docs={4} progress={20} status="Draft" />
          <VerificationTask title="Industrial Hub X" docs={15} progress={85} status="Verifying" />
       </div>
    </DashboardLayout>
  );
}

function EarningsPage() {
  return (
    <DashboardLayout role="expert" userName="Adv. Subhash Mondal">
       <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 space-y-8">
             <div className="bg-slate-900 rounded-[3rem] p-10 text-white h-full relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-64 h-64 bg-dark-orange/20 rounded-full blur-[80px] -mr-32 -mt-32"></div>
                <div>
                   <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-400 mb-8">Expert Ledger</h3>
                   <p className="text-[11px] font-black uppercase text-slate-500 tracking-widest mb-2">Available for Withdrawal</p>
                   <h4 className="text-5xl font-black mb-12 tracking-tighter">₹2,45,800</h4>
                   <div className="space-y-4">
                      <LedgerMetric label="Total Consultations" value="124" />
                      <LedgerMetric label="Monthly Growth" value="+15.2%" />
                   </div>
                </div>
                <button className="w-full py-5 rounded-2xl bg-white text-slate-900 text-[11px] font-black uppercase tracking-widest shadow-xl ring-8 ring-white/5 active:scale-95 transition-all">Withdraw Fees</button>
             </div>
          </div>
          <div className="lg:col-span-8 bg-white rounded-[3rem] p-10 border border-slate-100 shadow-xl overflow-hidden flex flex-col">
             <div className="flex items-center justify-between mb-10">
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">Financial History</h3>
                <Download size={18} className="text-slate-400 cursor-pointer" />
             </div>
             <div className="flex-1 space-y-6">
                <TransactionRow title="Verification: Skyline Grande" date="Oct 20, 2024" amount="₹4,500" status="Settled" />
                <TransactionRow title="Consultation: HDFC Realty" date="Oct 18, 2024" amount="₹12,400" status="Settled" />
                <TransactionRow title="Audit Service: Regency Plaza" date="Oct 15, 2024" amount="₹2,200" status="Settled" />
                <TransactionRow title="Retainer: Pioneer Homes" date="Oct 12, 2024" amount="₹5,000" status="Pending" />
             </div>
          </div>
       </div>
    </DashboardLayout>
  );
}

function ExpertSettingsPage() {
  return (
    <DashboardLayout role="expert" userName="Adv. Subhash Mondal">
       <div className="max-w-4xl">
          <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter mb-4 font-poppins">Expert <span className="text-dark-orange">Console</span></h2>
          <p className="text-slate-500 font-medium mb-12">Update your bar credentials, management fees, and professional visibility.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <SettingsCard title="Identity & Credentials" desc="Manage Government IDs, Bar Council #, and Certifications." icon={<ShieldCheck size={24} />} />
             <SettingsCard title="Financial Settings" desc="Bank account for payouts and GST details." icon={<CreditCard size={24} />} />
             <SettingsCard title="Workload Manager" desc="Set your expert availability and TAT goals." icon={<Zap size={24} />} />
             <SettingsCard title="Bhaiya Profile" desc="Personal bio, professional photo, and area of expertise." icon={<User size={24} />} />
          </div>
       </div>
    </DashboardLayout>
  );
}

// --- HELPERS ---

function DocMetric({ label, value, icon }) {
  return (
    <div className="p-6 rounded-[2rem] bg-white/5 border border-white/5 group-hover:bg-white/10 transition-all">
       <div className="mb-4">{icon}</div>
       <p className="text-[9px] font-black uppercase text-slate-500 tracking-widest mb-1">{label}</p>
       <h4 className="text-2xl font-black text-white">{value}</h4>
    </div>
  );
}

function AssignmentRow({ name, client, price, time, primary }) {
  return (
    <div className="flex items-center justify-between p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-dark-orange transition-all group cursor-pointer">
       <div className="flex items-center gap-4">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${primary ? 'bg-dark-orange text-white' : 'bg-white shadow-sm text-slate-400'}`}>
             <Briefcase size={20} />
          </div>
          <div>
             <h4 className="font-black text-slate-800 text-sm uppercase">{name}</h4>
             <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{client}</p>
          </div>
       </div>
       <div className="text-right">
          <h4 className="font-black text-slate-900 text-sm">{price}</h4>
          <p className="text-[9px] font-black uppercase text-dark-orange tracking-widest flex items-center justify-end gap-1"><Clock size={10} /> {time}</p>
       </div>
    </div>
  );
}

function DetailedRequestRow({ title, client, type, deadline, fee, status }) {
  return (
    <div className="flex items-center justify-between p-7 rounded-3xl bg-white border border-slate-100 hover:border-dark-orange shadow-sm hover:shadow-xl hover:shadow-orange-500/10 transition-all cursor-pointer group">
       <div className="flex items-center gap-6">
          <div className="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center text-white group-hover:bg-dark-orange transition-colors">
             <FileText size={24} />
          </div>
          <div>
             <h4 className="text-base font-black text-slate-900 uppercase tracking-tight mb-1">{title}</h4>
             <div className="flex items-center gap-4 text-[9px] font-black uppercase tracking-widest text-slate-400">
                <span className="flex items-center gap-1"><User size={10} /> {client}</span>
                <span className="w-1 h-1 bg-slate-200 rounded-full"></span>
                <span>{type}</span>
             </div>
          </div>
       </div>
       <div className="flex items-center gap-12">
          <div className="text-right hidden sm:block">
             <p className="text-[9px] font-black text-slate-300 uppercase leading-none mb-2">Expert Fee</p>
             <p className="text-base font-black text-slate-900">{fee}</p>
          </div>
          <div className="text-right">
             <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-dark-orange text-white text-[10px] font-black uppercase tracking-widest active:scale-95 transition-all">Review Case</button>
             <p className="text-[9px] font-bold text-slate-400 mt-2 flex items-center justify-end gap-1">Due {deadline}</p>
          </div>
       </div>
    </div>
  );
}

function VerificationTask({ title, docs, progress, status }) {
  return (
    <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-lg hover:border-dark-orange transition-all group cursor-pointer">
       <div className="flex items-center justify-between mb-8">
          <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center text-white group-hover:bg-dark-orange transition-colors">
             <MapPin size={24} />
          </div>
          <span className={`px-4 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest ${status === 'Completed' ? 'bg-green-100 text-green-600' : 'bg-orange-100 text-dark-orange'}`}>{status}</span>
       </div>
       <h4 className="text-lg font-black text-slate-900 uppercase tracking-tight mb-2">{title}</h4>
       <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-8">{docs} Core Documents Submitted</p>
       <div className="space-y-2">
          <div className="flex justify-between text-[9px] font-black uppercase text-slate-400 tracking-widest">
             <span>Audit Progress</span>
             <span>{progress}%</span>
          </div>
          <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
             <div className="h-full bg-dark-orange" style={{ width: `${progress}%` }}></div>
          </div>
       </div>
    </div>
  );
}

function SettingsCard({ title, desc, icon }) {
  return (
    <div className="p-8 rounded-[2.5rem] bg-white border border-slate-100 hover:border-dark-orange transition-all cursor-pointer group shadow-sm hover:shadow-xl hover:shadow-orange-500/5">
       <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 mb-6 group-hover:bg-dark-orange group-hover:text-white transition-all">
          {icon}
       </div>
       <h4 className="text-lg font-black text-slate-900 uppercase tracking-tight mb-2">{title}</h4>
       <p className="text-sm font-medium text-slate-500 leading-relaxed mb-8">{desc}</p>
       <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-dark-orange group-hover:gap-3 transition-all duration-300">
          Edit Configuration <ArrowRight size={14} />
       </div>
    </div>
  );
}

function LedgerMetric({ label, value }) {
  return (
    <div className="flex justify-between items-center py-4 border-b border-white/5">
       <p className="text-xs font-bold text-slate-500 uppercase tracking-tight">{label}</p>
       <p className="text-sm font-black text-white">{value}</p>
    </div>
  );
}

function TransactionRow({ title, date, amount, status }) {
  return (
    <div className="flex items-center justify-between py-2 group cursor-pointer">
       <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-dark-orange group-hover:text-white transition-all shadow-inner">
             <DollarSign size={20} />
          </div>
          <div>
             <p className="text-sm font-black text-slate-800 uppercase leading-none mb-1">{title}</p>
             <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{date}</p>
          </div>
       </div>
       <div className="text-right">
          <p className="text-sm font-black text-slate-900">{amount}</p>
          <p className={`text-[10px] font-black uppercase tracking-widest mt-1 ${status === 'Settled' ? 'text-green-500' : 'text-dark-orange'}`}>{status}</p>
       </div>
    </div>
  );
}

function StatMiniCard({ label, value, icon }) {
  return (
    <div className="bg-white p-6 rounded-[2rem] border border-slate-100 flex items-center justify-between shadow-sm">
       <div>
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{label}</p>
          <h4 className="text-2xl font-black text-slate-900 tracking-tighter">{value}</h4>
       </div>
       <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center">
          {icon}
       </div>
    </div>
  );
}

function TabBtn({ label, active }) {
  return (
    <button className={`text-[11px] font-black uppercase tracking-widest transition-all border-b-2 pb-1 ${
       active ? 'text-dark-orange border-dark-orange' : 'text-slate-400 border-transparent hover:text-slate-600'
    }`}>{label}</button>
  );
}

function TipItem({ text }) {
  return (
    <div className="flex items-center gap-3 group cursor-pointer">
       <div className="w-2 h-2 rounded-full bg-dark-orange"></div>
       <p className="text-xs font-medium text-slate-400 group-hover:text-white transition-colors">{text}</p>
    </div>
  );
}
