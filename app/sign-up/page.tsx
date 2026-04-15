import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sign Up | Sanskriti-Flow",
  description: "Create a Sanskriti-Flow account to launch your artisan storefront.",
};

export default function SignUpPage() {
  return (
    <main className="auth-page">
      <section className="container auth-layout fade-in">
        <div className="auth-copy">
          <span className="badge">Start here</span>
          <h1>Create your Sanskriti-Flow account.</h1>
          <p className="text-muted">
            Set up your profile to begin sharing your craft, meeting buyers, and building a digital
            storefront rooted in heritage.
          </p>
          <p className="auth-note">
            Already have an account? <Link href="/sign-in">Sign in</Link>
          </p>
        </div>

        <form className="auth-card card">
          <label className="field">
            <span>Full name</span>
            <input type="text" name="name" placeholder="Your full name" />
          </label>
          <label className="field">
            <span>Email address</span>
            <input type="email" name="email" placeholder="you@example.com" />
          </label>
          <label className="field">
            <span>Password</span>
            <input type="password" name="password" placeholder="Create a password" />
          </label>
          <label className="field">
            <span>Role</span>
            <select name="role" defaultValue="artisan">
              <option value="artisan">Artisan</option>
              <option value="buyer">Buyer</option>
              <option value="curator">Curator</option>
            </select>
          </label>
          <button type="submit" className="btn btn-primary">
            Create Account
          </button>
        </form>
      </section>
    </main>
  );
}
