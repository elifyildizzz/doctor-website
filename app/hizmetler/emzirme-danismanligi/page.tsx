import type { Metadata } from "next";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import { getServicePageMetadata } from "@/data/seo";

export const metadata: Metadata = getServicePageMetadata("breastfeeding");

export default function EmzirmeDanismanligiPage() {
  return <ServiceDetailLayout serviceKey="breastfeeding" />;
}
