import "./globals.css";
import ThemeToggle from "@/components/ui/ThemeToggle";
export const metadata = {
  title: "Betsegaw Portfolio",
  description: "Personal portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white">
  {children}
</body>
    </html>
  );
}