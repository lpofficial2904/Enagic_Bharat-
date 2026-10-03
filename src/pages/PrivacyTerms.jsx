import React, { useState } from 'react';

export default function PrivacyTerms() {
  const [activeTab, setActiveTab] = useState('privacy');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased font-sans">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-700 to-indigo-800 py-16 px-4 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Legal & Privacy Center
        </h1>
        <p className="mt-3 text-lg text-blue-100 max-w-xl mx-auto">
          Please read our Privacy Policy and Terms & Conditions carefully. Last updated: July 2026.
        </p>

        {/* Tab Switcher for Mobile/Quick Toggle */}
        <div className="mt-8 inline-flex p-1 bg-white/10 backdrop-blur-sm rounded-xl">
          <button
            onClick={() => setActiveTab('privacy')}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              activeTab === 'privacy'
                ? 'bg-white text-blue-900 shadow-sm'
                : 'text-white hover:bg-white/10'
            }`}
          >
            Privacy Policy
          </button>
          <button
            onClick={() => setActiveTab('terms')}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              activeTab === 'terms'
                ? 'bg-white text-blue-900 shadow-sm'
                : 'text-white hover:bg-white/10'
            }`}
          >
            Terms & Conditions
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Sidebar Navigation (Visible on Desktop) */}
          <aside className="hidden lg:block col-span-1">
            <div className="sticky top-8 bg-white p-6 rounded-2xl shadow-sm border border-slate-200/80">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
                Navigation
              </h3>
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab('privacy')}
                  className={`w-full text-left px-4 py-2.5 rounded-xl font-medium text-sm transition-colors ${
                    activeTab === 'privacy'
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  🔒 Privacy Policy
                </button>
                <button
                  onClick={() => setActiveTab('terms')}
                  className={`w-full text-left px-4 py-2.5 rounded-xl font-medium text-sm transition-colors ${
                    activeTab === 'terms'
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  📄 Terms & Conditions
                </button>
              </nav>
              <hr className="my-5 border-slate-100" />
              <div className="text-xs text-slate-500 leading-relaxed">
                Have questions about our terms? <br />
                <a href="#contact" className="text-blue-600 font-medium hover:underline">
                  Contact Support
                </a>
              </div>
            </div>
          </aside>

          {/* Legal Document Content */}
          <main className="col-span-1 lg:col-span-3 bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-slate-200/80">
            {activeTab === 'privacy' ? (
              // PRIVACY POLICY CONTENT
              <article className="prose prose-slate max-w-none space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 pb-3 border-b border-slate-100">
                  Privacy Policy
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal data when you visit our website, inquire about Enagic products, or book a free demo.
                </p>

                <h3 className="text-xl font-semibold text-slate-800 pt-4">1. Information We Collect</h3>
                <p className="text-slate-600 leading-relaxed">
                  We collect information you provide directly to us, such as your name, email address, phone number, and location when you fill out forms to book a free water demo or contact an expert.
                </p>

                <h3 className="text-xl font-semibold text-slate-800 pt-4">2. How We Use Your Information</h3>
                <ul className="list-disc pl-5 space-y-2 text-slate-600">
                  <li>To schedule and fulfill your requested Kangen Water demonstrations.</li>
                  <li>To answer product inquiries and provide ongoing customer support.</li>
                  <li>To send periodic informational updates or promotional offers (you can opt-out at any time).</li>
                </ul>

                <h3 className="text-xl font-semibold text-slate-800 pt-4">3. Data Security</h3>
                <p className="text-slate-600 leading-relaxed">
                  We implement robust technical and organizational measures to safeguard your personal data against unauthorized access, alteration, or disclosure. We do not sell your personal data to third parties.
                </p>
              </article>
            ) : (
              // TERMS & CONDITIONS CONTENT
              <article className="prose prose-slate max-w-none space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 pb-3 border-b border-slate-100">
                  Terms & Conditions
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  Welcome to our website. By continuing to browse and use this website, you agree to comply with and be bound by the following terms and conditions of use.
                </p>

                <h3 className="text-xl font-semibold text-slate-800 pt-4">1. Product Information & Disclaimer</h3>
                <p className="text-slate-600 leading-relaxed">
                  The content on this website is for general informational purposes regarding Enagic water ionization machines (such as Kangen 8 and Anespa DX). It is not medical advice. Kangen water is intended for hydration and wellness support.
                </p>

                <h3 className="text-xl font-semibold text-slate-800 pt-4">2. Independent Distributor Scope</h3>
                <p className="text-slate-600 leading-relaxed">
                  This website is operated by an Independent Enagic Distributor. Official product sales, registrations, and structural warranty fulfillments are directly processed through Enagic corporate guidelines.
                </p>

                <h3 className="text-xl font-semibold text-slate-800 pt-4">3. Booking Demos & Conduct</h3>
                <p className="text-slate-600 leading-relaxed">
                  Free demo bookings are subject to availability and representative locations. We reserve the right to reschedule or deny requests that contain fraudulent or incomplete contact information.
                </p>

                <h3 className="text-xl font-semibold text-slate-800 pt-4">4. Governing Law</h3>
                <p className="text-slate-600 leading-relaxed">
                  These terms are governed by and construed in accordance with local regulations, and any disputes relating to these terms will be subject to the exclusive jurisdiction of local courts.
                </p>
              </article>
            )}

            {/* Support section under text */}
            <div id="contact" className="mt-12 pt-8 border-t border-slate-100 bg-blue-50/50 -mx-6 md:-mx-10 px-6 md:px-10 py-6 rounded-b-2xl">
              <h4 className="font-semibold text-slate-900 text-lg">Still have questions?</h4>
              <p className="text-sm text-slate-600 mt-1">
                If something isn't clear, our team is happy to walk you through our operational standards.
              </p>
              <button className="mt-4 inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors rounded-xl shadow-sm">
                Contact Legal Support
              </button>
            </div>
          </main>
          
        </div>
      </div>
    </div>
  );
}