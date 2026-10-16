import { Link } from "react-router-dom";

const documents = {
  privacy: {
    title: "Privacy Policy",
    intro: "This Privacy Policy applies to the Enagic Bharat website and the enquiries you send through it. It describes the information requested in our contact form and how it is used to respond to product questions and demo requests.",
    sections: [
      ["Information you submit", "Our demo and contact form asks for your name, email address, 10-digit mobile number, city or address, PIN code, preferred time slot and message. If you contact us by phone or email instead, we receive the details you choose to share. Please do not send payment-card details or sensitive health information through the enquiry form."],
      ["How we use enquiry details", "The website sends submitted form details to our contact service at /api/contact. We use them to review your request, contact you about the selected Enagic product, confirm or coordinate a demo time and location, and answer follow-up questions. A requested time is a preference; our team must confirm the appointment."],
      ["Who may receive the information", "Your request may be handled by Enagic Bharat personnel or the Enagic representative who can assist with your location or product enquiry. The website and contact service providers may process information to deliver the form and communications. We may also disclose information when required by law. This website does not take payment details in the contact form."],
      ["Storage and protection", "We keep enquiry details for the time needed to respond, manage related customer-service follow-up and maintain applicable business records. Access should be limited to people and service providers who need the details for those purposes. Internet transmission and electronic storage cannot be guaranteed risk-free."],
      ["Your requests", "To ask what personal details we hold, correct contact information, or request deletion where applicable, email enagicbharat1974@gmail.com or call +91 7357654577. We may need to verify your identity and may retain records that we are legally required to keep."],
      ["Cookies and third-party links", "We have not described optional analytics or advertising cookies here because their use is not established by the enquiry process. Your browser may store standard site data. Links to Enagic or other external sites are governed by those sites' own privacy policies."],
      ["Changes and contact", "If we change how enquiry information is handled, we will update this page. For privacy questions, contact Enagic Bharat at Shiv Shakti Complex, Meena Market, Mansarover, Narayan Vihar, Jaipur, Rajasthan 302020, by email or phone using the details below."],
    ],
  },
  terms: {
    title: "Terms & Conditions",
    intro: "These terms apply when you browse the Enagic Bharat website, view product information, contact our Jaipur team, or request a product demonstration. A website enquiry is a request for information or contact; it is not, by itself, an order or confirmed appointment.",
    sections: [
      ["Products, prices and displayed totals", "Product pages describe models including Leveluk K8, SD501DX, SD501 Platinum, Super 501, Jr IV, SD501U, Anespa DX and Leveluk R. Displayed prices and breakdowns are provided for guidance and can change. Confirm the product, current price, taxes, shipping, availability and delivery arrangements with Enagic Bharat before placing an order. A displayed price or clicking a contact link does not alone form a sales contract."],
      ["Enquiry, demo and Add to cart button", "The product page's Add to cart button currently takes you to the contact page. It does not add an item to an online basket, charge you, reserve inventory or complete a purchase. The contact form lets you request a demo or discuss a product; your selected time is not booked until our team confirms it. A purchase is arranged separately with the representative, with payment and order confirmation handled through the agreed official sales process."],
      ["Distributor and official product terms", "Enagic Bharat provides local product information and assistance as an independent Enagic distributor; this site is not the Enagic corporate website. Final product supply, order documentation, payment, registration, warranty coverage, installation and after-sales service are governed by the applicable Enagic terms and product documents. Please review those documents before purchase; ask us if you need help locating them."],
      ["Product use and health claims", "Product descriptions and demonstrations are for product education only. They are not medical advice and do not diagnose, prevent, treat or cure disease. Use each machine only as described in its official instructions. For medical or health questions, consult a qualified healthcare professional."],
      ["Accurate and lawful use", "When submitting an enquiry, provide contact details that let our team respond and do not impersonate another person. Do not use the site to submit unlawful, harmful or misleading material, interfere with its operation, or attempt unauthorized access."],
      ["Website content and external links", "Website text, layout, graphics and branding are protected by applicable intellectual-property laws. Enagic names and product marks belong to their respective owners. Do not reproduce site materials commercially without permission. External links are provided for convenience and are subject to the linked site's own terms."],
      ["Information and availability", "We aim to keep product information useful, but specifications, prices, tax and shipping estimates, availability and site content may change or contain errors. Confirm material details with our team and official product documents. The website may occasionally be unavailable or updated."],
      ["Updates and governing law", "We may revise these terms by publishing an updated version on this page. These terms are governed by the laws of India. Any dispute will be handled by a court with jurisdiction, subject to applicable law."],
    ],
  },
};

export default function PrivacyTerms({ document = "privacy" }) {
  const content = documents[document] ?? documents.privacy;
  const updated = "16 October 2026";

  return (
    <main className="surface-grid min-h-screen bg-[#f4f7fc] px-4 pb-16 pt-32 text-[#14243b] sm:px-6 sm:pt-40">
      <div className="mx-auto max-w-5xl">
        <p className="eyebrow">Enagic Bharat · Legal</p>
        <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">{content.title}</h1>
        <p className="mt-3 text-sm text-[#66748b]">Last updated: {updated}</p>
        <nav aria-label="Legal documents" className="mt-7 flex flex-wrap gap-3">
          <Link aria-current={document === "privacy" ? "page" : undefined} to="/privacy-policy" className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${document === "privacy" ? "bg-[#0b4db8] text-white" : "border border-[#0b4db8]/20 bg-white text-[#33445c] hover:border-[#0b4db8]"}`}>Privacy Policy</Link>
          <Link aria-current={document === "terms" ? "page" : undefined} to="/terms-and-conditions" className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${document === "terms" ? "bg-[#0b4db8] text-white" : "border border-[#0b4db8]/20 bg-white text-[#33445c] hover:border-[#0b4db8]"}`}>Terms &amp; Conditions</Link>
        </nav>

        <article className="premium-card mt-8 rounded-3xl p-6 sm:p-10">
          <p className="max-w-3xl leading-7 text-[#58677d]">{content.intro}</p>
          <div className="mt-8 divide-y divide-[#0b4db8]/10">
            {content.sections.map(([heading, body], index) => (
              <section className="py-6 first:pt-0 last:pb-0" key={heading}>
                <h2 className="text-lg font-semibold text-[#14243b]">{index + 1}. {heading}</h2>
                <p className="mt-2 leading-7 text-[#58677d]">{body}</p>
              </section>
            ))}
          </div>
          <div className="mt-8 rounded-2xl bg-[#f4f7fc] p-5">
            <h2 className="font-semibold">Questions or requests?</h2>
            <p className="mt-2 text-sm leading-6 text-[#58677d]">Contact Enagic Bharat, Shiv Shakti Complex, Meena Market, Mansarover, Narayan Vihar, Jaipur, Rajasthan 302020.</p>
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-[#0b4db8]">
              <a href="mailto:enagicbharat1974@gmail.com" className="hover:underline">enagicbharat1974@gmail.com</a>
              <a href="tel:+917357654577" className="hover:underline">+91 7357654577</a>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
