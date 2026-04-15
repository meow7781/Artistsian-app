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
  title: "Sanskriti-Flow | Rural Artisans Experience Store",
  description:
    "Connect with Bengal's rural artisans through immersive storytelling, AR try-ons, and real-time live translation.",
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
              Sanskriti-Flow
            </Link>
            <div className="nav-links">
              <Link href="/">Home</Link>
              <Link href="/sign-in">Sign In</Link>
              <Link href="/sign-up" className="nav-cta">
                Sign Up
              </Link>
            </div>
          </nav>
        </header>
        {children}
        <footer className="site-footer">
          <div className="container footer-grid">
            <div>
              <Link href="/" className="logo">
                Sanskriti-Flow
              </Link>
              <p className="text-muted footer-copy">
                A digital bridge between Bengal&apos;s artisans and global buyers seeking craft with
                story, provenance, and care.
              </p>
            </div>

            <div className="footer-links">
              <span className="footer-title">Explore</span>
              <Link href="/">Landing Page</Link>
              <Link href="/sign-in">Sign In</Link>
              <Link href="/sign-up">Sign Up</Link>
            </div>

            <div className="footer-links">
              <span className="footer-title">Contact</span>
              <a href="mailto:hello@sanskritiflow.com">hello@sanskritiflow.com</a>
              <span>Kolkata, India</span>
              <span>Craft stories, digitally shared</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
