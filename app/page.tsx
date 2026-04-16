"use client";

import Link from "next/link";
import { ChevronDown, MapPin, Zap } from "lucide-react";
import { useEffect, useState } from "react";

export default function LandingPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main>
      {/* HERO SECTION - IMMERSIVE */}
      <section className="hero" style={{ marginTop: 0 }}>
        <video
          className="hero-background"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=1600&q=80"
        >
          <source
            src="https://videos.pexels.com/video-files/3571137/3571137-hd_1920_1080_30fps.mp4"
            type="video/mp4"
          />
        </video>

        {/* Multi-layer gradient overlay for luxury effect */}
        <div
          className="hero-overlay"
          style={{
            background: `linear-gradient(135deg, rgba(13, 13, 13, 0.75) 0%, rgba(13, 13, 13, 0.5) 50%, rgba(13, 13, 13, 0.7) 100%)`,
          }}
        />

        <div className="hero-content" style={{ marginTop: '80px' }}>
          <div style={{ animation: 'fadeInUp 1s ease-out' }}>
            <p
              style={{
                fontSize: '0.9rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                marginBottom: '1rem',
                fontWeight: 600,
              }}
            >
              Welcome to Sanskriti-Flow
            </p>
            <h1
              className="hero-title"
              style={{
                fontSize: '6rem',
                fontWeight: 700,
                lineHeight: 1.1,
                marginBottom: '1.5rem',
                textShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
              }}
            >
              Every Product
              <br />
              Has a Story
            </h1>
            <p
              className="hero-subtitle"
              style={{
                fontSize: '1.75rem',
                maxWidth: '700px',
                marginBottom: '2rem',
                textShadow: '0 4px 16px rgba(0, 0, 0, 0.4)',
                fontWeight: 300,
              }}
            >
              Experience authentic handmade culture from the roots of Bengal, crafted with generations of tradition
            </p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '2rem' }}>
            <Link href="/explore" className="btn btn-primary btn-large">
              Explore Collection
            </Link>
            <a href="#featured" className="btn btn-ghost btn-large">
              Learn How It Works
            </a>
          </div>
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            left: '50%',
            transform: `translateY(${scrollY * 0.3}px) translateX(-50%)`,
            zIndex: 20,
          }}
        >
          <ChevronDown size={32} style={{ color: 'var(--gold)', animation: 'float 3s ease-in-out infinite' }} />
        </div>
      </section>

      {/* FEATURED COLLECTION - LUXURY SHOWCASE */}
      <section id="featured" className="container py-32">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p
            style={{
              fontSize: '0.85rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: '1rem',
              fontWeight: 600,
            }}
          >
            Curated Selection
          </p>
          <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', fontFamily: 'var(--font-serif)' }}>
            Artisan Treasures
          </h2>
          <p
            style={{
              fontSize: '1.1rem',
              color: 'var(--text-light)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.8,
            }}
          >
            Handcrafted pieces from Bengal's most talented artisans. Each product carries generations of tradition and cultural storytelling.
          </p>
        </div>

        {/* Featured Products Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2.5rem', marginBottom: '3rem' }}>
          {/* Product 1 */}
          <Link href="/product/1">
            <div className="product-card" style={{ cursor: 'pointer', height: '100%' }}>
              <div className="product-image-wrapper" style={{ marginBottom: 0 }}>
                <img
                  src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80"
                  alt="Phulia Saree"
                  className="product-image"
                  style={{ width: '100%', height: '360px' }}
                />
              </div>
              <div className="product-info" style={{ padding: '2rem' }}>
                <div style={{ marginBottom: '1rem' }}>
                  <p style={{ fontSize: '0.8rem', color: 'var(--gold)', fontWeight: 600, marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    Sarees
                  </p>
                  <h3 className="product-name" style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>
                    Handwoven Phulia Saree
                  </h3>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <p className="product-artisan" style={{ fontSize: '0.9rem', marginBottom: '0.25rem' }}>
                    Renu Dey • Weaver
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                    <MapPin size={14} style={{ color: 'var(--gold)' }} />
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Phulia, West Bengal</p>
                  </div>
                </div>

                <p className="product-price" style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>
                  $180
                </p>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-light)', lineHeight: 1.7 }}>
                  Intricate patterns with natural indigo dyes, hand-woven on traditional looms
                </p>
              </div>
            </div>
          </Link>

          {/* Product 2 */}
          <Link href="/product/2">
            <div className="product-card" style={{ cursor: 'pointer', height: '100%' }}>
              <div className="product-image-wrapper" style={{ marginBottom: 0 }}>
                <img
                  src="https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=600&q=80"
                  alt="Terracotta Pottery"
                  className="product-image"
                  style={{ width: '100%', height: '360px' }}
                />
              </div>
              <div className="product-info" style={{ padding: '2rem' }}>
                <div style={{ marginBottom: '1rem' }}>
                  <p style={{ fontSize: '0.8rem', color: 'var(--gold)', fontWeight: 600, marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    Pottery
                  </p>
                  <h3 className="product-name" style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>
                    Terracotta Pottery Set
                  </h3>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <p className="product-artisan" style={{ fontSize: '0.9rem', marginBottom: '0.25rem' }}>
                    Sujit Nath • Potter
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                    <MapPin size={14} style={{ color: 'var(--gold)' }} />
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Khurja, Uttar Pradesh</p>
                  </div>
                </div>

                <p className="product-price" style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>
                  $95
                </p>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-light)', lineHeight: 1.7 }}>
                  Hand-sculpted using century-old techniques, fired in traditional kilns
                </p>
              </div>
            </div>
          </Link>

          {/* Product 3 */}
          <Link href="/product/3">
            <div className="product-card" style={{ cursor: 'pointer', height: '100%' }}>
              <div className="product-image-wrapper" style={{ marginBottom: 0 }}>
                <img
                  src="https://images.unsplash.com/photo-1534400327717-dac8e65e7d7f?auto=format&fit=crop&w=600&q=80"
                  alt="Bronze Figurine"
                  className="product-image"
                  style={{ width: '100%', height: '360px' }}
                />
              </div>
              <div className="product-info" style={{ padding: '2rem' }}>
                <div style={{ marginBottom: '1rem' }}>
                  <p style={{ fontSize: '0.8rem', color: 'var(--gold)', fontWeight: 600, marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    Sculptural Art
                  </p>
                  <h3 className="product-name" style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>
                    Bronze Dancing Figurine
                  </h3>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <p className="product-artisan" style={{ fontSize: '0.9rem', marginBottom: '0.25rem' }}>
                    Amit Sharma • Sculptor
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                    <MapPin size={14} style={{ color: 'var(--gold)' }} />
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Moradabad, Uttar Pradesh</p>
                  </div>
                </div>

                <p className="product-price" style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>
                  $240
                </p>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-light)', lineHeight: 1.7 }}>
                  Lost-wax casting technique depicting classical Indian dance forms
                </p>
              </div>
            </div>
          </Link>
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link href="/explore" className="btn btn-primary btn-large">
            Explore Full Collection
          </Link>
        </div>
      </section>

      {/* WHY SANSKRITI-FLOW - BENEFITS */}
      <section style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2
              style={{
                fontSize: '3.5rem',
                fontFamily: 'var(--font-serif)',
                marginBottom: '1.5rem',
              }}
            >
              Why Choose Sanskriti-Flow?
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-light)', maxWidth: '600px', margin: '0 auto' }}>
              We're building bridges between global collectors and rural artisans
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '3rem',
              maxWidth: '900px',
              margin: '0 auto',
            }}
          >
            {/* Feature 1 */}
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--gold), var(--gold-light))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <span style={{ fontSize: '1.5rem' }}>🎨</span>
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-serif)', color: 'var(--gold)', marginBottom: '0.5rem' }}>
                  Authentic Craft
                </h3>
                <p style={{ color: 'var(--text-light)', lineHeight: 1.7 }}>
                  Every product is genuinely handmade using traditional techniques passed down through generations.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--gold), var(--gold-light))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <span style={{ fontSize: '1.5rem' }}>🤝</span>
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-serif)', color: 'var(--gold)', marginBottom: '0.5rem' }}>
                  Direct Connection
                </h3>
                <p style={{ color: 'var(--text-light)', lineHeight: 1.7 }}>
                  Chat directly with makers, learn their stories, and support rural communities across South Asia.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--gold), var(--gold-light))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <span style={{ fontSize: '1.5rem' }}>💬</span>
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-serif)', color: 'var(--gold)', marginBottom: '0.5rem' }}>
                  Real-Time Translation
                </h3>
                <p style={{ color: 'var(--text-light)', lineHeight: 1.7 }}>
                  Instant AI translation between Bengali and English. Break language barriers with artisans.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--gold), var(--gold-light))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <span style={{ fontSize: '1.5rem' }}>🌐</span>
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-serif)', color: 'var(--gold)', marginBottom: '0.5rem' }}>
                  360° Experience
                </h3>
                <p style={{ color: 'var(--text-light)', lineHeight: 1.7 }}>
                  View products in complete 360-degree detail before purchasing. Explore every crafted detail.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS - JOURNEY */}
      <section className="container py-32">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p
            style={{
              fontSize: '0.85rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: '1rem',
              fontWeight: 600,
            }}
          >
            The Experience
          </p>
          <h2
            style={{
              fontSize: '3.5rem',
              fontFamily: 'var(--font-serif)',
              marginBottom: '1.5rem',
            }}
          >
            How It Works
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '2rem',
            maxWidth: '1000px',
            margin: '0 auto',
          }}
        >
          {[
            { num: '1', title: 'Explore', desc: 'Browse artisan products from verified makers' },
            { num: '2', title: 'Connect', desc: 'Chat with creators about their craft' },
            { num: '3', title: 'Experience', desc: 'View in 360° and read stories' },
            { num: '4', title: 'Support', desc: 'Purchase and support artisans' },
          ].map((step) => (
            <div key={step.num} style={{ textAlign: 'center' }}>
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, var(--gold), var(--gold-light))`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                  fontSize: '2.5rem',
                  fontFamily: 'var(--font-serif)',
                  fontWeight: 700,
                  color: 'var(--background)',
                }}
              >
                {step.num}
              </div>
              <h3 style={{ fontSize: '1.3rem', fontFamily: 'var(--font-serif)', marginBottom: '0.5rem' }}>
                {step.title}
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-light)' }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA - LUXURY */}
      <section
        style={{
          background: `linear-gradient(135deg, rgba(13, 13, 13, 0.95) 0%, rgba(13, 13, 13, 0.9) 100%), 
                        url('https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=1200&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          borderTop: '1px solid var(--border)',
          padding: '6rem 0',
          textAlign: 'center',
          color: 'white',
          marginTop: '4rem',
        }}
      >
        <div className="container">
          <h2
            style={{
              fontSize: '3rem',
              fontFamily: 'var(--font-serif)',
              marginBottom: '1.5rem',
              textShadow: '0 4px 16px rgba(0, 0, 0, 0.5)',
            }}
          >
            Ready to Discover?
          </h2>
          <p
            style={{
              fontSize: '1.2rem',
              maxWidth: '600px',
              margin: '0 auto 2rem',
              color: 'var(--text-light)',
              lineHeight: 1.8,
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.4)',
            }}
          >
            Join thousands of collectors supporting authentic craftsmanship and rural artisans. Every purchase creates impact.
          </p>
          <Link href="/explore" className="btn btn-primary btn-large">
            Start Exploring
          </Link>
        </div>
      </section>
    </main>
  );
}
