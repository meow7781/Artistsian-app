"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Experience360Page({ params }: { params: { id: string } }) {
  return (
    <main className="pt-20">
      {/* BREADCRUMB */}
      <div className="container py-4">
        <Link href={`/product/${params.id}`} className="flex items-center gap-2 text-gold hover:text-gold-light transition">
          <ArrowLeft className="w-4 h-4" />
          Back to Product
        </Link>
      </div>

      {/* 360 VIEWER */}
      <section className="container py-12">
        <h1 className="text-4xl font-serif mb-8">360° Product Experience</h1>

        <div className="viewer-360">
          <div className="viewer-hint">
            <p className="mb-4">Drag to rotate • Scroll to zoom</p>
            <p className="text-lg font-serif">↔ Drag to explore ↔</p>
          </div>

          {/* Placeholder for 3D model viewer */}
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=400&q=80"
                alt="Product"
                className="max-w-md mx-auto mb-8 rounded-lg"
              />
              <p className="text-text-light text-lg">
                Interactive 360° viewer powered by Three.js
              </p>
            </div>
          </div>
        </div>

        {/* PRODUCT INFO BELOW VIEWER */}
        <div className="mt-12 grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-serif text-gold mb-4">Handwoven Phulia Saree</h3>
            <p className="text-text-light mb-6">
              Explore this exquisite saree from every angle. Zoom in to see the intricate weaving patterns and natural indigo dye work.
            </p>

            <div className="space-y-3">
              <div className="flex justify-between items-center pb-3 border-b border-border">
                <span className="text-text-light">Material</span>
                <span className="text-foreground font-semibold">100% Pure Cotton</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-border">
                <span className="text-text-light">Weave</span>
                <span className="text-foreground font-semibold">Hand-loom</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-border">
                <span className="text-text-light">Dye Type</span>
                <span className="text-foreground font-semibold">Natural Indigo</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-text-light">Origin</span>
                <span className="text-foreground font-semibold">Phulia, West Bengal</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-serif text-gold mb-4">Key Features</h3>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <span className="text-gold text-xl">🎨</span>
                <p className="text-text-light"><span className="font-semibold text-foreground">Authentic Design</span> - Traditional patterns preserved for generations</p>
              </li>
              <li className="flex gap-4">
                <span className="text-gold text-xl">🌿</span>
                <p className="text-text-light"><span className="font-semibold text-foreground">Natural Materials</span> - Pure cotton with eco-friendly dyes</p>
              </li>
              <li className="flex gap-4">
                <span className="text-gold text-xl">👐</span>
                <p className="text-text-light"><span className="font-semibold text-foreground">Hand-Crafted</span> - Every thread placed by skilled hands</p>
              </li>
              <li className="flex gap-4">
                <span className="text-gold text-xl">⭐</span>
                <p className="text-text-light"><span className="font-semibold text-foreground">Premium Quality</span> - Built to last for decades</p>
              </li>
            </ul>

            <div className="mt-8">
              <Link href={`/product/${params.id}`} className="btn btn-primary w-full">
                Back to Product Details
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
