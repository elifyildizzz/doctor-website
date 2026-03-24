import type { Metadata } from "next";
import ContactPage from "@/components/pages/ContactPage";
import { contactPageMetadata } from "@/data/seo";

export const metadata: Metadata = contactPageMetadata;

export default function IletisimPage() {
  return <ContactPage />;
}
