import type { Metadata } from "next";
import PartnerPaths from "@/components/PartnerPaths";
import { PageHead } from "@/components/ui";

export const metadata: Metadata = { title: "Partners" };

export default function Partners() {
  return (
    <>
      <PageHead
        crumbs={[["Partners"]]}
        eyebrow="Collaborate"
        hi="साझेदार"
        title="Build it with us."
        em="with"
        lead="Six ways to work with the Centre, from joint research to field programmes. Pick the path closest to yours."
        pat="weave"
      />
      <PartnerPaths />
    </>
  );
}
