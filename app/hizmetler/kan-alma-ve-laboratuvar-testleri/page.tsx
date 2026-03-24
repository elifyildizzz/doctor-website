import type { Metadata } from "next";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import { getServicePageMetadata } from "@/data/seo";

export const metadata: Metadata = getServicePageMetadata("bloodLab");

export default function KanAlmaVeLaboratuvarTestleriPage() {
  return <ServiceDetailLayout serviceKey="bloodLab" />;
}
