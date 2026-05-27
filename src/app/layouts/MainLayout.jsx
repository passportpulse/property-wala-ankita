import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AppPromoBar from "../../components/AppPromoBar";
import { useState, useEffect } from "react";
import MobileStickyNav from "../../components/MobileStickyNav";
import BannedScreen from "../../pages/login/BannedScreen";

export default function MainLayout() {
  const [promoVisible, setPromoVisible] = useState(true);
  const [isBanned, setIsBanned] = useState(false);

  useEffect(() => {
    // Check if user is banned (simulation)
    const banned = localStorage.getItem("isBanned") === "true";
    setIsBanned(banned);
  }, []);

  if (isBanned) {
    return <BannedScreen />;
  }

  return (
    <>
      {/* Mobile App Promo */}
      <AppPromoBar show={promoVisible} onClose={() => setPromoVisible(false)} />
      <Navbar promoVisible={promoVisible} />
      <main className="min-h-screen pb-24 lg:pb-0">
        <Outlet />
      </main>
      <Footer />
      <MobileStickyNav />
    </>
  );
}
