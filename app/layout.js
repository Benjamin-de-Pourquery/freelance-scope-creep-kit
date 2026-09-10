import "./globals.css";

export const metadata = {
  title: "Kit Anti Scope Creep Freelance — 24€",
  description:
    "Avenants, clauses de périmètre, scripts et tracker CSV pour freelances. Protège ta marge sans te battre. Pack digital immédiat.",
  openGraph: {
    title: "Kit Anti Scope Creep Freelance",
    description:
      "Pack digital 24€ — avenants, clauses, scripts, tracker. Pour freelances qui veulent encadrer le périmètre.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
