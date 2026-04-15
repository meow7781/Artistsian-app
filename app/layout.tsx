import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sanskriti-Flow | Rural Artisans Experience Store",
  description: "Connect with Bengal's rural artisans through immersive storytelling, AR try-ons, and real-time live translation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable}`}>
        <nav className="nav container fade-in">
          <div className="logo"><a href="/">Sanskriti-Flow</a></div>
          <div className="nav-links">
            <a href="/">Home</a>
            <a href="/shop">Shop</a>
            <a href="/artisans">Artisans</a>
            <a href="/connect">Live Connect</a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
