import type { Metadata } from "next";
import DoctorPage from "@/components/pages/DoctorPage";
import { doctorPageMetadata } from "@/data/seo";

export const metadata: Metadata = doctorPageMetadata;

export default function DoktorPage() {
  return <DoctorPage />;
}
