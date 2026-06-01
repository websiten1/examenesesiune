import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Calendar sesiune — Teologie Ortodoxă, Anul II",
  description:
    "Calendarul examenelor și materialele de studiu pentru sesiunea Facultății de Teologie Ortodoxă «Sf. Dumitru Stăniloae», Anul II.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className="h-full">
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
