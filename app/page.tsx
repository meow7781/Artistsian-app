import Link from "next/link";

const featureCards = [
  {
    title: "360° Origin Stories",
    text: "Step into each artisan's village through immersive product stories that turn every item into a living piece of culture.",
    accent: "Story-led shopping",
  },
  {
    title: "AR Try-On Experiences",
    text: "Preview drape, fit, and home placement before checkout so customers can buy handcrafted products with confidence.",
    accent: "Confidence before purchase",
  },
  {
    title: "Live Language Bridge",
    text: "Make real conversations possible between global buyers and Bengali-speaking makers with AI-assisted translation.",
    accent: "Human connection at scale",
  },
];

const journeySteps = [
  "Discover artisan-led collections curated by region, craft, and festival season.",
  "Explore the making process with video, spatial scenes, and transparent sourcing details.",
  "Build trust through direct conversations, custom orders, and story-rich delivery updates.",
];

const highlights = [
  { value: "120+", label: "artisan families onboarded across Bengal clusters" },
  { value: "4x", label: "higher engagement when products include immersive storytelling" },
  { value: "24/7", label: "global access to local craft experiences and live commerce" },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-backdrop" />
        <div className="container hero-shell fade-in">
          <div className="hero-copy">
            <span className="badge">Immersive Commerce For Rural Craft</span>
            <h1>Bring Bengal&apos;s handmade heritage to the world with story-first shopping.</h1>
            <p>
              Sanskriti-Flow helps artisans sell through cinematic storytelling, virtual product
              previews, and direct multilingual conversations that feel personal from the first click.
            </p>
            <div className="hero-actions">
              <Link href="/sign-up" className="btn btn-primary">
                Start Selling
              </Link>
              <Link href="/sign-in" className="btn btn-outline">
                Sign In
              </Link>
            </div>
          </div>

          <div className="hero-panel card">
            <p className="eyebrow">This season&apos;s spotlight</p>
            <h2>Phulia Weave House</h2>
            <p className="text-muted">
              Launch capsule collections with provenance stories, artisan notes, and live buyer
              consultations from one branded storefront.
            </p>
            <div className="hero-panel-grid">
              {highlights.map((item) => (
                <div key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Why it works</span>
            <h2>More than a storefront. It&apos;s a cultural commerce layer.</h2>
            <p className="text-muted">
              Every interaction is designed to preserve craft knowledge while making discovery,
              trust, and purchase easier for modern buyers.
            </p>
          </div>

          <div className="grid grid-cols-3">
            {featureCards.map((card) => (
              <article key={card.title} className="card feature-card">
                <span className="pill">{card.accent}</span>
                <h3>{card.title}</h3>
                <p className="text-muted">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container split-layout">
          <div>
            <span className="eyebrow">Buyer journey</span>
            <h2>Design trust into every step of the customer experience.</h2>
            <p className="text-muted">
              From discovery to delivery, the platform gives customers context, confidence, and a
              genuine connection to the maker behind each product.
            </p>
          </div>

          <div className="journey-list">
            {journeySteps.map((step, index) => (
              <div key={step} className="journey-item card">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container cta-band card">
          <div>
            <span className="eyebrow">Get started</span>
            <h2>Create your artisan account and begin building your digital bazaar.</h2>
            <p className="text-muted">
              Start with a simple profile today and expand later into product showcases, live
              selling, and immersive storytelling.
            </p>
          </div>
          <div className="hero-actions">
            <Link href="/sign-up" className="btn btn-primary">
              Create Account
            </Link>
            <Link href="/sign-in" className="btn btn-outline">
              Member Login
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
