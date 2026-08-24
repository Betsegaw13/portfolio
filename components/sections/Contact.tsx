"use client";

import { useState } from "react";
import Container from "../ui/Container";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

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

    if (
      !form.name ||
      !form.email ||
      !form.message
    ) {
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
        setStatus(
          "Something went wrong."
        );
      }
    } catch {
      setStatus(
        "Error sending message."
      );
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        bg-[#0B1120]
        px-6
        py-28
        text-[#F8FAFC]
        md:px-10
        lg:py-36
        scroll-mt-24
      "
    >
      {/* =====================================================
          BACKGROUND GRID
          ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-40
        "
        style={{
          backgroundImage:
            "linear-gradient(rgba(56,189,248,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.025) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* =====================================================
          AMBIENT GLOW
          ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[35%]
          h-[500px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          blur-[120px]
        "
        style={{
          background:
            "radial-gradient(circle, rgba(14,165,233,0.045), transparent 70%)",
        }}
      />

      <Container>
        {/* ===================================================
            HEADER
            =================================================== */}

        <div className="relative mb-16 lg:mb-20">
          

          <div
            className="
              mt-7
              flex
              flex-col
              gap-8
              lg:flex-row
              lg:items-end
              lg:justify-between
            "
          >
            <div>
              <h2
                className="
                  text-5xl
                  font-bold
                  uppercase
                  leading-[0.9]
                  tracking-[-0.055em]
                  sm:text-6xl
                  lg:text-8xl
                "
              >
                Let&apos;s
                <br />
                <span className="text-[#94A3B8]">
                  Talk.
                </span>
              </h2>
            </div>

            <p
              className="
                max-w-[470px]
                text-sm
                leading-7
                text-[#64748B]
                sm:text-base
                sm:leading-8
              "
            >
              Have a project, an idea, or
              something you&apos;d like to discuss?
              Send me a message and I&apos;ll get
              back to you.
            </p>
          </div>

          <div className="mt-10 h-px w-full bg-[#1E293B]" />
        </div>

        {/* ===================================================
            CONTACT AREA
            =================================================== */}

        <div
          className="
            grid
            gap-12
            lg:grid-cols-[0.8fr_1.2fr]
            lg:gap-20
          "
        >
          {/* =================================================
              LEFT INFORMATION
              ================================================= */}

          <div className="flex flex-col justify-between">
            <div>
              <p
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.32em]
                  text-[#38BDF8]
                "
              >
                Open to opportunities
              </p>

              <h3
                className="
                  mt-5
                  max-w-[420px]
                  text-2xl
                  font-semibold
                  leading-tight
                  tracking-[-0.03em]
                  text-[#F8FAFC]
                  sm:text-3xl
                "
              >
                Let&apos;s build something
                useful.
              </h3>

              <p
                className="
                  mt-6
                  max-w-[470px]
                  text-sm
                  leading-7
                  text-[#94A3B8]
                  sm:text-base
                  sm:leading-8
                "
              >
                I&apos;m interested in working on
                full-stack applications,
                embedded systems, and projects
                where software and hardware come
                together.
              </p>
            </div>

            {/* Contact metadata */}

            <div className="mt-12 space-y-5">
              <div
                className="
                  border-t
                  border-[#1E293B]
                  pt-5
                "
              >
                <span
                  className="
                    block
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-[#475569]
                  "
                >
                  Availability
                </span>

                <span
                  className="
                    mt-2
                    block
                    text-sm
                    text-[#CBD5E1]
                  "
                >
                  Open to opportunities
                </span>
              </div>

              <div
                className="
                  border-t
                  border-[#1E293B]
                  pt-5
                "
              >
                <span
                  className="
                    block
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-[#475569]
                  "
                >
                  Focus
                </span>

                <span
                  className="
                    mt-2
                    block
                    text-sm
                    text-[#CBD5E1]
                  "
                >
                  Full-Stack · Embedded · UI / UX
                </span>
              </div>
            </div>
          </div>

          {/* =================================================
              FORM
              ================================================= */}

          <div
            className="
              relative
              overflow-hidden
              rounded-3xl
              border
              border-[#1E293B]
              bg-[#0F172A]
              p-6
              sm:p-8
              lg:p-10
            "
          >
            {/* Accent line */}

            <div
              aria-hidden="true"
              className="
                absolute
                bottom-0
                left-0
                top-0
                w-px
                bg-gradient-to-b
                from-[#38BDF8]
                via-[#38BDF8]/30
                to-transparent
              "
            />

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              {/* Name */}

              <div>
                <label
                  htmlFor="name"
                  className="
                    mb-2
                    block
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-[#64748B]
                  "
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
                  className="
                    w-full
                    rounded-xl
                    border
                    border-[#1E293B]
                    bg-[#0B1120]
                    px-4
                    py-3.5
                    text-sm
                    text-[#F8FAFC]
                    placeholder:text-[#475569]
                    outline-none
                    transition-all
                    duration-300
                    focus:border-[#38BDF8]/50
                    focus:ring-1
                    focus:ring-[#38BDF8]/20
                    disabled:cursor-not-allowed
                    disabled:opacity-50
                  "
                />
              </div>

              {/* Email */}

              <div>
                <label
                  htmlFor="email"
                  className="
                    mb-2
                    block
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-[#64748B]
                  "
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
                  className="
                    w-full
                    rounded-xl
                    border
                    border-[#1E293B]
                    bg-[#0B1120]
                    px-4
                    py-3.5
                    text-sm
                    text-[#F8FAFC]
                    placeholder:text-[#475569]
                    outline-none
                    transition-all
                    duration-300
                    focus:border-[#38BDF8]/50
                    focus:ring-1
                    focus:ring-[#38BDF8]/20
                    disabled:cursor-not-allowed
                    disabled:opacity-50
                  "
                />
              </div>

              {/* Message */}

              <div>
                <label
                  htmlFor="message"
                  className="
                    mb-2
                    block
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-[#64748B]
                  "
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
                  className="
                    min-h-[170px]
                    w-full
                    resize-y
                    rounded-xl
                    border
                    border-[#1E293B]
                    bg-[#0B1120]
                    px-4
                    py-3.5
                    text-sm
                    leading-7
                    text-[#F8FAFC]
                    placeholder:text-[#475569]
                    outline-none
                    transition-all
                    duration-300
                    focus:border-[#38BDF8]/50
                    focus:ring-1
                    focus:ring-[#38BDF8]/20
                    disabled:cursor-not-allowed
                    disabled:opacity-50
                  "
                />
              </div>

              {/* Submit */}

              <button
                type="submit"
                disabled={loading}
                className="
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-xl
                  bg-[#38BDF8]
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-[#0B1120]
                  transition-all
                  duration-300
                  hover:bg-[#0EA5E9]
                  disabled:cursor-not-allowed
                  disabled:opacity-50
                "
              >
                {loading
                  ? "Sending..."
                  : "Send Message"}

                {!loading && (
                  <span>→</span>
                )}
              </button>

              {/* Status */}

              {status && (
                <div
                  className="
                    rounded-xl
                    border
                    border-[#1E293B]
                    bg-[#0B1120]
                    px-4
                    py-3
                    text-center
                  "
                >
                  <p
                    className={`
                      text-sm
                      font-medium
                      ${
                        status.includes(
                          "success"
                        )
                          ? "text-[#38BDF8]"
                          : "text-[#F87171]"
                      }
                    `}
                  >
                    {status}
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* ===================================================
            BOTTOM STATEMENT
            =================================================== */}

        <div
          className="
            mt-24
            border-t
            border-[#1E293B]
            pt-8
            text-center
            sm:mt-28
            sm:pt-10
          "
        >
          <p
            className="
              mx-auto
              max-w-[800px]
              text-lg
              font-medium
              leading-8
              text-[#CBD5E1]
              sm:text-2xl
            "
          >
            Have something worth building?{" "}
            <span className="text-[#38BDF8]">
              Let&apos;s talk.
            </span>
          </p>
        </div>
      </Container>
    </section>
  );
}