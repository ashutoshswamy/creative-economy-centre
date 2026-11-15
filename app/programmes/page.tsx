import type { Metadata } from "next";
import Programmes from "@/components/Programmes";
import { PageHead } from "@/components/ui";

export const metadata: Metadata = { title: "Programmes" };

export default function ProgrammesPage() {
  return (
    <>
      <PageHead
        crumbs={[["Programmes"]]}
        eyebrow="Programmes & engagement"
        hi="कार्यक्रम"
        title="Come to the room."
        em="room"
        lead="Conferences, workshops, fellowships, residencies, lectures and student programmes, in studios, campuses, craft clusters and online."
        pat="rangoli"
      />
      <Programmes />
    </>
  );
}
