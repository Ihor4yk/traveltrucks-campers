import { notFound } from "next/navigation";
import CamperDetails from "@/app/catalog/[id]/CamperDetails";
import { getCamperById } from "@/services/campersApi";

interface CamperPageProps {
  params: Promise<{ id: string }>;
}

export default async function CamperPage({ params }: CamperPageProps) {
  const { id } = await params;

  const camper = await getCamperById(id);

  if (!camper) {
    notFound();
  }

  return <CamperDetails camper={camper} />;
}
