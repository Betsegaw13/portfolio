"use client";

import { useState } from "react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ basic validation
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
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("Something went wrong.");
      }
    } catch (error) {
      setStatus("Error sending message.");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-gray-900">
      <Container>
        <SectionTitle title="Contact Me" />

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4 mt-10">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            disabled={loading}
            className="w-full border border-gray-300 dark:border-gray-700 p-3 rounded-lg bg-transparent dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            disabled={loading}
            className="w-full border border-gray-300 dark:border-gray-700 p-3 rounded-lg bg-transparent dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            disabled={loading}
            className="w-full border border-gray-300 dark:border-gray-700 p-3 rounded-lg h-32 bg-transparent dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status && (
            <p
              className={`text-sm text-center font-medium ${
                status.includes("success")
                  ? "text-green-600"
                  : "text-red-500"
              }`}
            >
              {status}
            </p>
          )}
        </form>
      </Container>
    </section>
  );
}