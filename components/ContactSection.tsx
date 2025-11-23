import Link from "next/link";
import { FiMail, FiPhone, FiSend } from "react-icons/fi";

const ContactSection = () => (
  <section
    id="contact"
    className="mx-auto mt-28 max-w-6xl px-6"
    aria-labelledby="contact-title"
  >
    <div className="grid gap-10 rounded-3xl bg-iceem-blue px-8 py-12 text-white shadow-2xl md:grid-cols-[1.2fr_1fr] md:px-12">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-iceem-sky">
          Partner With Us
        </p>
        <h2
          id="contact-title"
          className="mt-4 text-3xl font-semibold sm:text-4xl"
        >
          Ready to accelerate your next transformation initiative?
        </h2>
        <p className="mt-4 text-base text-white/80">
          Share your objectives and our consultants will craft a customized plan
          covering scope, timelines, and measurable outcomes.
        </p>
        <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center">
          <Link
            href="mailto:contact@iceem.tn"
            className="cta-button inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-semibold text-iceem-blue shadow-xl transition hover:bg-iceem-sky/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <FiMail aria-hidden />
            contact@iceem.tn
          </Link>
          <div className="flex items-center gap-3 text-sm">
            <FiPhone aria-hidden />
            <a href="tel:+21600000000" className="underline-offset-4 hover:underline">
              +216 00 000 000
            </a>
          </div>
        </div>
        <p className="mt-10 text-xs text-white/60">
          Response within 1 business day. Multilingual team: Arabic, French,
          English.
        </p>
      </div>
      <form
        className="rounded-3xl bg-white/10 p-6 backdrop-blur"
        aria-label="Request a project quote"
      >
        <div className="grid gap-4">
          <label className="flex flex-col text-sm text-white/80">
            Full name
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="mt-2 rounded-2xl border border-white/30 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/60"
              required
            />
          </label>
          <label className="flex flex-col text-sm text-white/80">
            Work email
            <input
              type="email"
              name="email"
              placeholder="name@company.com"
              className="mt-2 rounded-2xl border border-white/30 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/60"
              required
            />
          </label>
          <label className="flex flex-col text-sm text-white/80">
            Project details
            <textarea
              name="details"
              placeholder="Describe your objectives..."
              className="mt-2 h-32 rounded-2xl border border-white/30 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/60"
              required
            />
          </label>
          <button
            type="submit"
            className="cta-button inline-flex items-center justify-center gap-2 rounded-full bg-iceem-green px-8 py-3 text-sm font-semibold text-iceem-blue shadow-lg transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <FiSend aria-hidden />
            Request Proposal
          </button>
        </div>
      </form>
    </div>
  </section>
);

export default ContactSection;
