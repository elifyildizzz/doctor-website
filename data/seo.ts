import type { Metadata } from "next";
import { type ServiceDetailKey } from "@/data/localizedContent";
import { routes } from "@/data/routes";
import { SITE_URL } from "@/data/site";

export const ASSET_VERSION = "2026-03-24-12";
export const SITE_NAME = "Uzm. Dr. Mümtaz Aktaş";
export const HOME_TITLE = "Uzm. Dr. Mümtaz Aktaş | Antalya Kemer Çocuk Doktoru";
export const HOME_DESCRIPTION =
  "Antalya Kemer çocuk doktoru Uzm. Dr. Mümtaz Aktaş ile bebek, çocuk ve ergen sağlığı takibi, aşı danışmanlığı, muayene ve randevu bilgileri.";
export const DEFAULT_KEYWORDS = [
  "Antalya çocuk doktoru",
  "Kemer çocuk doktoru",
  "Antalya çocuk sağlığı ve hastalıkları uzmanı",
  "Uzm. Dr. Mümtaz Aktaş",
  "çocuk doktoru randevu Kemer",
];
export const OG_IMAGE_URL = `${SITE_URL}/logo2-tight.png?v=${ASSET_VERSION}`;

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

type ServicePageConfig = {
  description: string;
  keywords: string[];
  path: string;
  title: string;
};

function toAbsoluteUrl(path: string) {
  return path === "/" ? SITE_URL : `${SITE_URL}${path}`;
}

export function buildPageMetadata({
  title,
  description,
  path,
  keywords = DEFAULT_KEYWORDS,
}: PageMetadataInput): Metadata {
  const canonical = toAbsoluteUrl(path);

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    keywords,
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale: "tr_TR",
      type: "website",
      images: [
        {
          url: OG_IMAGE_URL,
          width: 1200,
          height: 630,
          alt: SITE_NAME,
        },
      ],
    },
    twitter: {
      card: "summary",
      title,
      description,
      images: [OG_IMAGE_URL],
    },
  };
}

export const doctorPageMetadata = buildPageMetadata({
  title: `Doktorumuz | ${SITE_NAME}`,
  description:
    "Uzm. Dr. Mümtaz Aktaş'ın eğitimi, deneyimi, uzmanlık alanları ve çocuk sağlığı yaklaşımı hakkında bilgi alın.",
  path: routes.doctor,
  keywords: [
    ...DEFAULT_KEYWORDS,
    "çocuk doktoru doktorumuz",
    "çocuk sağlığı uzmanı Antalya",
  ],
});

export const contactPageMetadata = buildPageMetadata({
  title: `İletişim ve Randevu | ${SITE_NAME}`,
  description:
    "Antalya Kemer çocuk doktoru kliniği için adres, telefon, e-posta ve randevu bilgilerine ulaşın.",
  path: routes.contact,
  keywords: [
    ...DEFAULT_KEYWORDS,
    "Antalya çocuk doktoru iletişim",
    "Kemer çocuk doktoru adres",
  ],
});

export const servicesPageMetadata = buildPageMetadata({
  title: `Çocuk Sağlığı Hizmetleri | ${SITE_NAME}`,
  description:
    "Antalya Kemer’de sağlam çocuk izlemi, prematüre bebek takibi, aşı takibi, enfeksiyon testleri ve emzirme danışmanlığı hizmetleri.",
  path: routes.services,
  keywords: [
    ...DEFAULT_KEYWORDS,
    "Antalya pediatri hizmetleri",
    "Kemer çocuk sağlığı hizmetleri",
  ],
});

const servicePageConfigByKey: Record<ServiceDetailKey, ServicePageConfig> = {
  healthyChild: {
    title: `Sağlam Çocuk İzlemi | ${SITE_NAME}`,
    description:
      "Antalya Kemer’de sağlam çocuk izlemi ile büyüme, gelişim, beslenme ve aşı takibi düzenli çocuk hekimi kontrolüyle izlenir.",
    path: routes.healthyChild,
    keywords: [
      ...DEFAULT_KEYWORDS,
      "sağlam çocuk izlemi Antalya",
      "çocuk gelişim takibi Kemer",
    ],
  },
  prematureBaby: {
    title: `Prematüre Bebek İzlemi | ${SITE_NAME}`,
    description:
      "Antalya Kemer’de prematüre bebek izlemi kapsamında büyüme, beslenme, solunum ve gelişim süreçleri yakın çocuk hekimi takibiyle değerlendirilir.",
    path: routes.prematureBaby,
    keywords: [
      ...DEFAULT_KEYWORDS,
      "prematüre bebek takibi Antalya",
      "prematüre bebek izlemi Kemer",
    ],
  },
  vaccination: {
    title: `Aşı Takibi | ${SITE_NAME}`,
    description:
      "Antalya Kemer’de aşı takibi hizmeti ile çocukluk çağı aşı planı, eksik doz kontrolü ve aile bilgilendirmesi düzenli olarak yapılır.",
    path: routes.vaccination,
    keywords: [
      ...DEFAULT_KEYWORDS,
      "aşı takibi Antalya",
      "çocuk aşı takvimi Kemer",
    ],
  },
  infectionTests: {
    title: `Enfeksiyon Testleri | ${SITE_NAME}`,
    description:
      "Antalya Kemer’de enfeksiyon testleri ile çocuklarda belirtilerin nedenini değerlendirmek için uygun laboratuvar ve hızlı antijen testleri planlanır.",
    path: routes.infectionTests,
    keywords: [
      ...DEFAULT_KEYWORDS,
      "enfeksiyon testleri Antalya",
      "çocuk hızlı test Kemer",
    ],
  },
  bloodLab: {
    title: `Kan Alma ve Laboratuvar Testleri | ${SITE_NAME}`,
    description:
      "Antalya Kemer’de kan alma ve laboratuvar testleri çocuklara uygun, güvenli ve konforlu koşullarda planlanır ve takip edilir.",
    path: routes.bloodLab,
    keywords: [
      ...DEFAULT_KEYWORDS,
      "çocuk kan alma Antalya",
      "laboratuvar testleri Kemer",
    ],
  },
  breastfeeding: {
    title: `Emzirme Danışmanlığı | ${SITE_NAME}`,
    description:
      "Antalya Kemer’de emzirme danışmanlığı ile doğru teknik, süt yönetimi ve bebek beslenmesi konusunda birebir destek sunulur.",
    path: routes.breastfeeding,
    keywords: [
      ...DEFAULT_KEYWORDS,
      "emzirme danışmanlığı Antalya",
      "bebek beslenmesi Kemer",
    ],
  },
};

export function getServicePageMetadata(
  serviceKey: ServiceDetailKey,
): Metadata {
  return buildPageMetadata(servicePageConfigByKey[serviceKey]);
}
