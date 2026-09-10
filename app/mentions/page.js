import Link from "next/link";
import LangToggle from "@/components/LangToggle";

export const metadata = {
  title: "Mentions légales & CGV — Kit Anti Scope Creep",
  description: "Mentions légales, CGV et disclaimer du Kit Anti Scope Creep Freelance.",
};

export default function MentionsPage() {
  return (
    <main className="wrap prose">
      <div className="topbar">
        <Link href="/">← Accueil</Link>
        <LangToggle href="/en/terms" label="EN" />
      </div>
      <h1>Mentions légales &amp; conditions</h1>
      <section className="card">
        <h2>Éditeur</h2>
        <p>
          Produit digital proposé par <strong>Glint / Money Maker</strong> (personne physique / micro-entreprise).
          Contact via le profil GitHub :{" "}
          <a href="https://github.com/Benjamin-de-Pourquery" rel="noopener noreferrer">github.com/Benjamin-de-Pourquery</a>.
        </p>
        <h2>Nature du produit</h2>
        <p>
          Pack numérique de modèles (emails d&apos;avenant, clause de périmètre, scripts, tracker CSV, playbook).
          Accès immédiat après paiement Stripe vérifié. Aucun envoi postal / physique.
        </p>
        <h2>Prix</h2>
        <p>24 € TTC — paiement unique via Stripe (carte bancaire).</p>
        <h2>Droit de rétractation</h2>
        <p>
          Conformément à l&apos;art. L221-28 du Code de la consommation, le droit de rétractation ne s&apos;applique
          pas aux contenus numériques fournis immédiatement après accord explicite (accès au pack après paiement).
        </p>
        <h2>Disclaimer (important)</h2>
        <p>
          Ce pack <strong>n&apos;est pas un conseil juridique, fiscal ou comptable</strong>. Les modèles sont
          des outils pratiques à adapter. Pour un litige ou une clause sur-mesure, consulte un avocat ou un
          professionnel habilité.
        </p>
        <h2>Responsabilité</h2>
        <p>
          L&apos;éditeur ne garantit aucun résultat commercial ou juridique. L&apos;usage des modèles relève de la seule
          responsabilité de l&apos;acheteur.
        </p>
        <h2>Hébergement</h2>
        <p>Vercel Inc. — déploiement applicatif Next.js.</p>
      </section>
    </main>
  );
}
