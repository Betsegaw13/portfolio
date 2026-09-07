"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Container from "../ui/Container";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const shouldReduceMotion = useReducedMotion();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus("Please fill all fields.");
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("Message sent successfully!");

        setForm({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus("Something went wrong.");
      }
    } catch {
      setStatus("Error sending message.");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0B1120] px-6 py-24 text-[#F8FAFC] scroll-mt-24 sm:px-10 lg:px-16 lg:py-32 xl:px-20"
    >
      {/* =====================================================
          BACKGROUND
          ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(56,189,248,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.8) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        {/* Center glow */}
        <div className="absolute left-1/2 top-[35%] h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-[#38BDF8]/5 blur-[140px]" />

        {/* Side glow */}
        <div className="absolute -right-32 bottom-0 h-[380px] w-[380px] rounded-full bg-[#38BDF8]/5 blur-[130px]" />
      </div>

      <Container>
        {/* =====================================================
            HEADER
            ===================================================== */}

        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 35,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.65,
            ease: "easeOut",
          }}
          className="relative mb-16 lg:mb-20"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_0.65fr] lg:items-end lg:gap-20">
            {/* Heading */}
            <div>
              <h2 className="text-5xl font-black leading-[0.88] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
                Let&apos;s
                <br />
                <span className="text-[#94A3B8]">
                  Talk.
                </span>
              </h2>
            </div>

            {/* Description */}
            <p className="max-w-[470px] text-sm leading-7 text-[#64748B] sm:text-base sm:leading-8">
              Have a project, an idea, or something
              you&apos;d like to discuss? Send me a
              message and I&apos;ll get back to you.
            </p>
          </div>

          <div className="mt-10 h-px w-full bg-[#1E293B]" />
        </motion.div>

        {/* =====================================================
            CONTACT CONTENT
            ===================================================== */}

        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16 xl:gap-20">
          {/* =================================================
              LEFT
              ================================================= */}

          <motion.div
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    x: -35,
                  }
            }
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.65,
              ease: "easeOut",
            }}
            className="flex flex-col"
          >
            <div>
              <h3 className="max-w-[440px] text-2xl font-semibold leading-tight tracking-[-0.03em] text-[#F8FAFC] sm:text-3xl">
                Let&apos;s build something useful.
              </h3>

              <p className="mt-6 max-w-[470px] text-sm leading-7 text-[#94A3B8] sm:text-base sm:leading-8">
                I&apos;m interested in working on
                full-stack applications, embedded
                systems, and projects where
                software and hardware come together.
              </p>
            </div>

            {/* Contact details */}
            <div className="mt-12 space-y-4">
              <div className="border-t border-[#1E293B] pt-5">
                <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#475569]">
                  Availability
                </p>

                <div className="mt-2 flex items-center gap-2">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-[#38BDF8]" />

                  <span className="text-sm text-[#CBD5E1]">
                    Open to opportunities
                  </span>
                </div>
              </div>

              <div className="border-t border-[#1E293B] pt-5">
                <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#475569]">
                  Focus
                </p>

                <p className="mt-2 text-sm text-[#CBD5E1]">
                  Full-Stack · Embedded · UI / UX
                </p>
              </div>
            </div>
          </motion.div>

          {/* =================================================
              FORM
              ================================================= */}

          <motion.div
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    x: 35,
                  }
            }
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.65,
              delay: shouldReduceMotion ? 0 : 0.1,
              ease: "easeOut",
            }}
            className="relative overflow-hidden rounded-[28px] border border-[#1E293B] bg-[#0F172A]/75 p-5 shadow-[0_30px_80px_rgba(0,0,0,0.22)] backdrop-blur-xl sm:p-8 lg:p-10"
          >
            {/* Left accent */}
            <div className="absolute bottom-0 left-0 top-0 w-px bg-gradient-to-b from-[#38BDF8] via-[#38BDF8]/30 to-transparent" />

            {/* Top glow */}
            <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-[#38BDF8]/5 blur-3xl" />

            <form
              onSubmit={handleSubmit}
              className="relative space-y-5"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.25em] text-[#64748B]"
                >
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  disabled={loading}
                  className="w-full rounded-xl border border-[#1E293B] bg-[#0B1120] px-4 py-3.5 text-sm text-[#F8FAFC] placeholder:text-[#475569] outline-none transition-all duration-300 focus:border-[#38BDF8]/50 focus:ring-1 focus:ring-[#38BDF8]/20 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.25em] text-[#64748B]"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  disabled={loading}
                  className="w-full rounded-xl border border-[#1E293B] bg-[#0B1120] px-4 py-3.5 text-sm text-[#F8FAFC] placeholder:text-[#475569] outline-none transition-all duration-300 focus:border-[#38BDF8]/50 focus:ring-1 focus:ring-[#38BDF8]/20 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.25em] text-[#64748B]"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me a little about your project..."
                  value={form.message}
                  onChange={handleChange}
                  disabled={loading}
                  className="min-h-[180px] w-full resize-y rounded-xl border border-[#1E293B] bg-[#0B1120] px-4 py-3.5 text-sm leading-7 text-[#F8FAFC] placeholder:text-[#475569] outline-none transition-all duration-300 focus:border-[#38BDF8]/50 focus:ring-1 focus:ring-[#38BDF8]/20 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={
                  shouldReduceMotion || loading
                    ? undefined
                    : {
                        y: -2,
                      }
                }
                whileTap={
                  shouldReduceMotion || loading
                    ? undefined
                    : {
                        scale: 0.98,
                      }
                }
                className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#38BDF8] to-[#7DD3FC] px-6 py-3.5 text-sm font-bold text-[#0B1120] shadow-lg shadow-[#38BDF8]/10 transition-all duration-300 hover:from-[#0EA5E9] hover:to-[#38BDF8] hover:shadow-xl hover:shadow-[#38BDF8]/20 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}

                {!loading && (
                  <span>→</span>
                )}
              </motion.button>

              {/* Status */}
              {status && (
                <motion.div
                  initial={
                    shouldReduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 10,
                        }
                  }
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="rounded-xl border border-[#1E293B] bg-[#0B1120] px-4 py-3 text-center"
                >
                  <p
                    className={`text-sm font-medium ${
                      status.includes("success")
                        ? "text-[#38BDF8]"
                        : "text-[#F87171]"
                    }`}
                  >
                    {status}
                  </p>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>

       
      </Container>
    </section>
  );
}