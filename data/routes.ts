export const routes = {
  home: "/",
  doctor: "/doktor",
  contact: "/iletisim",
  services: "/hizmetler",
  healthyChild: "/hizmetler/saglam-cocuk-izlemi",
  prematureBaby: "/hizmetler/prematur-bebek-izlemi",
  vaccination: "/hizmetler/asi-takibi",
  infectionTests: "/hizmetler/enfeksiyon-testleri",
  bloodLab: "/hizmetler/kan-alma-ve-laboratuvar-testleri",
  breastfeeding: "/hizmetler/emzirme-danismanligi",
} as const;

export const sitemapRoutes = [
  routes.home,
  routes.doctor,
  routes.contact,
  routes.services,
  routes.healthyChild,
  routes.prematureBaby,
  routes.vaccination,
  routes.infectionTests,
  routes.bloodLab,
  routes.breastfeeding,
] as const;
