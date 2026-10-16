import { Routes, Route, useLocation, Link, Navigate } from "react-router-dom";
import { useLayoutEffect } from "react";
import { Helmet } from "react-helmet-async";
import { getProductSlug, products } from "./data/products";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import PageTransition from "./Components/PageTransition";
import Slider from "./Components/Slider";
import Products from "./Components/Products";
import Office from "./Components/Office";
import ProductDetails from "./Components/ProductDetails";
import Contact from "./Components/Contact";
import Aboutus from "./Components/Aboutus";
import TrustBar from "./Components/TrustBar";
import PremiumExperience from "./Components/PremiumExperience";
import FloatingContact from "./Components/FloatingContact";
import PrivacyTerms from "./pages/PrivacyTerms";

function Home() {
  return (
    <PageTransition>
      <Slider />
      <TrustBar />
      <Products />
      <PremiumExperience />
      <Aboutus />
    </PageTransition>
  );
}

function App() {
  const location = useLocation();
  useLayoutEffect(() => {
    window.history.scrollRestoration = "manual";
    const root = window.document.documentElement;
    const previousScrollBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    const restoreScrollBehavior = window.requestAnimationFrame(() => {
      root.style.scrollBehavior = previousScrollBehavior;
    });
    return () => window.cancelAnimationFrame(restoreScrollBehavior);
  }, [location.pathname]);
  const pathname = location.pathname.replace(/\/+$/, "") || "/";
  const legalDocument = {
    "/privacy-policy": "privacy",
    "/terms-and-conditions": "terms",
    "/refund-policy": "refund",
  }[pathname];
  const productRoute = pathname.match(/^\/product\/([^/]+)$/)?.[1];
  const product = products.find(({ id, name }) =>
    getProductSlug(name) === productRoute || String(id) === productRoute
  );
  const metadata = {
    "/": {
      title: "Kangen Water Machines India & Jaipur | Enagic Bharat",
      description: "Explore Kangen Water machines in India. Compare Enagic water ionizer models and prices, request a quote and book a personal demo with our Jaipur team.",
    },
    "/our-story": {
      title: "Our Story | Enagic Bharat",
      description: "Meet Enagic Bharat in Jaipur, Rajasthan. Get personal guidance on Kangen Water machines, model comparisons and demonstrations for your home.",
    },
    "/contact": {
      title: "Kangen Water Demo & Price Enquiry | Enagic Bharat",
      description: "Book a Kangen Water demo in Jaipur. Ask Enagic Bharat about Leveluk K8 prices, compare water ionizers and request a personalised product quote.",
    },
    "/products": {
      title: "Kangen Water Machine Prices in India | Enagic Bharat",
      description: "Compare Kangen Water machine prices in India for Leveluk K8, SD501DX, Super 501 and Jr IV. View specifications and request a quote from Enagic Bharat.",
    },
    "/office": {
      title: "Kangen Water Demo in Jaipur | Enagic Bharat Office",
      description: "Visit Enagic Bharat in Jaipur, Rajasthan, for Kangen Water machine guidance. Contact our team to arrange a demo and discuss models and pricing.",
    },
    "/privacy-policy": {
      title: "Privacy Policy | Enagic Bharat",
      description: "Learn how Enagic Bharat handles personal information submitted through our website, product enquiries and demo booking forms.",
    },
    "/terms-and-conditions": {
      title: "Terms & Conditions | Enagic Bharat",
      description: "Read the terms for using the Enagic Bharat website, product information, enquiries and demo bookings.",
    },
    "/refund-policy": {
      title: "Refund Policy | Enagic Bharat",
      description: "Read Enagic Bharat's refund request process, eligibility guidance and contact details for product orders.",
    },
  }[pathname] ?? (product ? {
    title: `${product.name} Price in India | Enagic Bharat`,
    description: `Explore ${product.name} features, specifications and listed price in India. Contact Enagic Bharat in Jaipur for a personalised quote and product guidance.`,
  } : {
    title: "Page Not Found | Enagic Bharat",
    description: "The page you are looking for could not be found.",
  });

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
      </Helmet>
      <Navbar />
      <FloatingContact />
      {legalDocument ? (
        <PageTransition>
          <PrivacyTerms document={legalDocument} />
        </PageTransition>
      ) : (
      <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/our-story"
            element={
              <PageTransition>
                <Aboutus />
              </PageTransition>
            }
          />
          <Route path="/aboutus" element={<Navigate to="/our-story" replace />} />
          <Route
            path="/contact"
            element={
              <PageTransition>
                <Contact />
              </PageTransition>
            }
          />
          <Route
            path="/products"
            element={
              <PageTransition>
                <Products />
              </PageTransition>
            }
          />
          <Route path="/productcard" element={<Navigate to="/products" replace />} />
          <Route
            path="/office"
            element={
              <PageTransition>
                <Office />
              </PageTransition>
            }
          />
          <Route
            path="/product/:slug"
            element={
              <PageTransition>
                <ProductDetails />
              </PageTransition>
            }
          />
          <Route
            path="*"
            element={
              <PageTransition>
                <main className="surface-grid min-h-screen bg-[#f4f7fc] pt-40 text-center">
                  <div className="page-shell">
                    <p className="eyebrow">404</p>
                    <h1 className="mt-4 text-4xl font-semibold">Page not found</h1>
                    <Link to="/" className="button-dark mt-8 inline-flex">Return home</Link>
                  </div>
                </main>
              </PageTransition>
            }
          />
      </Routes>
      )}
      <Footer />
    </>
  );
}

export default App;
