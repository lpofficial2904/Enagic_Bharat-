import { useLayoutEffect } from "react";
import { Link } from "react-router-dom";

const documents = {
  privacy: {
    title: "Privacy Policy",
    intro: "This policy explains how Enagic Bharat handles information submitted through this website for product enquiries and demonstration requests.",
    sections: [
      ["Information collected", "The contact form asks for your name, email address, mobile number, address or city, PIN code, preferred demonstration time and message. If you contact us directly, we receive the information you choose to share. Please do not submit sensitive personal or payment information in the enquiry form."],
      ["How information is used", "We use enquiry information to respond to questions, provide product information and coordinate requested demonstrations. A preferred demonstration time is a request only and is not confirmed until our team contacts you. We may follow up by phone, email or WhatsApp using the contact details you provide."],
      ["Service providers, cookies and advertising", "Website hosting, form delivery and email providers process information as needed to operate the site and respond to enquiries. The site uses a Google Ads tag and related advertising technologies, which may use cookies or similar browser storage. You can manage cookies through your browser settings. The codebase does not show Google Analytics."],
      ["Retention and security", "We retain enquiry information for as long as reasonably needed to respond, manage follow-up and meet applicable business or legal requirements. The business has not published a fixed retention period. Reasonable safeguards are used to protect information, but electronic transmission and storage cannot be guaranteed completely secure."],
      ["Your requests and policy changes", "You may request access to or correction of information you submitted, or request deletion where applicable under Indian law. Contact us by email or phone using the details below. We may verify your identity and retain information where required by law or legitimate recordkeeping needs. We may update this policy by publishing a new version on this page."],
    ],
  },
  terms: {
    title: "Terms & Conditions",
    intro: "These terms govern your use of enagicbharat.online, which provides product information and enquiry-based demonstration requests from Enagic Bharat in Jaipur, Rajasthan. By using the website, you agree to these terms, subject to applicable law.",
    sections: [
      ["Website use and enquiries", "Use the website lawfully and provide accurate contact details when submitting an enquiry. Do not interfere with the website, attempt unauthorized access, or submit unlawful, harmful or misleading material. Submitting an enquiry does not create an order, payment, stock reservation or confirmed demonstration appointment. Our team will contact you to discuss your request."],
      ["Products, availability and pricing", "Product pages may display product details and prices. Information, prices and availability can change or contain errors. Confirm the model, current price, taxes, delivery arrangements and availability with the relevant sales contact before purchase. Website enquiries do not place an order, reserve stock or charge a payment method."],
      ["Orders, payment and warranty", "This website does not accept online payment or complete checkout. A product enquiry is not an order confirmation. Any order and payment arrangements are discussed separately and confirmed directly. Manufacturer warranty, registration, installation, use and after-sales support are governed by applicable manufacturer documents. Review those documents before purchase. This website does not create an additional warranty or guarantee."],
      ["Shipping, returns and exchanges", "Shipping and return information is available in our <a href=\"/shipping-policy\">Shipping Policy</a> and <a href=\"/refund-policy\">Return, Refund &amp; Exchange Policy</a>. Confirm the terms that apply to your order with Enagic Bharat before purchase."],
      ["Product information", "Product content and demonstrations are for general information and are not medical advice. No health outcome is promised. Use products according to official instructions and consult a qualified healthcare professional for medical questions."],
      ["Intellectual property and third-party links", "Website text, layout and graphics are protected by applicable intellectual-property laws. Enagic names, logos and product marks belong to their respective owners. External links are provided for convenience and are governed by the linked sites' own terms and privacy practices."],
      ["Accuracy and liability", "We aim to keep website information useful, but it may be incomplete, change or contain errors. To the extent permitted by applicable law, Enagic Bharat is not liable for indirect or consequential loss arising from website use or reliance on general website information. Nothing limits liability where law does not permit that limitation or affects statutory consumer rights."],
      ["Privacy, governing law and changes", "Personal information is handled as described in our <a href=\"/privacy-policy\">Privacy Policy</a>. These terms are governed by the laws of India, subject to applicable law. We may update them by publishing a revised version on this page."],
    ],
  },
  refund: {
    title: "Return, Refund & Exchange Policy",
    intro: "This policy applies to product orders for delivery in India. Contact us before sending an item back so we can provide return instructions and the return destination.",
    sections: [
      ["Return window and eligibility", "Request a return within 30 days from the date you receive the product. Returns are accepted for defective and non-defective products. The product must be in new condition: unused, uninstalled, complete with original packaging and included accessories, and without signs of use beyond reasonable inspection."],
      ["How to request a return", "Email enagicbharat1974@gmail.com or call +91 7357654577 with your name, order or invoice number, product, delivery date and reason. For damage or an incorrect item, include photographs where possible. Wait for return instructions and destination before shipping."],
      ["Return method, label and fees", "Returns are sent by mail or courier. Return shipping is free, and a free return label is included in the package. If the label is missing or unusable, contact us before shipping for instructions. No restocking fee is charged."],
      ["Exchanges", "Exchanges are accepted. Contact us within 30 days of delivery with the order details and requested replacement. We will confirm availability and provide exchange instructions. Wait for those instructions before sending the original product."],
      ["Refunds and processing time", "After the returned product is received and inspected and the return is approved, the refund will be processed within 15 days. Your bank or payment provider may take additional time to post it. No restocking fee is charged."],
      ["Damaged, incorrect or missing items", "Contact us promptly after delivery if an item arrives damaged, you receive an incorrect product, or an item is missing. Share order details and photographs of the package and contents where available. For missing items, do not return products received unless we provide instructions."],
      ["Cancellations, shipping and order enquiries", "For cancellations, contact us as soon as possible with your order details. A cancellation is not confirmed until we respond. Contact us to confirm shipping charges and estimated delivery for your order."],
    ],
  },
  shipping: {
    title: "Shipping Policy",
    intro: "We offer standard shipping in India, subject to serviceability at your delivery address. This website accepts enquiries and does not calculate shipping at checkout.",
    sections: [
      ["Availability", "Shipping is available across India, subject to serviceability at the delivery address. Contact us to confirm serviceability before placing an order."],
      ["Standard shipping and delivery estimate", "Standard shipping is free. The estimated delivery time is 5–7 business days. This is an estimate, not a guaranteed delivery date; actual timing depends on confirmed operational conditions and delivery location."],
      ["Questions", "Contact enagicbharat1974@gmail.com or +91 7357654577 to discuss delivery arrangements."],
    ],
  },
};

