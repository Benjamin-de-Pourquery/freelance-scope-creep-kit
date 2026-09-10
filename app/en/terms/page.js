import Link from "next/link";
import LangToggle from "@/components/LangToggle";

export const metadata = {
  title: "Terms — Freelance Scope Creep Kit",
  description: "Terms, conditions and disclaimer.",
};

export default function TermsEnPage() {
  return (
    <main className="wrap prose">
      <div className="topbar">
        <Link href="/en">← Home</Link>
        <LangToggle href="/mentions" label="FR" />
      </div>
      <h1>Terms &amp; conditions</h1>
      <section className="card">
        <h2>Publisher</h2>
        <p>
          Digital product by <strong>Glint / Money Maker</strong>. Contact:{" "}
          <a href="https://github.com/Benjamin-de-Pourquery" rel="noopener noreferrer">github.com/Benjamin-de-Pourquery</a>.
        </p>
        <h2>Product</h2>
        <p>
          Digital pack of templates (change order emails, scope clause, scripts, CSV tracker, playbook).
          Instant access after verified Stripe payment. No physical shipping.
        </p>
        <h2>Price</h2>
        <p>€24 one-time payment via Stripe (card checkout).</p>
        <h2>Disclaimer</h2>
        <p>
          This pack is <strong>not legal, tax or accounting advice</strong>. Templates are practical
          tools you must adapt. For disputes or bespoke clauses, consult a qualified professional.
        </p>
        <h2>Liability</h2>
        <p>No commercial or legal outcome guarantee. Use of templates is at the buyer&apos;s sole responsibility.</p>
        <h2>Hosting</h2>
        <p>Vercel Inc. — Next.js application hosting.</p>
      </section>
    </main>
  );
}
