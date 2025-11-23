import Image from "next/image";
import Link from "next/link";

const Hero = () => (
  <section className="relative overflow-hidden pt-32" id="top">
    <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-iceem-light/20 blur-3xl" />
    <div className="absolute -right-16 bottom-24 h-96 w-96 rounded-full bg-iceem-green/20 blur-3xl" />
    <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 md:flex-row md:items-center">
      <div className="relative z-10 flex-1">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-xs font-semibold text-iceem-blue shadow-md ring-1 ring-white/40 backdrop-blur">
          Engineering & IT Excellence
        </span>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
          Transform operations with intelligent engineering and digital solutions.
        </h1>
        <p className="mt-6 max-w-xl text-base text-slate-600 sm:text-lg">
          Iceem.tn partners with industrial leaders to design resilient systems,
          integrate advanced automation, and deliver secure cloud-native
          platforms tailored to North African markets.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link
            href="#contact"
            className="cta-button inline-flex items-center justify-center rounded-full bg-iceem-blue px-8 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-iceem-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-iceem-blue"
          >
            Contact Us
          </Link>
          <Link
            href="#services"
            className="inline-flex items-center justify-center rounded-full border border-iceem-light/60 px-8 py-3 text-sm font-semibold text-iceem-blue backdrop-blur transition hover:border-iceem-blue hover:bg-white/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-iceem-blue"
          >
            Explore Services
          </Link>
        </div>
        <dl className="mt-10 grid max-w-lg grid-cols-2 gap-4 text-sm text-slate-600 sm:gap-6">
          <div>
            <dt className="font-semibold text-iceem-blue">+10 Years</dt>
            <dd>Cross-industry engineering expertise</dd>
          </div>
          <div>
            <dt className="font-semibold text-iceem-blue">24/7 Support</dt>
            <dd>Dedicated teams ensuring continuity</dd>
          </div>
          <div>
            <dt className="font-semibold text-iceem-blue">ISO Certified</dt>
            <dd>Quality-first delivery frameworks</dd>
          </div>
          <div>
            <dt className="font-semibold text-iceem-blue">Global Clients</dt>
            <dd>Trusted by leaders in Tunisia & EU</dd>
          </div>
        </dl>
      </div>
      <div className="relative z-10 flex-1">
        <div className="glass-panel relative rounded-3xl p-4 shadow-2xl">
          <div className="aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
              alt="Iceem engineers collaborating"
              width={960}
              height={720}
              className="h-full w-full scale-105 object-cover transition duration-700 hover:scale-110"
              priority
            />
          </div>
          <div className="absolute -bottom-6 left-6 rounded-2xl bg-white px-4 py-3 shadow-lg">
            <p className="text-sm font-semibold text-iceem-blue">
              Hybrid Cloud Deployment
            </p>
            <p className="text-xs text-slate-500">
              Reduced operational costs by 32% for industrial partner.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
