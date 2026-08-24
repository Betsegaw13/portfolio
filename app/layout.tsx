import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Betsegaw Merid | Full-Stack Developer",
    template: "%s | Betsegaw Merid",
  },

  description:
    "Portfolio of Betsegaw Merid, an Electrical and Computer Engineer focused on Full-Stack Development, Embedded Systems, and modern web applications.",

  keywords: [
    "Betsegaw Merid",
    "Portfolio",
    "Full-Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Embedded Systems",
    "Arduino",
    "Software Engineer",
    "Electrical and Computer Engineering",
    "Ethiopia",
  ],

  authors: [
    {
      name: "Betsegaw Merid",
    },
  ],

  creator: "Betsegaw Merid",

  openGraph: {
    title: "Betsegaw Merid | Full-Stack Developer",

    description:
      "Explore Betsegaw Merid's portfolio featuring full-stack web development, embedded systems, and software engineering projects.",

    url: "https://portfolio-seven-orcin-97.vercel.app",

    siteName: "Betsegaw Portfolio",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Betsegaw Merid Portfolio",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Betsegaw Merid | Full-Stack Developer",

    description:
      "Portfolio showcasing full-stack web applications, embedded systems, and software engineering projects.",

    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#0B1120] text-[#F8FAFC] antialiased">
        {children}
      </body>
    </html>
  );
}