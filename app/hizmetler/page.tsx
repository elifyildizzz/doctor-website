import type { Metadata } from "next";
import ServicesPage from "@/components/pages/ServicesPage";
import { servicesPageMetadata } from "@/data/seo";

export const metadata: Metadata = servicesPageMetadata;

export default function HizmetlerPage() {
  return <ServicesPage />;
}
