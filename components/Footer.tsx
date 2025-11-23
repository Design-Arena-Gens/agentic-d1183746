import Link from "next/link";
import { FiFacebook, FiLinkedin, FiMapPin, FiMail, FiPhone } from "react-icons/fi";

const Footer = () => (
  <footer className="mt-32 bg-slate-950 text-slate-100">
    <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:justify-between">
      <div className="max-w-sm">
        <Link href="#" className="text-2xl font-semibold text-white">
          Iceem<span className="text-iceem-green">.tn</span>
        </Link>
        <p className="mt-4 text-sm text-slate-300">
          Engineering integrated with digital prowess, enabling organizations to
          embrace Industry 4.0 securely and sustainably.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
        <div>
          <p className="font-semibold text-white">Contact</p>
          <ul className="mt-3 space-y-2 text-slate-300">
            <li className="flex items-start gap-2">
              <FiMapPin className="mt-1" aria-hidden />
              <span>Technopole El Ghazela, Ariana, Tunisia</span>
            </li>
            <li className="flex items-center gap-2">
              <FiPhone aria-hidden />
              <a href="tel:+21600000000" className="hover:text-white">
                +216 00 000 000
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FiMail aria-hidden />
              <a
                href="mailto:contact@iceem.tn"
                className="hover:text-white"
              >
                contact@iceem.tn
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-white">Follow</p>
          <div className="mt-3 flex gap-3">
            <Link
              href="https://www.facebook.com"
              aria-label="Iceem on Facebook"
              className="rounded-full border border-white/10 p-2 text-slate-200 transition hover:border-white hover:text-white"
            >
              <FiFacebook aria-hidden />
            </Link>
            <Link
              href="https://www.linkedin.com"
              aria-label="Iceem on LinkedIn"
              className="rounded-full border border-white/10 p-2 text-slate-200 transition hover:border-white hover:text-white"
            >
              <FiLinkedin aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </div>
    <div className="border-t border-white/10 py-6 text-center text-xs text-slate-500">
      © {new Date().getFullYear()} Iceem.tn. All rights reserved.
    </div>
  </footer>
);

export default Footer;
