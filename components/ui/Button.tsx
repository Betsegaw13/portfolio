import React from "react";

type Variant = "primary" | "secondary";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "inline-block px-6 py-3 rounded-lg font-medium transition duration-300 text-center";

  const styles: Record<Variant, string> = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700",

    secondary:
      "border border-gray-300 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800",
  };

  return (
    <a
      href={href}
      className={`${base} ${styles[variant]} ${className}`}
    >
      {children}
    </a>
  );
}