import { permanentRedirect } from "next/navigation";
import { routes } from "@/data/routes";

export default function HealthyChildMonitoringRedirectPage() {
  permanentRedirect(routes.healthyChild);
}
