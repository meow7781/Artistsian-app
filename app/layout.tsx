import type { Metadata } from "next";
import Link from "next/link";
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
  title: "Sanskriti-Flow | Experience Handmade Culture",
  description:
    "Connect with Bengal's rural artisans through immersive storytelling, real-time translation, and authentic handcrafted products.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.svg", sizes: "192x192", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Sanskriti-Flow | Experience Handmade Culture",
    description: "Connect with Bengal's rural artisans through immersive storytelling and authentic handcrafted products.",
    images: [{ url: "/icon.svg" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable}`}>
        <header className="site-header">
          <nav className="nav container fade-in">
            <Link href="/" className="logo">
              ✨ Sanskriti-Flow
            </Link>
            <div className="nav-links">
              <Link href="/explore">Explore</Link>
              <Link href="/chat">Chat</Link>
              <Link href="/checkout" className="nav-cta">
                Cart
              </Link>
            </div>
          </nav>
        </header>

        <main className="content-wrapper">
          {children}
        </main>

        <footer className="site-footer">
          <div className="container footer-grid">
            <div>
              <Link href="/" className="logo">
                ✨ Sanskriti-Flow
              </Link>
              <p className="footer-copy">
                Supporting rural artisans through direct sales and authentic storytelling. Every purchase directly
                empowers makers and preserves cultural heritage.
              </p>
            </div>
            <div className="footer-section">
              <h4>Shop</h4>
              <div className="footer-links">
                <Link href="/explore">All Products</Link>
                <Link href="/explore">Sarees</Link>
                <Link href="/explore">Pottery</Link>
                <Link href="/explore">Handmade</Link>
              </div>
            </div>
            <div className="footer-section">
              <h4>About</h4>
              <div className="footer-links">
                <Link href="#">Our Story</Link>
                <Link href="#">Artisans</Link>
                <Link href="#">Blog</Link>
                <Link href="#">Sustainability</Link>
              </div>
            </div>
            <div className="footer-section">
              <h4>Support</h4>
              <div className="footer-links">
                <Link href="#">Contact</Link>
                <Link href="#">FAQ</Link>
                <Link href="#">Shipping</Link>
                <Link href="#">Returns</Link>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Sanskriti-Flow. All rights reserved. | Empowering artisans, preserving culture.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
