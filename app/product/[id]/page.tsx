"use client";

import Link from "next/link";
import { ArrowLeft, MessageCircle, Maximize2, ShoppingCart } from "lucide-react";
import { useState } from "react";

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock product data - in real app would come from API
  const product = {
    id: params.id,
    name: "Handwoven Phulia Saree",
    artisan: "Renu Dey",
    village: "Phulia, West Bengal",
    price: "$180",
    rating: 4.9,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80",
    description:
      "This exquisite handwoven saree from Phulia showcases generations of textile artistry. Each thread is carefully selected and naturally dyed using traditional indigo techniques that have been preserved for centuries.",
    story:
      "The journey of this saree begins in the looms of Phulia, a small village in West Bengal known for its legendary weavers. Renu Dey comes from a family of weavers with over 150 years of weaving heritage. She sources the finest cotton from local suppliers and uses natural dyes derived from indigo leaves harvested in nearby fields.",
    specifications: [
      "Material: 100% Pure Cotton",
      "Weave: Hand-loom",
      "Dye: Natural Indigo",
      "Length: 6 yards (5.5m)",
      "Width: 42 inches",
      "Care: Hand wash in cold water",
    ],
    artisanInfo: {
      name: "Renu Dey",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
      village: "Phulia, West Bengal",
      experience: "28 years of weaving experience",
      bio: "Renu is a master weaver trained by her grandmother. She specializes in traditional patterns and natural dyes.",
    },
  };

  return (
    <main className="pt-20">
      {/* BREADCRUMB */}
      <div className="container py-4 flex items-center gap-2">
        <Link href="/explore" className="flex items-center gap-2 text-gold hover:text-gold-light transition">
          <ArrowLeft className="w-4 h-4" />
          Back to Products
        </Link>
      </div>

      {/* PRODUCT LAYOUT */}
      <section className="container py-12 grid grid-cols-2 gap-12">
        {/* LEFT: IMAGES */}
        <div>
          <div className="mb-6 rounded-lg overflow-hidden bg-surface-light h-96">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT: INFO */}
        <div>
          <div className="mb-8">
            <p className="text-gold text-sm font-semibold mb-2">HANDMADE IN {product.village.toUpperCase()}</p>
            <h1 className="text-4xl font-serif mb-2">{product.name}</h1>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-gold text-lg font-semibold">{product.rating}★</span>
              <span className="text-text-muted">({product.reviews} reviews)</span>
            </div>
          </div>

          {/* PRICE */}
          <div className="mb-8 pb-8 border-b border-border">
            <p className="text-4xl font-serif text-gold mb-2">{product.price}</p>
            <p className="text-text-light">One-time purchase • Ships within 7 days</p>
          </div>

          {/* DESCRIPTION */}
          <div className="mb-8">
            <h3 className="text-xl font-serif text-gold mb-4">About This Piece</h3>
            <p className="text-text-light leading-relaxed">{product.description}</p>
          </div>

          {/* SPECIFICATIONS */}
          <div className="mb-8 pb-8 border-b border-border">
            <h3 className="text-xl font-serif text-gold mb-4">Specifications</h3>
            <ul className="space-y-2">
              {product.specifications.map((spec) => (
                <li key={spec} className="text-text-light flex items-start gap-2">
                  <span className="text-gold mt-1">▪</span>
                  {spec}
                </li>
              ))}
            </ul>
          </div>

          {/* BUTTONS */}
          <div className="flex gap-4">
            <Link href={`/experience/${product.id}`} className="flex-1 btn btn-secondary">
              <Maximize2 className="w-4 h-4" />
              360° Experience
            </Link>
            <Link href={`/chat/artisan-${product.id}`} className="flex-1 btn btn-ghost">
              <MessageCircle className="w-4 h-4" />
              Chat Artisan
            </Link>
            <Link href="/checkout" className="flex-1 btn btn-primary">
              <ShoppingCart className="w-4 h-4" />
              Buy Now
            </Link>
          </div>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="bg-surface-light py-16 border-t border-border">
        <div className="container">
          <div className="grid grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-serif text-gold mb-6">The Artisan's Story</h2>
              <p className="text-text-light leading-relaxed mb-6">{product.story}</p>
              <p className="text-text-light leading-relaxed">
                By purchasing this saree, you're directly supporting Renu and her family, enabling her to continue this beautiful tradition and train the next generation of weavers.
              </p>
            </div>

            {/* ARTISAN CARD */}
            <div className="bg-surface p-8 rounded-lg border border-border text-center">
              <img
                src={product.artisanInfo.image}
                alt="Artisan"
                className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-gold"
              />
              <h3 className="text-2xl font-serif text-gold mb-2">{product.artisanInfo.name}</h3>
              <p className="text-text-muted mb-4">{product.artisanInfo.village}</p>
              <p className="text-sm text-gold mb-4 font-semibold">{product.artisanInfo.experience}</p>
              <p className="text-text-light mb-6">{product.artisanInfo.bio}</p>
              <Link href={`/chat/artisan-${product.id}`} className="btn btn-primary w-full">
                Message {product.artisanInfo.name}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SIMILAR PRODUCTS */}
      <section className="container py-16">
        <h2 className="text-3xl font-serif mb-12">More from this Artisan</h2>
        <div className="product-grid">
          {[1, 2, 3].map((i) => (
            <Link key={i} href={`/product/${i}`} className="block">
              <div className="product-card">
                <div className="product-image-wrapper">
                  <img
                    src={`https://images.unsplash.com/photo-${1599643478518 + i}?auto=format&fit=crop&w=500&q=80`}
                    alt="Similar product"
                    className="product-image"
                  />
                </div>
                <div className="product-info">
                  <h3 className="product-name">Similar Saree {i}</h3>
                  <p className="product-artisan">Renu Dey • Weaver</p>
                  <p className="product-price">${120 + i * 20}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
