import { useRouter } from "next/router";
import { useEffect } from "react";
import ReactGA from "react-ga";

function initGA() {
  ReactGA.initialize("UA-155086355-1");
}

function logPageView() {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
}

declare global {
  interface Window {
    GA_INIT: boolean;
  }
}

// export function logEvent({ category, action }) {
//   ReactGA.event({
//     category,
//     action,
//   });
// }

export function useGA() {
  const { asPath } = useRouter();

  useEffect(() => {
    if (!window.GA_INIT) {
      initGA();
      window.GA_INIT = true;
    }
    logPageView();
  }, [asPath]);
}
