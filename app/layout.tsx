import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import BackgroundMusic from "@/components/BackgroundMusic";
import FallingFlowers from "@/components/FallingFlowers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Vijay & Trisha - Wedding Invitation",
  description:
    "You are invited to celebrate the wedding of Vijay and Trisha on March 15th, 2026 in Chennai. Join us for a day filled with joy, love, and unforgettable moments.",
  generator: "v0.app",
  keywords: [
    "wedding",
    "invitation",
    "celebrate",
    "marriage",
    "vijay",
    "trisha",
  ],
  authors: [{ name: "Vijay & Trisha" }],
  icons: "/favicon.jpg", // ✅ single icon as a string
  metadataBase: new URL("https://Vijay&TrishaWeddingInvitation.com"),
  openGraph: {
    title: "Vijay & Trisha - Wedding Invitation",
    description: "Join us to celebrate our special day on March 15th, 2026",
    type: "website",
    images: [
      {
        url: "/wedding-og-image.png",
        width: 1200,
        height: 630,
        alt: "Wedding Invitation",
      },
    ],
  },
};

// ✅ Move viewport out of metadata
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.jpg" />
      </head>
      <body
        className={`${poppins.variable} font-poppins antialiased bg-gradient-to-br from-[#f8f5ef] via-[#fdfaf6] to-[#f3e6c9] min-h-screen`}
      >
        <BackgroundMusic />
        <FallingFlowers />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
