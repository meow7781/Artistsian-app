import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <section className="hero fade-in">
        <div className="hero-content">
          <span className="badge">Hyper-Local Immersive E-Commerce</span>
          <h1>Experience Bengal's Heritage Direct From The Artisan</h1>
          <p>
            Connect with rural weavers and potters globally. Discover 360° origin stories, 
            virtually try on traditional wear with AR, and converse live in English through real-time translation.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link href="/shop" className="btn btn-primary">
              Explore The Experience Store
            </Link>
            <Link href="/artisans" className="btn btn-outline">
              Meet The Artisans
            </Link>
          </div>
        </div>
      </section>

      <section className="container py-16 text-center">
        <h2 style={{ marginBottom: '3rem' }}>How Sanskriti-Flow Connects You</h2>
        <div className="grid grid-cols-3">
          <div className="card" style={{ padding: '2rem' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🎬</div>
            <h3>360° Origin Stories</h3>
            <p className="text-muted mt-4">Scan a product and be instantly transported to the artisan's village through immersive WebGL environments.</p>
          </div>
          <div className="card" style={{ padding: '2rem' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🥽</div>
            <h3>AR Try-On</h3>
            <p className="text-muted mt-4">Virtually try on Baluchari sarees or place Terracotta decor in your home before purchasing.</p>
          </div>
          <div className="card" style={{ padding: '2rem' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🗣️</div>
            <h3>Live Translation</h3>
            <p className="text-muted mt-4">Break language barriers. Video-chat with a weaver in Phulia while AI translates Bengali to English in real-time.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
