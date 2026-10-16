import { Link } from "react-router-dom";

const questions = [
  {
    question: "What is the Kangen Water machine price in India?",
    answer: "The price depends on the Enagic model you choose. View the listed amounts and pricing breakdown on each product page, then request a personalised quote to confirm the final payable amount and availability.",
  },
  {
    question: "How can I book a Kangen Water demo in Jaipur?",
    answer: "Contact Enagic Bharat with your preferred date, city and model of interest. Our Jaipur team will confirm availability and help you arrange a demonstration before you decide.",
  },
  {
    question: "How do I compare Leveluk K8, SD501DX and Jr IV?",
    answer: "Start with your budget, available kitchen space and everyday usage. Compare the specifications, controls and listed prices on the product pages, or ask our team to walk you through the differences.",
  },
  {
    question: "What should I check before buying an alkaline water ionizer?",
    answer: "Discuss your existing water supply, installation requirements, filter replacement costs and model-specific warranty terms. Bring these questions to your demo so you can assess the ongoing costs as well as the purchase price.",
  },
];

export default function KangenQuestions() {
  return (
    <div className="mt-16 border-t border-[#073b8f]/10 pt-12">
      <p className="eyebrow">Before you choose</p>
      <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Kangen Water prices, models & demos</h2>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {questions.map(({ question, answer }) => (
          <details key={question} className="rounded-lg border border-[#073b8f]/10 bg-white p-6">
            <summary className="cursor-pointer text-lg font-semibold focus-visible:outline-2 focus-visible:outline-[#0b4db8]">{question}</summary>
            <p className="mt-4 text-sm leading-7 text-black/60">{answer}</p>
          </details>
        ))}
      </div>
      <div className="mt-8 flex flex-wrap items-center gap-5">
        <Link to="/contact" className="button-dark">Request a quote or demo</Link>
        <p className="max-w-lg text-sm leading-6 text-black/55">Share your city and preferred model for pricing and personal guidance.</p>
      </div>
    </div>
  );
}
