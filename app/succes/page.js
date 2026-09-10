import { Suspense } from "react";
import SuccessClient from "@/components/SuccessClient";

export const metadata = {
  title: "Merci — Kit Anti Scope Creep",
  description: "Télécharge ton pack après confirmation du paiement.",
  robots: { index: false, follow: false },
};

export default function SuccesPage() {
  return (
    <Suspense fallback={<main className="wrap"><p className="lead">…</p></main>}>
      <SuccessClient lang="fr" />
    </Suspense>
  );
}
