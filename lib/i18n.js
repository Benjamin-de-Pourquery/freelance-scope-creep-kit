// Set NEXT_PUBLIC_STRIPE_PAYMENT_LINK in Vercel for production.
// Live placeholder — replace after creating your Stripe Payment Link:
// https://buy.stripe.com/live_REPLACE_WITH_YOUR_LINK
const LIVE_PAYMENT_LINK_PLACEHOLDER = "https://buy.stripe.com/live_REPLACE_WITH_YOUR_LINK";

export const PAYMENT_LINK =
  process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK ||
  (process.env.VERCEL_ENV === "production"
    ? LIVE_PAYMENT_LINK_PLACEHOLDER
    : "https://buy.stripe.com/test_REPLACE_WITH_YOUR_TEST_LINK");

export const copy = {
  fr: {
    lang: "fr",
    htmlLang: "fr",
    otherLangHref: "/en",
    otherLangLabel: "EN",
    badge: "Pack digital · Freelances FR/EN · Accès immédiat",
    title: "Tes clients élargissent le périmètre.",
    title2: "Voici le kit pour documenter, tarifer et protéger ta marge.",
    leadPain: "Demandes « rapides », réunions en plus, livrables non prévus — sans trace écrite.",
    lead:
      "Le Kit Anti Scope Creep Freelance te donne les emails d'avenant, clauses de périmètre, scripts de refus et tracker prêts à l'emploi — pour encadrer les changements sans brûler la relation.",
    whatTitle: "Ce que tu reçois (immédiatement)",
    what: [
      "Templates email d'avenant (demande client → validation écrite)",
      "Avenant formel one-pager (PDF-ready) pour signature client",
      "Clause de périmètre à intégrer dans tes devis et contrats",
      "Scripts pour dire non, reporter ou tarifer un changement (3 niveaux)",
      "Tracker CSV des avenants (date, impact, statut, montant)",
      "Playbook d'usage en 1 page — tu ouvres, tu adaptes, tu envoies",
    ],
    steps: [
      { t: "1. Paie", d: "Paiement sécurisé · 24 €" },
      { t: "2. Télécharge", d: "Accès immédiat à tout le pack" },
      { t: "3. Encadre", d: "Documente → valide → facture" },
    ],
    offerTitle: "Offre lancement",
    price: "24 €",
    priceSub: "TTC · paiement unique",
    audience: "Audience : freelances solo & micro-entreprises en mission B2B.",
    cta: "Acheter le kit — 24 €",
    trustNote: "Paiement sécurisé via Stripe · Téléchargement instantané · Paiement unique, sans abonnement",
    delivery: "Livraison digitale instantanée : tous les fichiers sont disponibles dès la confirmation du paiement.",
    whyTitle: "Pourquoi ce kit",
    why:
      "Chaque demande « petite » non documentée grignote ta marge et ton planning. Avec les lois 2026 sur la protection des freelances, le périmètre écrit n'est plus un luxe — c'est ta ceinture de sécurité. Ce kit complète le Kit Relance Impayés : tu encadres les changements avant qu'ils deviennent des impayés.",
    complementNote:
      "Complémentaire au Kit Relance Impayés Freelance — encadre les changements avant qu'ils deviennent des litiges.",
    complementHref: "https://freelance-invoice-chase-kit.vercel.app",
    complementLabel: "Voir le kit relance impayés",
    faqTitle: "FAQ",
    faq: [
      {
        q: "Comment je reçois le pack ?",
        a: "Immédiatement après le paiement, tu arrives sur une page de confirmation avec tous les fichiers à télécharger. Garde cet onglet ouvert — tu peux aussi revenir via le reçu ou la confirmation de paiement Stripe.",
      },
      {
        q: "Combien de temps pour accéder au pack ?",
        a: "Accès instantané. Dès que le paiement est validé, l'ensemble des fichiers est disponible au téléchargement.",
      },
      {
        q: "À qui s'adresse ce kit ?",
        a: "Aux freelances solo, consultants et micro-entreprises qui livrent en B2B et veulent documenter les changements de périmètre sans perdre de temps ni de marge.",
      },
      {
        q: "C'est du conseil juridique ?",
        a: "Non. Ce sont des modèles et outils pratiques à adapter à ta situation et à ton contrat. Pour un litige ou une clause sur-mesure, consulte un professionnel habilité.",
      },
      {
        q: "Puis-je obtenir un remboursement ?",
        a: "Comme c'est un contenu numérique livré instantanément, les ventes sont définitives sauf erreur technique avérée. En cas de problème d'accès, réponds au reçu de paiement Stripe pour que l'on te renvoie le lien.",
      },
    ],
    disclaimer:
      "Disclaimer : ce pack n'est pas un conseil juridique, fiscal ou comptable. Adapte les textes à ta situation, à ton contrat et à tes CGV.",
    footerLinks: { terms: "/mentions", privacy: "/confidentialite", termsLabel: "Mentions / CGV", privacyLabel: "Confidentialité" },
    footerBrand: "Kit Anti Scope Creep Freelance",
    metaTitle: "Kit Anti Scope Creep Freelance — 24€",
    metaDesc:
      "Avenants, clauses de périmètre, scripts et tracker CSV pour freelances. Protège ta marge sans te battre. Pack digital immédiat.",
  },
  en: {
    lang: "en",
    htmlLang: "en",
    otherLangHref: "/",
    otherLangLabel: "FR",
    badge: "Digital pack · Freelancers · Instant access",
    title: "Clients expand the scope.",
    title2: "Here's the kit to document, price and protect your margin.",
    leadPain: "“Quick” asks, extra meetings, unplanned deliverables — with nothing in writing.",
    lead:
      "The Freelance Scope Creep Kit gives you change-order emails, scope clauses, refusal scripts and a tracker — ready to use so you frame changes without burning bridges.",
    whatTitle: "What you get (instantly)",
    what: [
      "Change order email templates (client request → written approval)",
      "Formal one-pager change order (PDF-ready) for client sign-off",
      "Scope boundary clause to embed in proposals and contracts",
      "Scripts for saying no, deferring or pricing a change (3 levels)",
      "Change order log CSV tracker (date, impact, status, amount)",
      "One-page usage playbook — open, adapt, send",
    ],
    steps: [
      { t: "1. Pay", d: "Secure payment · €24" },
      { t: "2. Download", d: "Instant access to the full pack" },
      { t: "3. Frame", d: "Document → approve → invoice" },
    ],
    offerTitle: "Launch offer",
    price: "€24",
    priceSub: "incl. tax · one-time",
    audience: "For solo freelancers & micro-businesses delivering B2B.",
    cta: "Buy the kit — €24",
    trustNote: "Secure Stripe checkout · Instant download · One-time payment, no subscription",
    delivery: "Instant digital delivery: all files are available as soon as your payment is confirmed.",
    whyTitle: "Why this kit",
    why:
      "Every undocumented “small” ask eats your margin and your calendar. With 2026 freelance-protection laws, written scope isn't a nice-to-have — it's your safety belt. This kit complements the Overdue Invoice Kit: you frame changes before they become unpaid invoices.",
    complementNote:
      "Complements the Freelancer Overdue Invoice Kit — frame changes before they become disputes.",
    complementHref: "https://freelance-invoice-chase-kit.vercel.app/en",
    complementLabel: "See the overdue invoice kit",
    faqTitle: "FAQ",
    faq: [
      {
        q: "How do I get the pack?",
        a: "Right after payment, you land on a confirmation page with every file ready to download. Keep that tab open — you can also return via your Stripe receipt or payment confirmation.",
      },
      {
        q: "How fast is delivery?",
        a: "Instant. As soon as payment is confirmed, the full pack is available to download.",
      },
      {
        q: "Who is this kit for?",
        a: "Solo freelancers, consultants and micro-businesses delivering B2B who want to document scope changes without wasting time or margin.",
      },
      {
        q: "Is this legal advice?",
        a: "No. These are practical templates you adapt to your situation and contract. For disputes or bespoke clauses, consult a qualified professional.",
      },
      {
        q: "Can I get a refund?",
        a: "Because this is digital content delivered instantly, sales are final except in cases of proven technical error. If you have trouble accessing your files, reply to your Stripe payment receipt and we'll resend the link.",
      },
    ],
    disclaimer:
      "Disclaimer: this pack is not legal, tax or accounting advice. Adapt the text to your situation, contract and terms.",
    footerLinks: { terms: "/en/terms", privacy: "/en/privacy", termsLabel: "Terms", privacyLabel: "Privacy" },
    footerBrand: "Freelance Scope Creep Kit",
    metaTitle: "Freelance Scope Creep Kit — €24",
    metaDesc:
      "Change orders, scope clauses, scripts and CSV tracker for freelancers. Protect your margin without the awkwardness. Instant digital pack.",
  },
};
