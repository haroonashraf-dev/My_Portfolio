import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const root = document.getElementById("root");
    if (root) {
      root.classList.remove("route-enter");
      // Force reflow so animation restarts on every route change.
      void root.offsetWidth;
      root.classList.add("route-enter");
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
