import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  Phone,
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

const apiBaseUrl = (import.meta.env.VITE_API_BASE_URL || "").replace(/\/$/, "");

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
    if (!/^[6-9]\d{9}$/.test(digits)) return "Please enter a valid 10 digit Indian mobile number.";
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
  const navigate = useNavigate();
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
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  useEffect(() => {
    if (!showSuccessPopup) return undefined;

    const redirectTimer = window.setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => window.clearTimeout(redirectTimer);
  }, [navigate, showSuccessPopup]);

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

  const updatePhone = (event) => {
    const value = event.target.value.replace(/\D/g, "").slice(0, 10);
    setForm((current) => ({ ...current, phone: value }));
    setErrors((current) => {
      if (!current.phone) return current;
      const message = validators.phone(value);
      const next = { ...current };
      if (message) next.phone = message;
      else delete next.phone;
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
    const bookingPromise = fetch(`${apiBaseUrl}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    }).then(async (response) => {
      const text = await response.text();
      let data = {};
      try {
        data = text ? JSON.parse(text) : {};
      } catch {
        data = {
          message: response.status === 404
            ? "Contact API is not available on this deployment."
            : "Unexpected server response. Please try again.",
        };
      }
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
      setShowSuccessPopup(true);
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
    <main className="overflow-hidden bg-[#f4f7fc] pt-24">
      {showSuccessPopup ? (
        <div className="fixed inset-0 z-[120] grid place-items-center bg-[#14243b]/45 px-4 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 230, damping: 22 }}
            className="w-full max-w-md overflow-hidden rounded-[2rem] border border-[#0b4db8]/10 bg-white text-center shadow-[0_30px_90px_rgba(19,48,88,.2)]"
          >
            <div className="bg-gradient-to-br from-[#f4f7fc] to-[#e8eff9] px-8 py-7 text-[#14243b]">
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#0b4db8] text-white shadow-[0_18px_45px_rgba(11,77,184,.24)]">
                <CheckCircle2 size={34} strokeWidth={2.4} />
              </div>
              <h2 className="mt-5 text-2xl font-semibold">Demo booked successfully</h2>
              <p className="mt-2 text-sm leading-6 text-[#58677d]">
                Thank you. Our Enagic Bharat expert will contact you shortly.
              </p>
            </div>
            <div className="px-8 py-6">
              <p className="text-sm font-semibold text-[#58677d]">
                Redirecting to the main page in 5 seconds...
              </p>
              <div className="mt-5 h-2 overflow-hidden rounded-full bg-[#dce7f6]">
                <motion.div
                  initial={{ width: "100%" }}
                  animate={{ width: "0%" }}
                  transition={{ duration: 5, ease: "linear" }}
                  className="h-full rounded-full bg-[#0b4db8]"
                />
              </div>
            </div>
          </motion.div>
        </div>
      ) : null}
      <section className="relative pb-24 pt-4 sm:pt-6">
        <div className="page-shell">
          <div className="grid overflow-hidden rounded-[2.5rem] border border-black/[.07] bg-white shadow-[0_30px_90px_rgba(30,28,22,.09)] lg:grid-cols-[1.32fr_.68fr]">
            <div className="relative order-2 overflow-hidden bg-[#eaf0f8] p-8 text-[#14243b] sm:p-11 lg:order-2">
              <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full border-[45px] border-[#0b4db8]/[.06]" />
              <p className="eyebrow">What to expect</p>
              <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-4xl">
                A demonstration designed around you.
              </h2>
              <p className="mt-5 text-sm leading-7 text-[#58677d]">
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
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[#0b4db8]/20 text-xs font-bold text-[#0b4db8]">
                      {number}
                    </span>
                    <span className="text-sm font-semibold text-[#33445c]">
                      {text}
                    </span>
                  </div>
                ))}
              </div>
              <div className="relative mt-12 rounded-2xl border border-[#0b4db8]/10 bg-white/70 p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <Clock3 size={18} className="text-[#0b4db8]" />
                  <div>
                    <strong className="block text-sm">Monday – Saturday</strong>
                    <span className="text-xs text-[#66748b]">
                      9:00 AM – 7:00 PM
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative order-1 p-6 sm:p-10 lg:order-1 lg:p-12">
              <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-[#c9a96e]/10 blur-3xl" />
              <div className="relative flex flex-col justify-between gap-4 border-b border-black/[.07] pb-7 sm:flex-row sm:items-end">
                <div>
                  <p className="eyebrow">Reserve your experience</p>
                  <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                    Book your free demo
                  </h2>
                </div>
                <span className="flex items-center gap-2 text-xs font-semibold text-black/40">
                  <CalendarCheck size={17} className="text-[#138808]" /> Takes
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
                      maxLength={10}
                      pattern="[6-9][0-9]{9}"
                      value={form.phone}
                      onChange={updatePhone}
                      placeholder="9876543210"
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

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {contactCards.map(({ icon: Icon, label, value, href }, index) => (
              <motion.a
                key={label}
                href={href}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="group flex items-center gap-4 rounded-[1.6rem] border border-black/[.07] bg-white p-5 shadow-[0_20px_55px_rgba(27,25,20,.1)] transition hover:-translate-y-1 hover:shadow-[0_26px_65px_rgba(27,25,20,.14)] sm:p-6"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#e2ebf8] text-[#138808] transition group-hover:bg-[#0b4db8] group-hover:text-white">
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

          <div className="mt-16 flex flex-col items-center justify-between gap-7 rounded-[2rem] border border-black/[.07] bg-[#e8eff9] p-7 sm:flex-row sm:p-9">
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
                  "https://www.facebook.com/",
                  "Facebook",
                ],
                [
                  FaInstagram,
                  "https://www.instagram.com/",
                  "Instagram",
                ],
                [FaWhatsapp, "https://wa.me/917357654577", "WhatsApp"],
                [FaYoutube, "https://www.youtube.com/", "YouTube"],
              ].map(([Icon, href, label]) => (
                <motion.a
                  whileHover={{ y: -4 }}
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid h-12 w-12 place-items-center rounded-full border border-black/10 bg-white text-black/65 shadow-sm transition hover:bg-[#101827] hover:text-white"
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
        <span className="mt-2 block text-xs font-semibold text-[#0b4db8]">
          {error}
        </span>
      ) : null}
    </label>
  );
}
