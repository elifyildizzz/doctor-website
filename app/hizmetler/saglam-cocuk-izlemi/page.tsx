import type { Metadata } from "next";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import { getServicePageMetadata } from "@/data/seo";

export const metadata: Metadata = getServicePageMetadata("healthyChild");

export default function SaglamCocukIzlemiPage() {
  return <ServiceDetailLayout serviceKey="healthyChild" />;
}
