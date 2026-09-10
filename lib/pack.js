import path from "path";
import fs from "fs/promises";

/** Allowed downloadable pack files (not exposed under /public). */
export const PACK_FILES = {
  "change-order-email-templates.md": {
    filename: "change-order-email-templates.md",
    label: { fr: "Templates email d'avenant", en: "Change order email templates" },
    mime: "text/markdown; charset=utf-8",
  },
  "change-order-one-pager.md": {
    filename: "change-order-one-pager.md",
    label: { fr: "Avenant formel (one-pager)", en: "Formal change order (one-pager)" },
    mime: "text/markdown; charset=utf-8",
  },
  "scope-boundary-clause.md": {
    filename: "scope-boundary-clause.md",
    label: { fr: "Clause de périmètre pour devis", en: "Scope boundary clause for proposals" },
    mime: "text/markdown; charset=utf-8",
  },
  "scripts-say-no-pricing.md": {
    filename: "scripts-say-no-pricing.md",
    label: { fr: "Scripts pour dire non / tarifer", en: "Scripts for saying no / pricing changes" },
    mime: "text/markdown; charset=utf-8",
  },
  "change-order-log.csv": {
    filename: "change-order-log.csv",
    label: { fr: "Tracker CSV des avenants", en: "Change order log CSV tracker" },
    mime: "text/csv; charset=utf-8",
  },
  "playbook.md": {
    filename: "playbook.md",
    label: { fr: "Playbook d'usage (1 page)", en: "One-page usage playbook" },
    mime: "text/markdown; charset=utf-8",
  },
};

export function packDir() {
  return path.join(process.cwd(), "content", "pack");
}

export async function readPackFile(key) {
  const meta = PACK_FILES[key];
  if (!meta) return null;
  const full = path.join(packDir(), meta.filename);
  const resolved = path.resolve(full);
  if (!resolved.startsWith(path.resolve(packDir()))) return null;
  const buf = await fs.readFile(resolved);
  return { ...meta, buf };
}
