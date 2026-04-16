"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, Globe } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Handwoven Phulia Saree",
    artisan: "Renu Dey",
    village: "Phulia, West Bengal",
    priceUSD: 180,
    priceINR: 14940,
    category: "sarees",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=500&q=80",
    description: "Intricate patterns with natural indigo dyes"
  },
  {
    id: 2,
    name: "Terracotta Pottery Set",
    artisan: "Sujit Nath",
    village: "Khurja, Uttar Pradesh",
    priceUSD: 95,
    priceINR: 7885,
    category: "pottery",
    image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=500&q=80",
    description: "Hand-sculpted using century-old techniques"
  },
  {
    id: 3,
    name: "Bronze Dancing Figurine",
    artisan: "Amit Sharma",
    village: "Moradabad, Uttar Pradesh",
    priceUSD: 240,
    priceINR: 19920,
    category: "handmade",
    image: "https://images.unsplash.com/photo-1534400327717-dac8e65e7d7f?auto=format&fit=crop&w=500&q=80",
    description: "Lost-wax casting technique with exquisite detail"
  },
  {
    id: 4,
    name: "Indigo Dyed Cotton Dupatta",
    artisan: "Priya Dutta",
    village: "Indigo Valley, Bengal",
    priceUSD: 65,
    priceINR: 5395,
    category: "handmade",
    image: "https://images.unsplash.com/photo-1589218759949-1b1aca54c6d8?auto=format&fit=crop&w=500&q=80",
    description: "Naturally dyed traditional cloth"
  },
  {
    id: 5,
    name: "Marble Inlay Box",
    artisan: "Rajesh Kumar",
    village: "Agra, Uttar Pradesh",
    priceUSD: 150,
    priceINR: 12450,
    category: "handmade",
    image: "https://images.unsplash.com/photo-1595777712382-86d440c06f3f?auto=format&fit=crop&w=500&q=80",
    description: "Intricately carved marble inlay work"
  },
  {
    id: 6,
    name: "Brass Bell Necklace",
    artisan: "Meera Singh",
    village: "Jaipur, Rajasthan",
    priceUSD: 45,
    priceINR: 3735,
    category: "jewelry",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=500&q=80",
    description: "Traditional tribal jewelry design"
  },
  {
    id: 7,
    name: "Silk Saree with Gold Thread",
    artisan: "Kavita Nayak",
    village: "Varanasi, Uttar Pradesh",
    priceUSD: 320,
    priceINR: 26560,
    category: "sarees",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=500&q=80",
    description: "Premium Banarasi silk with Zari work"
  },
  {
    id: 8,
    name: "Hand-Painted Ceramic Plate",
    artisan: "Vikram Das",
    village: "Blue Pottery Zone, Delhi",
    priceUSD: 85,
    priceINR: 7055,
    category: "pottery",
    image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=500&q=80",
    description: "Blue pottery with traditional motifs"
  },
  // PHULIA TANT SAREES
  {
    id: 9,
    name: "Phulia Tant Saree - Indigo & White Stripes",
    artisan: "Monika Dey",
    village: "Phulia, West Bengal",
    priceUSD: 79,
    priceINR: 6557,
    category: "sarees",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=500&q=80",
    description: "Traditional Phulia weave with natural indigo dyes and white contrasting stripes"
  },
  {
    id: 10,
    name: "Phulia Tant Saree - Red with Contrasting Pallu",
    artisan: "Sangita Nath",
    village: "Phulia, West Bengal",
    priceUSD: 87,
    priceINR: 7221,
    category: "sarees",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=500&q=80",
    description: "Vibrant red Phulia Tant with gold-bordered contrasting pallu and simple patterns"
  },
  {
    id: 11,
    name: "Phulia Tant Saree - Golden Thread Work",
    artisan: "Neelam Dutta",
    village: "Phulia, West Bengal",
    priceUSD: 99,
    priceINR: 8217,
    category: "sarees",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=500&q=80",
    description: "Light cream Phulia Tant with delicate golden thread work on borders"
  },
  {
    id: 12,
    name: "Phulia Tant Saree - Green & Cream Check",
    artisan: "Lalita Singh",
    village: "Phulia, West Bengal",
    priceUSD: 71,
    priceINR: 5893,
    category: "sarees",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=500&q=80",
    description: "Classic green and cream checkered Phulia Tant with traditional weave"
  },
  {
    id: 13,
    name: "Phulia Tant Saree - Purple with Zari Edge",
    artisan: "Rajini Ray",
    village: "Phulia, West Bengal",
    priceUSD: 94,
    priceINR: 7802,
    category: "sarees",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=500&q=80",
    description: "Rich purple Phulia Tant with intricate Zari work on edges and pallu"
  },
  {
    id: 14,
    name: "Phulia Tant Saree - Orange & Black Pattern",
    artisan: "Jyoti Sharma",
    village: "Phulia, West Bengal",
    priceUSD: 82,
    priceINR: 6806,
    category: "sarees",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=500&q=80",
    description: "Bold orange Phulia Tant with black printed patterns and traditional motifs"
  },
  {
    id: 15,
    name: "Phulia Tant Saree - Blue with White Motifs",
    artisan: "Deepa Nath",
    village: "Phulia, West Bengal",
    priceUSD: 75,
    priceINR: 6225,
    category: "sarees",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=500&q=80",
    description: "Soft blue Phulia Tant with white floral and geometric motifs throughout"
  },
  {
    id: 16,
    name: "Phulia Tant Saree - Rust with Gold Stripes",
    artisan: "Priya Majumdar",
    village: "Phulia, West Bengal",
    priceUSD: 90,
    priceINR: 7470,
    category: "sarees",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=500&q=80",
    description: "Earthy rust Phulia Tant with fine gold stripes creating elegant contrast"
  },
  // BALUCHARI SAREES
  {
    id: 17,
    name: "Baluchari Saree - Krishna Leela",
    artisan: "Mohan Das",
    village: "Bishnupur, West Bengal",
    priceUSD: 180,
    priceINR: 14940,
    category: "sarees",
    image: "https://images.unsplash.com/photo-1516762356303-c67fbc627d42?auto=format&fit=crop&w=500&q=80",
    description: "Narrative Baluchari featuring Krishna's divine plays woven into the borders"
  },
  {
    id: 18,
    name: "Baluchari Saree - Radha-Krishna Dance",
    artisan: "Suresh Kumar",
    village: "Bishnupur, West Bengal",
    priceUSD: 175,
    priceINR: 14525,
    category: "sarees",
    image: "https://images.unsplash.com/photo-1516762356303-c67fbc627d42?auto=format&fit=crop&w=500&q=80",
    description: "Exquisite Baluchari depicting the eternal dance of Radha and Krishna"
  },
  {
    id: 19,
    name: "Baluchari Saree - Raas Lila Narrative",
    artisan: "Ravi Shankar",
    village: "Bishnupur, West Bengal",
    priceUSD: 195,
    priceINR: 16185,
    category: "sarees",
    image: "https://images.unsplash.com/photo-1516762356303-c67fbc627d42?auto=format&fit=crop&w=500&q=80",
    description: "Grand Baluchari with detailed Raas Lila scenes across the entire pallu"
  },
  {
    id: 20,
    name: "Baluchari Saree - Mythological Tales",
    artisan: "Ashok Mehta",
    village: "Bishnupur, West Bengal",
    priceUSD: 190,
    priceINR: 15770,
    category: "sarees",
    image: "https://images.unsplash.com/photo-1516762356303-c67fbc627d42?auto=format&fit=crop&w=500&q=80",
    description: "Baluchari showcasing various mythological scenes and divine narratives"
  },
  {
    id: 21,
    name: "Baluchari Saree - Floral Narrative Border",
    artisan: "Kiran Bhat",
    village: "Bishnupur, West Bengal",
    priceUSD: 163,
    priceINR: 13529,
    category: "sarees",
    image: "https://images.unsplash.com/photo-1516762356303-c67fbc627d42?auto=format&fit=crop&w=500&q=80",
    description: "Elegant Baluchari with intricate floral designs intertwined with narrative borders"
  },
  {
    id: 22,
    name: "Baluchari Saree - Dynasty Heritage",
    artisan: "Vikram Nath",
    village: "Bishnupur, West Bengal",
    priceUSD: 210,
    priceINR: 17430,
    category: "sarees",
    image: "https://images.unsplash.com/photo-1516762356303-c67fbc627d42?auto=format&fit=crop&w=500&q=80",
    description: "Premium Baluchari depicting royal court scenes and ancestral narratives"
  },
  {
    id: 23,
    name: "Baluchari Saree - Traditional Weave",
    artisan: "Arun Dey",
    village: "Bishnupur, West Bengal",
    priceUSD: 169,
    priceINR: 14027,
    category: "sarees",
    image: "https://images.unsplash.com/photo-1516762356303-c67fbc627d42?auto=format&fit=crop&w=500&q=80",
    description: "Authentic Baluchari with classic mythological narratives in traditional weaving style"
  },
  {
    id: 24,
    name: "Baluchari Saree - Royal Narrative",
    artisan: "Devendra Singh",
    village: "Bishnupur, West Bengal",
    priceUSD: 219,
    priceINR: 18177,
    category: "sarees",
    image: "https://images.unsplash.com/photo-1516762356303-c67fbc627d42?auto=format&fit=crop&w=500&q=80",
    description: "Luxurious Baluchari with grand royal scenes and ceremonial narratives woven throughout"
  },
  {
    id: 25,
    name: "Baluchari Saree - Festival Glory",
    artisan: "Sanjeev Kumar",
    village: "Bishnupur, West Bengal",
    priceUSD: 202,
    priceINR: 16766,
    category: "sarees",
    image: "https://images.unsplash.com/photo-1516762356303-c67fbc627d42?auto=format&fit=crop&w=500&q=80",
    description: "Vibrant Baluchari celebrating festival scenes and divine celebrations"
  },
  {
    id: 26,
    name: "Baluchari Saree - Artisan Collection",
    artisan: "Rajendra Dutta",
    village: "Bishnupur, West Bengal",
    priceUSD: 186,
    priceINR: 15438,
    category: "sarees",
    image: "https://images.unsplash.com/photo-1516762356303-c67fbc627d42?auto=format&fit=crop&w=500&q=80",
    description: "Master artisan's creation featuring exquisite narrative weaving and heritage motifs"
  },
];

