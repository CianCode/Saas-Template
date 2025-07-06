import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  description: "Saas Template",
  title:
    "Saas Template usign Next.js + Shadcn/ui + Postgresql + Drizzle + Stripe + BetterAuth + Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
