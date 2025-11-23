import { FiCloud, FiCpu, FiShield, FiTrendingUp } from "react-icons/fi";

const services = [
  {
    title: "Industrial Automation",
    description:
      "PLC programming, SCADA integration, and real-time monitoring to digitize complex manufacturing operations.",
    icon: FiCpu,
  },
  {
    title: "Cloud & DevOps",
    description:
      "Hybrid and multi-cloud architectures with automated CI/CD pipelines for reliable deployments at scale.",
    icon: FiCloud,
  },
  {
    title: "Cybersecurity",
    description:
      "Risk assessments, zero-trust frameworks, and managed detection services aligned with industry regulations.",
    icon: FiShield,
  },
  {
    title: "Data Intelligence",
    description:
      "Advanced analytics, AI-driven insights, and predictive maintenance dashboards for data-led decisions.",
    icon: FiTrendingUp,
  },
];

const Services = () => (
  <section
    id="services"
    className="mx-auto mt-24 max-w-6xl px-6"
    aria-labelledby="services-title"
  >
    <div className="grid gap-12 md:grid-cols-[1.2fr_1fr] md:items-center">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-iceem-light">
          Services
        </p>
        <h2
          id="services-title"
          className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl"
        >
          Tailored engineering and digital solutions for mission-critical
          environments.
        </h2>
        <p className="mt-6 text-base text-slate-600 sm:text-lg">
          Iceem.tn brings together multidisciplinary experts to modernize
          infrastructure, secure operations, and accelerate innovation without
          disrupting day-to-day performance.
        </p>
        <ul className="mt-8 flex flex-wrap gap-4 text-sm text-slate-500">
          <li className="rounded-full bg-white px-4 py-2 shadow-sm">
            Turnkey project delivery
          </li>
          <li className="rounded-full bg-white px-4 py-2 shadow-sm">
            Agile consulting squads
          </li>
          <li className="rounded-full bg-white px-4 py-2 shadow-sm">
            Multilingual support
          </li>
        </ul>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        {services.map((service) => (
          <article
            key={service.title}
            className="glass-panel group flex h-full flex-col rounded-3xl p-6 transition hover:-translate-y-1 hover:shadow-glow"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-iceem-blue/10 text-iceem-blue transition group-hover:bg-iceem-blue group-hover:text-white">
              <service.icon size={22} aria-hidden />
            </span>
            <h3 className="mt-6 text-lg font-semibold text-slate-900">
              {service.title}
            </h3>
            <p className="mt-3 text-sm text-slate-600">{service.description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
