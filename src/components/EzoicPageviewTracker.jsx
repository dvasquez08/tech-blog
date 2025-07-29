import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function EzoicPageviewTracker() {
  const location = useLocation();

  useEffect(() => {
    if (
      window.ezstandalone &&
      typeof window.ezstandalone.cmd.push === "function"
    ) {
      window.ezstandalone.cmd.push(function () {
        // Calling showAds() without an ID refreshes all placeholders on the page
        window.ezstandalone.showAds();
      });
    }
  }, [location]); // Re-run this effect when the location (URL) changes

  return null; // This component doesn't render anything
}

export default EzoicPageviewTracker;
