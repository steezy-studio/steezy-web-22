import { useRouter } from "next/router";
import { useEffect } from "react";

export const GTM_ID = "GTM-NC4RN886";

declare global {
  interface Window {
    dataLayer: Record<string, any>[];
  }
}

export function useGTM() {
  const { asPath } = useRouter();

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "pageview", page: asPath });
  }, [asPath]);
}
