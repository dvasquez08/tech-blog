import { useEffect } from "react";

function EzoicAd({ placeholderId }) {
  useEffect(() => {
    if (
      window.ezstandalone &&
      typeof window.ezstandalone.cmd.push === "function"
    ) {
      window.ezstandalone.cmd.push(function () {
        window.ezstandalone.showAds(placeholderId);
      });
    }
  }, [placeholderId]);

  return <div id={`ezoic-pub-ad-placeholder-${placeholderId}`}></div>;
}

export default EzoicAd;