const policyLinks = [
  ["Privacy Policy", "/privacy-policy", "privacy"],
  ["Terms & Conditions", "/terms-and-conditions", "terms"],
  ["Return & Refund Policy", "/refund-policy", "refund"],
  ["Shipping Policy", "/shipping-policy", "shipping"],
];

export default function PrivacyTerms({ document: documentType = "privacy" }) {
  const content = documents[documentType] ?? documents.privacy;

  useLayoutEffect(() => {
    const root = window.document.documentElement;
    const previousScrollBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";
    const frame = window.requestAnimationFrame(() => window.scrollTo(0, 0));
    return () => {
      window.cancelAnimationFrame(frame);
      root.style.scrollBehavior = previousScrollBehavior;
    };
  }, []);

  return (
    <main className="surface-grid min-h-screen bg-[#f4f7fc] px-4 pb-16 pt-32 text-[#14243b] sm:px-6 sm:pt-40">
      <div className="mx-auto max-w-5xl">
        <p className="eyebrow">Enagic Bharat · Legal</p>
        <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">{content.title}</h1>
        <p className="mt-3 text-sm text-[#66748b]">Last updated: 20 October 2026</p>
        <nav aria-label="Legal documents" className="mt-7 flex flex-wrap gap-3">
          {policyLinks.map(([label, to, key]) => (
            <Link
              key={key}
              aria-current={documentType === key ? "page" : undefined}
              to={to}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${documentType === key ? "bg-[#0b4db8] text-white" : "border border-[#0b4db8]/20 bg-white text-[#33445c] hover:border-[#0b4db8]"}`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <article className="premium-card mt-8 rounded-3xl p-6 sm:p-10">
          <p className="max-w-3xl leading-7 text-[#58677d]">{content.intro}</p>
          <div className="mt-8 divide-y divide-[#0b4db8]/10">
            {content.sections.map(([heading, body], index) => (
              <section className="py-6 first:pt-0 last:pb-0" key={heading}>
                <h2 className="text-lg font-semibold text-[#14243b]">{index + 1}. {heading}</h2>
                <p className="mt-2 leading-7 text-[#58677d]" dangerouslySetInnerHTML={{ __html: body }} />
              </section>
            ))}
          </div>
          <div className="mt-8 rounded-2xl bg-[#f4f7fc] p-5">
            <h2 className="font-semibold">Questions or requests?</h2>
            <p className="mt-2 text-sm leading-6 text-[#58677d]">Enagic Bharat · Jaipur, Rajasthan, India. Contact us before placing an order or sending a return. Return instructions are provided by our team.</p>
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
