import { Link } from "react-router-dom";

const documents = {
  privacy: {
    title: "Privacy Policy",
    intro: "This Privacy Policy is for Enagic Bharat (enagicbharat.online), which provides information about Enagic products and local product guidance from Jaipur, Rajasthan. It covers information you send through this website or directly to Enagic Bharat when asking about a product, requesting a quote, or arranging a demonstration.",
    sections: [
      ["Information you submit", "Our demo and contact form asks for your name, email address, 10-digit mobile number, city or address, PIN code, preferred time slot and message. If you contact us by phone or email instead, we receive the details you choose to share. Please do not send payment-card details or sensitive health information through the enquiry form."],
      ["How we use enquiry details", "The website sends submitted form details to our contact service at /api/contact. We use them to review your request, contact you about the selected Enagic product, confirm or coordinate a demo time and location, and answer follow-up questions. A requested time is a preference; our team must confirm the appointment."],
      ["Who may receive the information", "Your request may be handled by Enagic Bharat personnel and, where needed to answer your product enquiry or progress a purchase, the relevant Enagic representative or Enagic India. Website hosting, form and communications providers may process information to deliver those services. We may also disclose information when required by law. This website does not take payment details in the contact form."],
      ["Storage and protection", "We keep enquiry details for the time needed to respond, manage related customer-service follow-up and maintain applicable business records. Access should be limited to people and service providers who need the details for those purposes. Internet transmission and electronic storage cannot be guaranteed risk-free."],
      ["Your requests", "To ask what personal details we hold, correct contact information, or request deletion where applicable, email enagicbharat1974@gmail.com or call +91 7357654577. We may need to verify your identity and may retain records that we are legally required to keep."],
      ["Cookies and third-party links", "We have not described optional analytics or advertising cookies here because their use is not established by the enquiry process. Your browser may store standard site data. Links to Enagic or other external sites are governed by those sites' own privacy policies."],
      ["Changes and contact", "If Enagic Bharat changes how enquiry information is handled, this page will be updated. For privacy questions or requests about information you submitted to Enagic Bharat, contact us using the Jaipur address, email or phone number below."],
    ],
  },
  terms: {
    title: "Terms & Conditions",
    intro: "These Terms & Conditions apply to your use of the Enagic Bharat website at enagicbharat.online and its product information, enquiry and demonstration request features. Enagic Bharat is the website operator and local product guidance contact in Jaipur, Rajasthan. A website enquiry is a request for information; it is not by itself an order or confirmed appointment.",
    sections: [
      ["Products, prices and displayed totals", "Product pages describe models including Leveluk K8, SD501DX, SD501 Platinum, Super 501, Jr IV, SD501U, Anespa DX and Leveluk R. Displayed prices and breakdowns are provided for guidance and can change. Confirm the product, current price, taxes, shipping, availability and delivery arrangements with Enagic Bharat before placing an order. A displayed price or clicking a contact link does not alone form a sales contract."],
      ["Enquiry, demo and Add to cart button", "The product page's Add to cart button currently takes you to the contact page. It does not add an item to an online basket, charge you, reserve inventory or complete a purchase. The contact form lets you request a demo or discuss a product; your selected time is not booked until Enagic Bharat confirms it. A purchase is arranged separately with the relevant Enagic representative, with payment and order confirmation handled through the applicable official sales process."],
      ["Distributor and official product terms", "Enagic Bharat provides local product information and assistance as an independent Enagic distributor; this site is not the Enagic corporate website. Final product supply, order documentation, payment, registration, warranty coverage, installation and after-sales service are governed by the applicable Enagic terms and product documents. Please review those documents before purchase; ask us if you need help locating them."],
      ["Product use and health claims", "Product descriptions and demonstrations are for product education only. They are not medical advice and do not diagnose, prevent, treat or cure disease. Use each machine only as described in its official instructions. For medical or health questions, consult a qualified healthcare professional."],
      ["Enagic India product refund policy", "Enagic Bharat provides product information and local guidance; the purchase of an Enagic machine is completed under the order documents and policies applicable to that sale. Enagic India's published Policy & Procedure Handbook describes a 100% money-back return for a 'Currently Marketable' product requested within 30 days of purchase. It defines this as unused, undamaged and marketable, excluding seasonal, discontinued or special-promotion products. The handbook requires the product and purchase invoice to be submitted within 30 days and received duly packed, undamaged and marketable; it states that the company will process an eligible refund within 10 business days. This is Enagic India's policy, not a separate refund promise from Enagic Bharat. The current policy, your order documents and eligibility determine the outcome; confirm details with Enagic India before returning a product."],
      ["Other return terms and refund enquiries", "The same published handbook describes a 30-day cooling-off period for Direct Sellers from joining, and possible return of qualifying unsold inventory or sales aids bought within 90 days before distributorship cancellation, subject to marketable condition and handling charges up to 10% of original net cost. The Enagic Store India Return & Refund page says accessories are not refundable. These terms may be revised and may depend on buyer and purchase type. For an order-specific return or refund, use the instructions and contact details in your Enagic India purchase documents or verify them directly with Enagic India. Enagic Bharat can help route a product enquiry but does not decide or guarantee Enagic India's refund approval."],
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
            <p className="mt-2 text-sm leading-6 text-[#58677d]">Contact Enagic Bharat, the operator of enagicbharat.online: Shiv Shakti Complex, Meena Market, Mansarover, Narayan Vihar, Jaipur, Rajasthan 302020.</p>
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-[#0b4db8]">
              <a href="mailto:enagicbharat1974@gmail.com" className="hover:underline">enagicbharat1974@gmail.com</a>
              <a href="tel:+917357654577" className="hover:underline">+91 7357654577</a>
            </div>
            {document === "terms" ? (
              <p className="mt-4 text-xs leading-5 text-[#66748b]">
                Official references: <a className="font-semibold text-[#0b4db8] hover:underline" href="https://enagic.co.in/wp-content/uploads/2020/10/Policy-Procedure-Hand-book-new.pdf" target="_blank" rel="noreferrer">Enagic India Policy &amp; Procedure Handbook, Section 14</a> · <a className="font-semibold text-[#0b4db8] hover:underline" href="https://store.enagic.com/in/refund/" target="_blank" rel="noreferrer">Enagic Store India Return &amp; Refund Policy</a>.
              </p>
            ) : null}
          </div>
        </article>
      </div>
    </main>
  );
}
