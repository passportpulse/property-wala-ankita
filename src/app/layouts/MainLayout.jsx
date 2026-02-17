import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AppPromoBar from "../../components/AppPromoBar";
import { useState } from "react";

export default function MainLayout() {
  const [promoVisible, setPromoVisible] = useState(true);
  return (
    <>
      {/* Mobile App Promo */}
      <AppPromoBar show={promoVisible} onClose={() => setPromoVisible(false)} />
      <Navbar promoVisible={promoVisible} />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
