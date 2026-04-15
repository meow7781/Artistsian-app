import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sign In | Sanskriti-Flow",
  description: "Sign in to manage your artisan storefront and conversations on Sanskriti-Flow.",
};

export default function SignInPage() {
  return (
    <main className="auth-page">
      <section className="container auth-layout fade-in">
        <div className="auth-copy">
          <span className="badge">Welcome back</span>
          <h1>Sign in to continue your craft journey.</h1>
          <p className="text-muted">
            Access your storefront, update product stories, and reconnect with customers who want
            to buy directly from the source.
          </p>
          <p className="auth-note">
            New to the platform? <Link href="/sign-up">Create an account</Link>
          </p>
        </div>

        <form className="auth-card card">
          <label className="field">
            <span>Email address</span>
            <input type="email" name="email" placeholder="you@example.com" />
          </label>
          <label className="field">
            <span>Password</span>
            <input type="password" name="password" placeholder="Enter your password" />
          </label>
          <div className="auth-row">
            <label className="checkbox">
              <input type="checkbox" name="remember" />
              <span>Remember me</span>
            </label>
            <Link href="/sign-up">Need access?</Link>
          </div>
          <button type="submit" className="btn btn-primary">
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
}
