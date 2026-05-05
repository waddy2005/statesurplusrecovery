import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation, HashRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DeadlineBanner from "./components/DeadlineBanner";
import Home from "./pages/Home";
import About from "./pages/About";
import HowItWorks from "./pages/HowItWorks";
import Services from "./pages/Services";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import VerifyUs from "./pages/VerifyUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import NotFound from "./pages/NotFound";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);
  return null;
}

const BANNER_KEY = "ssr-deadline-banner-dismissed";

function readBannerInitiallyVisible(): boolean {
  if (typeof window === "undefined") return true;
  try {
    return window.sessionStorage.getItem(BANNER_KEY) !== "1";
  } catch {
    return true;
  }
}

function Layout() {
  const [bannerVisible, setBannerVisible] = useState<boolean>(readBannerInitiallyVisible);

  const handleBannerVisibility = useCallback((v: boolean) => {
    setBannerVisible(v);
  }, []);

  useLayoutEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--banner-h", bannerVisible ? "44px" : "0px");
    return () => {
      root.style.setProperty("--banner-h", "0px");
    };
  }, [bannerVisible]);

  return (
    <>
      <ScrollToTop />
      <DeadlineBanner onVisibilityChange={handleBannerVisibility} />
      <Navbar bannerVisible={bannerVisible} />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/services" element={<Services />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/verify-us" element={<VerifyUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  // HashRouter for static-file (file://) opens; BrowserRouter for normal hosting.
  const Router: any =
    typeof window !== "undefined" && window.location.protocol === "file:"
      ? HashRouter
      : BrowserRouter;
  return (
    <Router>
      <Layout />
    </Router>
  );
}
