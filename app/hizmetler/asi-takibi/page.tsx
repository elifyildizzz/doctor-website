import type { Metadata } from "next";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import { getServicePageMetadata } from "@/data/seo";

export const metadata: Metadata = getServicePageMetadata("vaccination");

export default function AsiTakibiPage() {
  return <ServiceDetailLayout serviceKey="vaccination" />;
}
