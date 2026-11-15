import type { Metadata } from "next";
import StoriesGrid from "@/components/StoriesGrid";
import { PageHead } from "@/components/ui";

export const metadata: Metadata = { title: "Creative India Stories" };

export default function Stories() {
  return (
    <>
      <PageHead
        crumbs={[["Stories"]]}
        eyebrow="Creative India Stories"
        hi="कहानियाँ"
        title="The people behind the numbers."
        em="people"
        lead="Long-form profiles of artisans, gurus, filmmakers, designers and creators, told in their own words and photographed where they work."
        pat="rangoli"
      />
      <section className="sec-s">
        <div className="wrap"><StoriesGrid /></div>
      </section>
    </>
  );
}
