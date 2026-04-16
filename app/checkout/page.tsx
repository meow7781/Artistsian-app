"use client";

import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useState } from "react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  artisan: string;
}

export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Handwoven Phulia Saree",
      price: 180,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=200&q=80",
      artisan: "Renu Dey",
    },
  ]);

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id);
    } else {
      setCartItems(cartItems.map(item => 
        item.id === id ? { ...item, quantity } : item
      ));
    }
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = 15;
  const tax = Math.round(subtotal * 0.08 * 100) / 100;
  const total = subtotal + shipping + tax;

  return (
    <main className="checkout-container">
      {/* LEFT: ORDER ITEMS */}
      <div>
        <h1 className="text-3xl font-serif mb-8">Order Summary</h1>

        {cartItems.length > 0 ? (
          <div className="space-y-6">
            {cartItems.map(item => (
              <div key={item.id} className="flex gap-4 p-6 bg-surface border border-border rounded-lg">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 rounded object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-serif text-lg text-foreground mb-1">{item.name}</h3>
                  <p className="text-sm text-text-muted mb-3">{item.artisan}</p>
                  <p className="text-gold font-semibold">${item.price}</p>
                </div>
                <div className="flex flex-col items-end gap-3">
                  <div className="flex items-center gap-2 bg-surface-light border border-border rounded">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-2 hover:bg-surface transition"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center text-foreground">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-2 hover:bg-surface transition"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-accent hover:text-accent-hover transition"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-text-light text-lg mb-6">Your cart is empty</p>
            <Link href="/explore" className="btn btn-primary">
              Continue Shopping
            </Link>
          </div>
        )}

        {/* SHIPPING & SUPPORT */}
        {cartItems.length > 0 && (
          <div className="mt-12 space-y-6">
            <div className="bg-surface-light p-6 rounded-lg">
              <h3 className="text-xl font-serif text-gold mb-4">Shipping Information</h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm text-text-muted mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-surface border border-border rounded text-foreground focus:outline-none focus:border-gold transition"
                  />
                </div>
                <div>
                  <label className="block text-sm text-text-muted mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-surface border border-border rounded text-foreground focus:outline-none focus:border-gold transition"
                  />
                </div>
                <div>
                  <label className="block text-sm text-text-muted mb-2">Address</label>
                  <input
                    type="text"
                    placeholder="Street address"
                    className="w-full px-4 py-3 bg-surface border border-border rounded text-foreground focus:outline-none focus:border-gold transition"
                  />
                </div>
              </div>
            </div>

            <div className="bg-surface p-6 rounded-lg border border-border">
              <h3 className="text-lg font-serif text-gold mb-4">Support the Artisans</h3>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-5 h-5 rounded"
                />
                <span className="text-text-light">Add a $5 tip to directly support Renu Dey's weaving studio</span>
              </label>
            </div>
          </div>
        )}
      </div>

      {/* RIGHT: ORDER TOTAL */}
      {cartItems.length > 0 && (
        <div>
          <div className="checkout-summary">
            <h2 className="text-2xl font-serif text-gold mb-6">Total</h2>

            <div className="space-y-3">
              <div className="summary-item">
                <span className="text-text-light">Subtotal</span>
                <span className="text-foreground font-semibold">${subtotal}.00</span>
              </div>
              <div className="summary-item">
                <span className="text-text-light">Shipping</span>
                <span className="text-foreground font-semibold">${shipping}.00</span>
              </div>
              <div className="summary-item">
                <span className="text-text-light">Tax</span>
                <span className="text-foreground font-semibold">${tax}.00</span>
              </div>
              <div className="summary-item total">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <button className="btn btn-primary w-full mt-8">
              Complete Purchase
            </button>

            <p className="text-center text-text-muted text-sm mt-4">
              Secure payment powered by Stripe
            </p>

            <Link href="/explore" className="btn btn-ghost w-full mt-3">
              Continue Shopping
            </Link>
          </div>

          {/* INFO CARD */}
          <div className="bg-surface-light p-6 rounded-lg border border-border mt-6">
            <h3 className="font-serif text-gold mb-3">Why Support Sanskriti-Flow?</h3>
            <ul className="space-y-2 text-sm text-text-light">
              <li>✓ 100% of artisan payments go directly to makers</li>
              <li>✓ No middlemen or exploitative markups</li>
              <li>✓ Full transparency on where your money goes</li>
              <li>✓ Support rural communities across South Asia</li>
            </ul>
          </div>
        </div>
      )}
    </main>
  );
}
