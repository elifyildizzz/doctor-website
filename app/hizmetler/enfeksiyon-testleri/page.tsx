import type { Metadata } from "next";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import { getServicePageMetadata } from "@/data/seo";

export const metadata: Metadata = getServicePageMetadata("infectionTests");

export default function EnfeksiyonTestleriPage() {
  return <ServiceDetailLayout serviceKey="infectionTests" />;
}
