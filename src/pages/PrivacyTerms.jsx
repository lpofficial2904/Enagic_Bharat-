import { useLayoutEffect } from "react";
import { Link } from "react-router-dom";

const documents = {
  privacy: {
    title: "Privacy Policy",
    intro: "This policy explains how Enagic Bharat handles information submitted through this website for product enquiries and demonstration requests.",
    sections: [
      ["Information collected", "The contact form asks for your name, email address, mobile number, address or city, PIN code, preferred demonstration time and message. If you contact us directly, we receive the information you choose to share. Please do not submit sensitive personal or payment information in the enquiry form."],
      ["How information is used", "We use enquiry information to respond to questions, provide product information and coordinate requested demonstrations. The preferred time is not confirmed until our team responds. We may contact you using the phone number, email address or WhatsApp contact you provide in connection with your enquiry."],
      ["Website services and advertising", "The website sends contact form submissions to its /api/contact service. The site also loads a Google Ads tag identified as AW-11461246864 and includes a Google site verification tag. The project does not establish use of Google Analytics; this policy therefore does not claim that Analytics is used. Google Ads and related browser technologies may process data according to Google's settings and policies."],
      ["Sharing, retention and security", "Website hosting, contact form and communications providers may process information to provide those services. We keep enquiry details as needed to respond, manage follow-up and meet applicable business or legal requirements; no fixed retention period is specified here. Reasonable measures are used to protect information, but no method of electronic transmission or storage can be guaranteed completely secure."],
      ["Your requests and policy changes", "You may request access to or correction of information you submitted, or request deletion where applicable under Indian law. Email enagicbharat1974@gmail.com. We may verify your identity and retain information where required by law or legitimate recordkeeping needs. We may update this policy by publishing a new version on this page."],
    ],
  },
  terms: {
    title: "Terms & Conditions",
    intro: "These terms govern your use of enagicbharat.online, which provides Enagic product information and demonstration enquiries from Jaipur, Rajasthan. By using the website, you agree to these terms, subject to applicable law.",
    sections: [
      ["Website use and enquiries", "Use the website lawfully and provide accurate contact details when submitting an enquiry. Do not interfere with the website, attempt unauthorized access, or submit unlawful, harmful or misleading material. A requested demonstration time is not confirmed until our team responds."],
      ["Products, availability and pricing", "Product pages may display product details and prices. Information, prices and availability can change or contain errors. Confirm the model, current price, taxes, delivery arrangements and availability with the relevant sales contact before purchase. Website enquiries do not place an order, reserve stock or charge a payment method."],
      ["Orders, payment and warranty", "A product enquiry is not an order confirmation. Payment terms, if applicable, are provided with the relevant transaction; the website enquiry form does not take payment. Manufacturer warranty, registration, installation, use and after-sales support are governed by applicable manufacturer documents. Review those documents before purchase. This website does not create an additional warranty or guarantee."],
      ["Shipping, returns and exchanges", "For shipping in India, shipping is free and estimated delivery is 5–7 business days. Returns, exchanges and refunds are described in our <a href=\"/refund-policy\">Return, Refund &amp; Exchange Policy</a>."],
      ["Product information", "Product content and demonstrations are for general information and are not medical advice. No health outcome is promised. Use products according to official instructions and consult a qualified healthcare professional for medical questions."],
      ["Intellectual property and third-party links", "Website text, layout and graphics are protected by applicable intellectual-property laws. Enagic names, logos and product marks belong to their respective owners. External links are provided for convenience and are governed by the linked sites' own terms and privacy practices."],
      ["Accuracy and liability", "We aim to keep website information useful, but it may be incomplete, change or contain errors. To the extent permitted by applicable law, Enagic Bharat is not liable for indirect or consequential loss arising from website use or reliance on general website information. Nothing limits liability where law does not permit that limitation or affects statutory consumer rights."],
      ["Privacy, governing law and changes", "Personal information is handled as described in our <a href=\"/privacy-policy\">Privacy Policy</a>. These terms are governed by the laws of India, subject to applicable law. We may update them by publishing a revised version on this page."],
    ],
  },
  refund: {
    title: "Return, Refund & Exchange Policy",
    intro: "This policy applies to product orders for delivery in India covered by the return and shipping settings shown in Google Merchant Center. Contact us before sending an item back so we can provide return instructions. The return destination will be supplied with those instructions.",
    sections: [
      ["Return window and eligibility", "Request a return within 30 days from the date you receive the product. Returns are accepted for defective and non-defective products. The product must be in new condition: unused, uninstalled, complete with original packaging and included accessories, and without signs of use beyond reasonable inspection."],
      ["How to request a return", "Email enagicbharat1974@gmail.com or call +91 7357654577 with your name, order or invoice number, product, delivery date and reason. For damage or an incorrect item, include photographs where possible. Wait for return instructions and destination before shipping."],
      ["Return method, label and fees", "Returns are sent by mail or courier. Return shipping is free, and a free return label is included in the package. If the label is missing or unusable, contact us before shipping for instructions. No restocking fee is charged."],
      ["Exchanges", "Exchanges are accepted. Contact us within 30 days of delivery with the order details and requested replacement. We will confirm availability and provide exchange instructions. Wait for those instructions before sending the original product."],
      ["Refunds and processing time", "After the returned product is received and inspected and the return is approved, the refund will be processed within 15 days. Your bank or payment provider may take additional time to post it. No restocking fee is charged."],
      ["Damaged, incorrect or missing items", "Contact us promptly after delivery if an item arrives damaged, you receive an incorrect product, or an item is missing. Share order details and photographs of the package and contents where available. For missing items, do not return products received unless we provide instructions."],
      ["Cancellations, shipping and order enquiries", "For cancellations, contact us as soon as possible with your order details. A cancellation is not confirmed until we respond. Shipping in India is free and estimated delivery is 5–7 business days. Contact us for order or delivery questions."],
    ],
  },
};

const policyLinks = [
  ["Privacy Policy", "/privacy-policy", "privacy"],
  ["Terms & Conditions", "/terms-and-conditions", "terms"],
  ["Return & Refund Policy", "/refund-policy", "refund"],
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
        <p className="mt-3 text-sm text-[#66748b]">Last updated: 19 October 2026</p>
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
            <p className="mt-2 text-sm leading-6 text-[#58677d]">Contact Enagic Bharat using the contact details below. Return destination details are provided with the return instructions.</p>
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
