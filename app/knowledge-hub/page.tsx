import type { Metadata } from "next";
import { Suspense } from "react";
import Hub from "@/components/Hub";
import { PageHead } from "@/components/ui";

export const metadata: Metadata = { title: "Knowledge Hub" };

export default function KnowledgeHub() {
  return (
    <>
      <PageHead
        crumbs={[["Knowledge Hub"]]}
        eyebrow="Knowledge Hub"
        hi="ज्ञान केंद्र"
        title="Find it, cite it, reuse it."
        em="reuse"
        lead="Reports, datasets, case studies, policy documents, books and global references on India's creative economy. Research is licensed CC BY-NC-SA 4.0 unless stated."
        pat="jaal"
      />
      <section className="sec-s">
        <div className="wrap">
          <Suspense fallback={<p className="t-small" role="status">Loading resources</p>}>
            <Hub />
          </Suspense>
        </div>
      </section>
    </>
  );
}
