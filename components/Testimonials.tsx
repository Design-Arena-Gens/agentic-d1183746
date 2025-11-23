"use client";

import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const testimonials = [
  {
    quote:
      "Iceem.tn helped us modernize our SCADA network with zero downtime. Their engineers are proactive, meticulous, and deeply understand our sector.",
    name: "Amine K.",
    role: "Operations Director, Industrial Manufacturing",
  },
  {
    quote:
      "From cloud migration to cybersecurity hardening, Iceem.tn provided a holistic roadmap that improved performance and compliance across regions.",
    name: "Sonia L.",
    role: "CTO, Financial Services Group",
  },
  {
    quote:
      "Their data team translated complex maintenance logs into predictive dashboards, enabling us to anticipate failures and optimize resources.",
    name: "Marc D.",
    role: "Head of Engineering, Energy Provider",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const goTo = (next: number) => {
    const normalized = (next + testimonials.length) % testimonials.length;
    setIndex(normalized);
  };

  const { quote, name, role } = testimonials[index];

  return (
    <section
      id="testimonials"
      className="mx-auto mt-28 max-w-6xl px-6"
      aria-labelledby="testimonials-title"
    >
      <div className="flex flex-col gap-10 rounded-3xl bg-white/80 p-8 shadow-xl ring-1 ring-white/60 lg:flex-row lg:items-center lg:p-12">
        <div className="lg:w-1/3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-iceem-light">
            Testimonials
          </p>
          <h2
            id="testimonials-title"
            className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl"
          >
            Trusted by industry innovators across Tunisia and Europe.
          </h2>
          <p className="mt-4 text-sm text-slate-600">
            Discover how Iceem.tn delivers lasting partnerships anchored in
            measurable value, transparency, and continuous improvement.
          </p>
        </div>
        <div className="relative flex flex-1 flex-col justify-between">
          <figure className="min-h-[220px] rounded-3xl bg-iceem-blue/5 p-8 text-slate-700 shadow-inner">
            <blockquote className="text-lg leading-relaxed text-slate-700">
              “{quote}”
            </blockquote>
            <figcaption className="mt-6 text-sm font-semibold text-iceem-blue">
              {name}
              <span className="block text-xs font-normal text-slate-500">
                {role}
              </span>
            </figcaption>
          </figure>
          <div className="mt-6 flex items-center justify-between">
            <div className="flex gap-2" role="tablist" aria-label="Testimonials">
              {testimonials.map((item, idx) => (
                <button
                  key={item.name}
                  type="button"
                  role="tab"
                  aria-selected={index === idx}
                  aria-label={`Show testimonial from ${item.name}`}
                  onClick={() => goTo(idx)}
                  className={`h-2 rounded-full transition ${
                    index === idx ? "w-8 bg-iceem-blue" : "w-2 bg-iceem-blue/30"
                  }`}
                />
              ))}
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={() => goTo(index - 1)}
                className="rounded-full border border-iceem-light/60 p-2 text-iceem-blue transition hover:bg-iceem-light/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-iceem-blue"
              >
                <FiChevronLeft size={20} aria-hidden />
              </button>
              <button
                type="button"
                aria-label="Next testimonial"
                onClick={() => goTo(index + 1)}
                className="rounded-full border border-iceem-light/60 p-2 text-iceem-blue transition hover:bg-iceem-light/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-iceem-blue"
              >
                <FiChevronRight size={20} aria-hidden />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
