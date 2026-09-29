import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kami — Credit Intelligence + K Pay",
  description: "A unified financial intelligence and universal payment experience.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
