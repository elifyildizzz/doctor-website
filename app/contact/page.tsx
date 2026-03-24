import { permanentRedirect } from "next/navigation";
import { routes } from "@/data/routes";

export default function ContactRedirectPage() {
  permanentRedirect(routes.contact);
}
