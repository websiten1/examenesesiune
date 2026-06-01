import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://examenesesiune.vercel.app"),
  title: "Calendar și rezumate sesiune, Anul II",
  description:
    "Calendarul examenelor și materialele de studiu pentru sesiunea Facultății de Teologie Ortodoxă «Sfântul Dumitru Stăniloae», Anul II.",
  openGraph: {
    title: "Calendar și rezumate sesiune, Anul II",
    description:
      "Calendarul examenelor și materialele de studiu pentru sesiunea Facultății de Teologie Ortodoxă «Sfântul Dumitru Stăniloae», Anul II.",
    images: [{ url: "/og-image.jpg", width: 1536, height: 1152 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calendar și rezumate sesiune, Anul II",
    description:
      "Calendarul examenelor și materialele de studiu pentru sesiunea Facultății de Teologie Ortodoxă «Sfântul Dumitru Stăniloae», Anul II.",
    images: ["/og-image.jpg"],
  },
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