export default function ExplorePage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [currency, setCurrency] = useState<"USD" | "INR">("USD");

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeFilter === "all" || product.category === activeFilter;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.artisan.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const formatPrice = (product: any) => {
    if (currency === "USD") {
      return `$${product.priceUSD}`;
    } else {
      return `₹${product.priceINR.toLocaleString("en-IN")}`;
    }
  };

  return (
    <main className="pt-20">
      {/* HEADER */}
      <section className="container py-12">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
          <div>
            <h1 className="text-5xl font-serif mb-4">Discover Artisan Treasures</h1>
            <p className="text-text-light text-lg max-w-2xl">
              Explore handcrafted products from talented artisans across South Asia
            </p>
          </div>
          {/* Currency Toggle */}
          <div style={{ display: 'flex', gap: '0.5rem', background: 'var(--surface)', padding: '0.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
            <button
              onClick={() => setCurrency("USD")}
              style={{
                padding: '0.5rem 1rem',
                background: currency === "USD" ? 'var(--gold)' : 'transparent',
                color: currency === "USD" ? 'var(--background)' : 'var(--foreground)',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: 600,
                transition: 'all 0.3s ease',
              }}
            >
              $ USD
            </button>
            <button
              onClick={() => setCurrency("INR")}
              style={{
                padding: '0.5rem 1rem',
                background: currency === "INR" ? 'var(--gold)' : 'transparent',
                color: currency === "INR" ? 'var(--background)' : 'var(--foreground)',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: 600,
                transition: 'all 0.3s ease',
              }}
            >
              ₹ INR
            </button>
          </div>
        </div>

        {/* SEARCH */}
        <div className="relative mb-8">
          <Search className="absolute left-4 top-4 w-5 h-5 text-text-muted" />
          <input
            type="text"
            placeholder="Search by product or artisan name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-surface border border-border rounded-lg text-foreground placeholder-text-muted focus:outline-none focus:border-gold transition"
          />
        </div>

        {/* FILTERS */}
        <div className="filter-bar">
          <button
            onClick={() => setActiveFilter("all")}
            className={`filter-btn ${activeFilter === "all" ? "active" : ""}`}
          >
            All Products
          </button>
          <button
            onClick={() => setActiveFilter("sarees")}
            className={`filter-btn ${activeFilter === "sarees" ? "active" : ""}`}
          >
            Sarees
          </button>
          <button
            onClick={() => setActiveFilter("pottery")}
            className={`filter-btn ${activeFilter === "pottery" ? "active" : ""}`}
          >
            Pottery
          </button>
          <button
            onClick={() => setActiveFilter("handmade")}
            className={`filter-btn ${activeFilter === "handmade" ? "active" : ""}`}
          >
            Handmade
          </button>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section className="container pb-20">
        {filteredProducts.length > 0 ? (
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <Link key={product.id} href={`/product/${product.id}`} className="block">
                <div className="product-card h-full">
                  <div className="product-image-wrapper">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-image"
                    />
                  </div>
                  <div className="product-info">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-artisan">{product.artisan}</p>
                    <p className="product-location">{product.village}</p>
                    <p className="product-price">{formatPrice(product)}</p>
                    <p className="product-description">{product.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-text-muted text-lg">No products found matching your search.</p>
          </div>
        )}
      </section>
    </main>
  );
}
