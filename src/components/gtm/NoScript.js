import { useEffect, useState } from "react";

const NoScript = () => {
  const [gtmId, setGtmId] = useState(null);

  useEffect(() => {
    setGtmId(process.env.NEXT_PUBLIC_GTM);
  }, []);

  return (
    gtmId && (
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
    )
  );
};

export default NoScript;
