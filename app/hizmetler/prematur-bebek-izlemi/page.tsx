import type { Metadata } from "next";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import { getServicePageMetadata } from "@/data/seo";

export const metadata: Metadata = getServicePageMetadata("prematureBaby");

export default function PrematurBebekIzlemiPage() {
  return <ServiceDetailLayout serviceKey="prematureBaby" />;
}
