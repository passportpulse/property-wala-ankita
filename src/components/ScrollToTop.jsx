import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Logic to snap to the top of the window
    window.scrollTo(0, 0);
  }, [pathname]); // Fires every time the URL path changes

  return null;
}