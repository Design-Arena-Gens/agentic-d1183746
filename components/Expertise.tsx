const expertiseItems = [
  {
    title: "Systems Integration",
    copy: "Interconnect legacy automation with modern cloud platforms using secure data gateways and resilient edge computing.",
  },
  {
    title: "Digital Twins",
    copy: "Model production lines and critical infrastructure for predictive maintenance and what-if scenario planning.",
  },
  {
    title: "Smart Facilities",
    copy: "Deploy IoT sensors, energy optimization, and intelligent monitoring to elevate sustainability metrics.",
  },
  {
    title: "Managed Services",
    copy: "Continuous improvement squads ensuring uptime, governance, and proactive incident response.",
  },
];

const Expertise = () => (
  <section
    id="expertise"
    className="mx-auto mt-28 max-w-6xl px-6"
    aria-labelledby="expertise-title"
  >
    <div className="rounded-3xl bg-gradient-to-r from-white/80 via-white/60 to-iceem-sky/30 p-8 shadow-lg ring-1 ring-white/50 md:p-12">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-iceem-light">
          Expertise
        </p>
        <h2
          id="expertise-title"
          className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl"
        >
          Strategic partners for digital factories, smart cities, and energy
          innovation.
        </h2>
        <p className="mt-4 text-base text-slate-600">
          Iceem.tn merges engineering rigor with software craftsmanship to
          deliver measurable outcomes across manufacturing, energy, logistics,
          and financial services.
        </p>
      </div>
      <dl className="mt-10 grid gap-6 sm:grid-cols-2">
        {expertiseItems.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-white/60 bg-white/80 p-6 shadow-sm transition hover:shadow-lg"
          >
            <dt className="text-base font-semibold text-iceem-blue">
              {item.title}
            </dt>
            <dd className="mt-3 text-sm text-slate-600">{item.copy}</dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);

export default Expertise;
