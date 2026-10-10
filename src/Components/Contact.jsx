import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import {
  ArrowRight,
  CalendarCheck,
  Clock3,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const contactCards = [
  {
    icon: Phone,
    label: "Speak with an expert",
    value: "+91 7357654577",
    href: "tel:+917357654577",
  },
  {
    icon: Mail,
    label: "Write to us",
    value: "enagicbharat1974@gmail.com",
    href: "enagicbharat1974@gmail.com",
  },
  {
    icon: MapPin,
    label: "Experience centre",
    value: "Enagic Bharat, Shiv Shakti Complex, Meena Market, Mansarover, Narayan Vihar, Jaipur, Rajasthan 302020",
    href: "/#/office",
  },
];

const slots = [
  "08:00 AM - 10:00 AM",
  "10:00 AM - 12:00 PM",
  "12:00 PM - 02:00 PM",
  "02:00 PM - 04:00 PM",
  "04:00 PM - 06:00 PM",
  "06:00 PM - 08:00 PM",
  "08:00 PM - 10:00 PM",
];

const validators = {
  name: (value) => {
    const trimmed = value.trim();
    if (!trimmed) return "Please enter your full name.";
    if (trimmed.length < 3) return "Name must be at least 3 characters.";
    if (!/^[a-zA-Z\s.'-]+$/.test(trimmed)) return "Name can only use letters and spaces.";
    return "";
  },
  email: (value) => {
    const trimmed = value.trim();
    if (!trimmed) return "Please enter your email address.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(trimmed)) return "Please enter a valid email address.";
    return "";
  },
  phone: (value) => {
    const digits = value.replace(/\D/g, "");
    if (!digits) return "Please enter your phone number.";
    if (!/^[6-9]\d{9}$/.test(digits.slice(-10))) return "Please enter a valid 10 digit Indian mobile number.";
    return "";
  },
  pincode: (value) => {
    const trimmed = value.trim();
    if (!trimmed) return "Please enter your pincode.";
    if (!/^[1-9]\d{5}$/.test(trimmed)) return "Please enter a valid 6 digit pincode.";
    return "";
  },
  city: (value) => {
    const trimmed = value.trim();
    if (!trimmed) return "Please enter your full address.";
    if (trimmed.length < 8) return "Address must be at least 8 characters.";
    return "";
  },
  timeSlot: (value) => (!value ? "Please choose a preferred time slot." : ""),
  message: (value) => {
    const trimmed = value.trim();
    if (!trimmed) return "Please tell us how we can help.";
    if (trimmed.length < 5) return "Message must be at least 5 characters.";
    return "";
  },
};

function validateForm(values) {
  return Object.fromEntries(
    Object.entries(validators)
      .map(([key, validator]) => [key, validator(values[key] ?? "")])
      .filter(([, message]) => message),
  );
}

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    pincode: "",
    timeSlot: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const update = (key) => (event) => {
    const value = event.target.value;
    setForm((current) => ({ ...current, [key]: value }));
    setErrors((current) => {
      if (!current[key]) return current;
      const message = validators[key]?.(value) ?? "";
      const next = { ...current };
      if (message) next[key] = message;
      else delete next[key];
      return next;
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validateForm(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      toast.error("Please correct the highlighted details.");
      return;
    }

    setIsSubmitting(true);
    const bookingPromise = fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    }).then(async (response) => {
      const text = await response.text();
      const data = text ? JSON.parse(text) : {};
      if (!response.ok || !data.success) {
        if (data.errors) setErrors(data.errors);
        throw new Error(data.message || "Unable to book your demo");
      }
      return data;
    });

    toast.promise(bookingPromise, {
      loading: "Reserving your personal experience...",
      success: "Demo reserved! Our expert will contact you shortly.",
      error: (error) =>
        error.message || "Something went wrong. Please try again.",
    });

    try {
      await bookingPromise;
      setForm({
        name: "",
        email: "",
        phone: "",
        city: "",
        pincode: "",
        timeSlot: "",
        message: "",
      });
      setErrors({});
    } catch (error) {
      console.error("Contact form submission failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="overflow-hidden bg-[#f4f6f3] pt-24">
      <section className="grain relative overflow-hidden bg-[#0d2924] pb-32 pt-20 text-white sm:pt-28">
        <div className="absolute left-[8%] top-[20%] h-72 w-72 rounded-full bg-[#902b36]/15 blur-[100px]" />
        <div className="absolute right-[8%] top-[5%] h-80 w-80 rounded-full bg-[#d8b678]/15 blur-[100px]" />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="page-shell relative text-center"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0 },
            }}
            className="eyebrow inline-flex items-center gap-2"
          >
            <Sparkles size={14} /> Personal consultation
          </motion.div>
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 28 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mx-auto mt-5 max-w-5xl text-5xl font-semibold leading-[1.02] sm:text-7xl lg:text-[5.5rem]"
          >
            Explore Kangen Water,{" "}
            <span className="italic text-[#d8b678]">personally.</span>
          </motion.h1>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/52 sm:text-lg"
          >
            Book a Kangen Water demo in Jaipur or ask about Enagic water ionizer
            prices in India. Share your preferred model and city so our team can
            help with a quote, model comparison and installation questions.
          </motion.p>
          <motion.div
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            className="mt-9 flex flex-wrap justify-center gap-5 text-xs font-semibold text-white/48"
          >
            {["No obligation", "Personal guidance", "Live water testing"].map(
              (item) => (
                <span key={item} className="flex items-center gap-2">
                  <ShieldCheck size={15} className="text-[#d8b678]" />
                  {item}
                </span>
              ),
            )}
          </motion.div>
        </motion.div>
      </section>

      <section className="relative z-10 -mt-16 pb-28">
        <div className="page-shell">
          <div className="grid gap-5 md:grid-cols-3">
            {contactCards.map(({ icon: Icon, label, value, href }, index) => (
              <motion.a
                key={label}
                href={href}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + index * 0.1 }}
                className="group flex items-center gap-4 rounded-[1.6rem] border border-black/[.07] bg-white p-5 shadow-[0_20px_55px_rgba(27,25,20,.1)] transition hover:-translate-y-1 hover:shadow-[0_26px_65px_rgba(27,25,20,.14)] sm:p-6"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#eee8dc] text-[#a77a37] transition group-hover:bg-[#902b36] group-hover:text-white">
                  <Icon size={19} />
                </span>
                <span>
                  <small className="block text-[10px] font-bold uppercase tracking-[.16em] text-black/35">
                    {label}
                  </small>
                  <strong className="mt-1 block text-sm sm:text-base">
                    {value}
                  </strong>
                </span>
              </motion.a>
            ))}
          </div>

          <div className="mt-8 grid overflow-hidden rounded-[2.5rem] border border-black/[.07] bg-white shadow-[0_30px_90px_rgba(30,28,22,.09)] lg:grid-cols-[.68fr_1.32fr]">
            <div className="relative overflow-hidden bg-[#0d2924] p-8 text-white sm:p-11">
              <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full border-[45px] border-[#d8b678]/5" />
              <p className="eyebrow">What to expect</p>
              <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-4xl">
                A demonstration designed around you.
              </h2>
              <p className="mt-5 text-sm leading-7 text-white/48">
                Our expert will explain the technology clearly, answer your
                questions and help you compare the models best suited to your
                needs.
              </p>
              <div className="mt-10 space-y-7">
                {[
                  ["01", "Choose a convenient time"],
                  ["02", "Get a personal live demonstration"],
                  ["03", "Receive honest product guidance"],
                ].map(([number, text]) => (
                  <div key={number} className="flex items-center gap-4">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[#d8b678]/25 text-xs font-bold text-[#d8b678]">
                      {number}
                    </span>
                    <span className="text-sm font-semibold text-white/70">
                      {text}
                    </span>
                  </div>
                ))}
              </div>
              <div className="relative mt-12 rounded-2xl border border-white/10 bg-white/[.04] p-5">
                <div className="flex items-center gap-3">
                  <Clock3 size={18} className="text-[#d8b678]" />
                  <div>
                    <strong className="block text-sm">Monday – Saturday</strong>
                    <span className="text-xs text-white/40">
                      9:00 AM – 7:00 PM
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative p-6 sm:p-10 lg:p-12">
              <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-[#d8b678]/10 blur-3xl" />
              <div className="relative flex flex-col justify-between gap-4 border-b border-black/[.07] pb-7 sm:flex-row sm:items-end">
                <div>
                  <p className="eyebrow">Reserve your experience</p>
                  <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                    Book your free demo
                  </h2>
                </div>
                <span className="flex items-center gap-2 text-xs font-semibold text-black/40">
                  <CalendarCheck size={17} className="text-[#a77a37]" /> Takes
                  less than 2 minutes
                </span>
              </div>

              <form onSubmit={handleSubmit} className="relative mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full name" error={errors.name}>
                    <input
                      className="input-premium"
                      required
                      minLength={3}
                      autoComplete="name"
                      value={form.name}
                      onChange={update("name")}
                      placeholder="Your full name"
                    />
                  </Field>
                  <Field label="Email address" error={errors.email}>
                    <input
                      className="input-premium"
                      required
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={update("email")}
                      placeholder="you@example.com"
                    />
                  </Field>
                  <Field label="Phone number" error={errors.phone}>
                    <input
                      className="input-premium"
                      required
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      pattern="(?:\+91[\s-]?)?[6-9][0-9\s-]{9,12}"
                      value={form.phone}
                      onChange={update("phone")}
                      placeholder="+91 98765 43210"
                    />
                  </Field>
                  <Field label="Pincode" error={errors.pincode}>
                    <input
                      className="input-premium"
                      required
                      inputMode="numeric"
                      maxLength={6}
                      pattern="[1-9][0-9]{5}"
                      autoComplete="postal-code"
                      value={form.pincode}
                      onChange={update("pincode")}
                      placeholder="302020"
                    />
                  </Field>
                </div>
                <Field label="Full address" error={errors.city}>
                  <input
                    className="input-premium"
                    required
                    minLength={8}
                    autoComplete="street-address"
                    value={form.city}
                    onChange={update("city")}
                    placeholder="Your address and city"
                  />
                </Field>
                <Field label="Preferred time" error={errors.timeSlot}>
                  <select
                    className="input-premium"
                    required
                    value={form.timeSlot}
                    onChange={update("timeSlot")}
                  >
                    <option value="">Choose a convenient time slot</option>
                    {slots.map((slot) => (
                      <option key={slot}>{slot}</option>
                    ))}
                  </select>
                </Field>
                <Field label="How can we help?" error={errors.message}>
                  <textarea
                    className="input-premium resize-none"
                    rows="4"
                    required
                    minLength={5}
                    value={form.message}
                    onChange={update("message")}
                    placeholder="Tell us about your requirements or questions..."
                  />
                </Field>
                <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-xs text-xs leading-5 text-black/35">
                    By submitting, you agree to be contacted regarding your
                    Enagic demonstration.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="button-primary min-w-52 py-4 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting ? "Reserving..." : "Reserve My Demo"}{" "}
                    <ArrowRight size={17} />
                  </motion.button>
                </div>
              </form>
            </div>
          </div>

          <div className="mt-16 flex flex-col items-center justify-between gap-7 rounded-[2rem] border border-black/[.07] bg-[#e7eeea] p-7 sm:flex-row sm:p-9">
            <div>
              <p className="eyebrow">Stay connected</p>
              <h3 className="mt-2 text-2xl font-semibold">
                Follow the Enagic Bharat journey.
              </h3>
            </div>
            <div className="flex gap-3">
              {[
                [
                  FaFacebookF,
                  "https://www.facebook.com/pintuattends",
                  "Facebook",
                ],
                [
                  FaInstagram,
                  "https://www.instagram.com/pintuattends/",
                  "Instagram",
                ],
                [FaWhatsapp, "https://wa.me/917023320977", "WhatsApp"],
                [FaYoutube, "https://www.youtube.com/@pintuattends", "YouTube"],
              ].map(([Icon, href, label]) => (
                <motion.a
                  whileHover={{ y: -4 }}
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid h-12 w-12 place-items-center rounded-full border border-black/10 bg-white text-black/65 shadow-sm transition hover:bg-[#0d2924] hover:text-white"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Field({ label, error, children }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-bold uppercase tracking-[.1em] text-black/45">
        {label}
      </span>
      {children}
      {error ? (
        <span className="mt-2 block text-xs font-semibold text-[#902b36]">
          {error}
        </span>
      ) : null}
    </label>
  );
}
