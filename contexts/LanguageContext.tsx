"use client";

import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  ReactNode,
} from "react";

export type Language = "TR" | "EN" | "RU";

type ReviewItem = {
  id: number;
  rating: 4 | 5;
  tag: string;
  text: string;
};

type Translations = {
  [key in Language]: {
    nav: {
      home: string;
      doctor: string;
      services: string;
      contact: string;
      appointment: string;
    };
    contact: {
      title: string;
      subtitle: string;
      phone: string;
      email: string;
      address: string;
      mapTitle: string;
    };
    hero: {
      name: string;
      role: string;
      desc: string;
      cta: string;
      slogan: string;
    };
    services: {
      title: string;
      p1: string;
      p2: string;
      seeAll: string;
      items: {
        healthyChild: { title: string; desc: string };
        prematureBaby: { title: string; desc: string };
        vaccination: { title: string; desc: string };
        infectionTests: { title: string; desc: string };
        bloodLab: { title: string; desc: string };
        breastfeeding: { title: string; desc: string };
      };
    };
    about: {
      name: string;
      role: string;
      p1: string;
      p2: string;
      p3: string;
      p4: string;
    };
    clinic: {
      title: string;
      location: string;
      desc: string;
      addressLine1: string;
      addressLine2: string;
      prevAria: string;
      nextAria: string;
      photoAlt: string; // "Klinik fotoğraf {n}"
      photoAria: string; // "Fotoğraf {n}"
    };
    reviews: {
      title: string;
      items: ReviewItem[];
      prevAria: string;
      nextAria: string;
    };
    footer: {
      slogan: string;
      treatments: string;
      contact: string;
      phone: string;
      email: string;
      address: string;
      copyright: string; // "{year} ..."
    };
    whatsapp: {
      aria: string;
      defaultMessage: string;
    };
  };
};

const translations: Translations = {
  TR: {
    nav: {
      home: "Anasayfa",
      doctor: "Doktorumuz",
      services: "Hizmetler",
      contact: "İletişim",
      appointment: "Randevu Al",
    },
    contact: {
      title: "İletişim",
      subtitle:
        "Randevu ve danışma için aşağıdaki kanallardan bize ulaşabilirsiniz.",
      phone: "Telefon",
      email: "E-posta",
      address: "Adres",
      mapTitle: "Harita",
    },
    hero: {
      name: "Uzm. Dr. Mümtaz Aktaş",
      role: "Çocuk Sağlığı ve Hastalıkları Uzmanı",
      desc:
        "Bebek, çocuk ve ergen sağlığında tanı, takip ve tedavi süreçlerinde bilimsel ve güvenilir sağlık hizmeti sunmaktadır.",
      cta: "İletişime Geç",
      slogan: '"Çocuklarınızın sağlığı bizim için her şeyden değerlidir"',
    },
    services: {
      title: "Hizmetlerimiz",
      p1:
        "Çocuğunuzun sağlıklı büyümesini sağlarken güvenli ellerde izlemi ile birlikte tanı ve tedavide gerekli olan tüm laboratuvar tetkiklerinin klinik bünyesinde yapılması sağlanmaktadır.",
      p2:
        "Özel aşıların yapılması, kan alımı, serum tedavisi, buhar tedavisine ek olarak kliniğimizden emzirme danışmanlığını da güvenle alabilirsiniz.",
      seeAll: "Tüm Hizmetlerimiz",
      items: {
        healthyChild: {
          title: "Sağlam Çocuk İzlemi",
          desc: "Çocukların büyüme ve gelişimini düzenli olarak takip ediyoruz.",
        },
        prematureBaby: {
          title: "Prematüre Bebek İzlemi",
          desc: "Erken doğan bebeklerin özel takibi ve bakımı.",
        },
        vaccination: {
          title: "Aşı Takibi",
          desc: "Çocuklar için eksiksiz aşı takip programı.",
        },
        infectionTests: {
          title: "Enfeksiyon Testleri",
          desc: "Hızlı ve güvenilir enfeksiyon tespit testleri.",
        },
        bloodLab: {
          title: "Kan Alma ve Laboratuvar Testleri",
          desc: "Gerekli kan testleri ve laboratuvar hizmetleri.",
        },
        breastfeeding: {
          title: "Emzirme Danışmanlığı",
          desc: "Doğru emzirme teknikleri ve danışmanlık hizmeti.",
        },
      },
    },
    about: {
      name: "Uzm. Dr. Mümtaz Aktaş",
      role: "Çocuk Sağlığı ve Hastalıkları Uzmanı",
      p1:
        "Tıp eğitimini Kocaeli Üniversitesi Tıp Fakültesi'nde tamamlayan Mümtaz Aktaş, uzmanlık eğitimini İnönü Üniversitesi Tıp Fakültesi'nde gerçekleştirmiştir.",
      p2:
        "Yenidoğan ve prematüre bebeklerin takibi, çocukların beslenme ve büyüme gelişimi, solunum sistemi, alerji ve üriner sistem hastalıkları alanlarında hizmet vermiştir.",
      p3:
        "Rich Hospital, Olimpos Hastanesi, Yaşam Hastanesi ve Gaziantep'te çeşitli sağlık merkezlerinde görev almıştır.",
      p4:
        "Hasta memnuniyetini ön planda tutan Dr. Aktaş, çocukların sağlıklı gelişimini desteklemek amacıyla çalışmalarını sürdürmektedir.",
    },
    clinic: {
      title: "Kliniğimiz",
      location: "Antalya – Kemer",
      desc:
        "Kliniğimizden görüntüler. Konforlu bekleme alanı ve çocuk dostu ortam.",
      addressLine1: "Merkez Mahallesi, Atatürk Cad. No: 45",
      addressLine2: "Kemer / Antalya",
      prevAria: "Önceki fotoğraf",
      nextAria: "Sonraki fotoğraf",
      photoAlt: "Klinik fotoğraf {n}",
      photoAria: "Fotoğraf {n}",
    },
    reviews: {
      title: "Sizden Gelen Yorumlar",
      prevAria: "Önceki",
      nextAria: "Sonraki",
      items: [
        {
          id: 1,
          rating: 5,
          tag: "İletişim & takip",
          text:
            "Muayene süreci düzenliydi. Sorularımıza hızlı dönüş aldık ve takip planı netti.",
        },
        {
          id: 2,
          rating: 5,
          tag: "Güven veren yaklaşım",
          text:
            "Şikâyetleri dikkatle dinledi. Gereksiz ilaç yazmadan adım adım ilerledi.",
        },
        {
          id: 3,
          rating: 5,
          tag: "Çocuk dostu ortam",
          text:
            "Klinik ferah ve çocuklar için rahat. Randevu saatine uyum iyiydi.",
        },
        {
          id: 4,
          rating: 5,
          tag: "Açıklayıcı",
          text:
            "Tanı ve tedavi seçeneklerini anlaşılır şekilde anlattı. İçimiz rahatladı.",
        },
        {
          id: 5,
          rating: 4,
          tag: "Genel memnuniyet",
          text:
            "Genel olarak memnun kaldık. Bekleme süresi makuldü, ortam temizdi.",
        },
      ],
    },
    footer: {
      slogan: '"Çocuklarınızın sağlığı bizim için her şeyden değerlidir"',
      treatments: "Tedavilerimiz",
      contact: "İletişim",
      phone: "Telefon",
      email: "E-posta",
      address: "Adres",
      copyright:
        "© {year} Uzm. Dr. Mümtaz Aktaş - Antalya Kemer Çocuk Sağlığı ve Hastalıkları Uzmanı @tüm hakları saklıdır",
    },
    whatsapp: {
      aria: "WhatsApp ile iletişime geç",
      defaultMessage: "Merhaba, bilgi almak istiyorum.",
    },
  },

  EN: {
    nav: {
      home: "Home",
      doctor: "Our Doctor",
      services: "Services",
      contact: "Contact",
      appointment: "Book Appointment",
    },
    contact: {
      title: "Contact",
      subtitle:
        "You can reach us through the channels below for appointments and consultations.",
      phone: "Phone",
      email: "E-mail",
      address: "Address",
      mapTitle: "Map",
    },
    hero: {
      name: "Specialist Dr. Mümtaz Aktaş",
      role: "Pediatric Health and Diseases Specialist",
      desc:
        "Provides scientific and reliable healthcare services for infants, children, and adolescents during diagnosis, follow-up, and treatment processes.",
      cta: "Contact",
    },
    services: {
      title: "Our Services",
      p1:
        "While ensuring your child grows up healthy, all laboratory tests required for diagnosis and treatment can be performed within our clinic.",
      p2:
        "In addition to special vaccinations, blood collection, serum therapy, and nebulizer therapy, you can also receive breastfeeding consultation safely at our clinic.",
      seeAll: "All Our Services",
      items: {
        healthyChild: {
          title: "Healthy Child Monitoring",
          desc: "We regularly monitor children's growth and development.",
        },
        prematureBaby: {
          title: "Premature Baby Monitoring",
          desc: "Special follow-up and care for premature babies.",
        },
        vaccination: {
          title: "Vaccination Tracking",
          desc: "A complete vaccination tracking program for children.",
        },
        infectionTests: {
          title: "Infection Tests",
          desc: "Fast and reliable infection detection tests.",
        },
        bloodLab: {
          title: "Blood Collection and Laboratory Tests",
          desc: "Necessary blood tests and laboratory services.",
        },
        breastfeeding: {
          title: "Breastfeeding Consultation",
          desc: "Proper breastfeeding techniques and consultation service.",
        },
      },
    },
    about: {
      name: "Specialist Dr. Mümtaz Aktaş",
      role: "Pediatric Health and Diseases Specialist",
      p1:
        "Mümtaz Aktaş completed his medical education at Kocaeli University Faculty of Medicine and completed his residency at İnönü University Faculty of Medicine.",
      p2:
        "He has provided care in neonatal and premature follow-up, child nutrition and growth, respiratory system, allergy, and urinary system diseases.",
      p3:
        "He has worked at Rich Hospital, Olimpos Hospital, Yaşam Hospital, and various health centers in Gaziantep.",
      p4:
        "Prioritizing patient satisfaction, Dr. Aktaş continues his work to support children’s healthy development.",
    },
    clinic: {
      title: "Our Clinic",
      location: "Antalya – Kemer",
      desc:
        "Photos from our clinic. Comfortable waiting area and a child-friendly environment.",
      addressLine1: "Merkez District, Atatürk Ave. No: 45",
      addressLine2: "Kemer / Antalya",
      prevAria: "Previous photo",
      nextAria: "Next photo",
      photoAlt: "Clinic photo {n}",
      photoAria: "Photo {n}",
    },
    reviews: {
      title: "Reviews",
      prevAria: "Previous",
      nextAria: "Next",
      items: [
        {
          id: 1,
          rating: 5,
          tag: "Communication & follow-up",
          text:
            "The examination process was organized. We got quick responses and the follow-up plan was clear.",
        },
        {
          id: 2,
          rating: 5,
          tag: "Reassuring approach",
          text:
            "Listened carefully and proceeded step by step without unnecessary medication.",
        },
        {
          id: 3,
          rating: 5,
          tag: "Child-friendly",
          text:
            "The clinic is spacious and comfortable for children. Appointment timing was good.",
        },
        {
          id: 4,
          rating: 5,
          tag: "Clear explanations",
          text:
            "Explained diagnosis and treatment options clearly. We felt relieved.",
        },
        {
          id: 5,
          rating: 4,
          tag: "Overall satisfaction",
          text:
            "Overall we were satisfied. Waiting time was reasonable and the place was clean.",
        },
      ],
    },
    footer: {
      slogan: '"Your children’s health is our top priority"',
      treatments: "Our Treatments",
      contact: "Contact",
      phone: "Phone",
      email: "E-mail",
      address: "Address",
      copyright:
        "© {year} Specialist Dr. Mümtaz Aktaş - Pediatric Health and Diseases Specialist Antalya Kemer @all rights reserved",
    },
    whatsapp: {
      aria: "Contact via WhatsApp",
      defaultMessage: "Hello, I would like to get information.",
    },
  },

  RU: {
    nav: {
      home: "Главная",
      doctor: "Наш врач",
      services: "Услуги",
      contact: "Контакт",
      appointment: "Записаться",
    },
    contact: {
      title: "Контакт",
      subtitle:
        "Вы можете связаться с нами через указанные ниже каналы для записи на прием и консультаций.",
      phone: "Телефон",
      email: "Электронная почта",
      address: "Адрес",
      mapTitle: "Карта",
    },
    hero: {
      name: "Врач-специалист Мюмтаз Акташ",
      role: "Специалист по детскому здоровью и болезням",
      desc:
        "Оказывает научно обоснованную и надежную медицинскую помощь детям и подросткам на этапах диагностики, наблюдения и лечения.",
      cta: "Связаться",
    },
    services: {
      title: "Наши услуги",
      p1:
        "Для здорового роста вашего ребенка все лабораторные исследования, необходимые для диагностики и лечения, выполняются в нашей клинике.",
      p2:
        "Помимо специальных прививок, забора крови, инфузионной терапии и ингаляционной терапии, вы также можете безопасно получить консультацию по грудному вскармливанию.",
      seeAll: "Все наши услуги",
      items: {
        healthyChild: {
          title: "Мониторинг здорового ребенка",
          desc: "Мы регулярно отслеживаем рост и развитие детей.",
        },
        prematureBaby: {
          title: "Наблюдение недоношенных детей",
          desc: "Особое наблюдение и уход за недоношенными детьми.",
        },
        vaccination: {
          title: "Отслеживание вакцинации",
          desc: "Полная программа отслеживания вакцинации для детей.",
        },
        infectionTests: {
          title: "Тесты на инфекции",
          desc: "Быстрые и надежные тесты для выявления инфекций.",
        },
        bloodLab: {
          title: "Забор крови и лабораторные анализы",
          desc: "Необходимые анализы крови и лабораторные услуги.",
        },
        breastfeeding: {
          title: "Консультация по грудному вскармливанию",
          desc: "Правильные техники и консультационные услуги.",
        },
      },
    },
    about: {
      name: "Врач-специалист Мюмтаз Акташ",
      role: "Специалист по детскому здоровью и болезням",
      p1:
        "Мюмтаз Акташ окончил медицинский факультет Университета Коджаэли и прошел ординатуру на медицинском факультете Университета Инёню.",
      p2:
        "Оказывал помощь в области наблюдения новорожденных и недоношенных, питания и роста детей, заболеваний дыхательной системы, аллергии и мочевыделительной системы.",
      p3:
        "Работал в Rich Hospital, Olimpos Hospital, Yaşam Hospital и различных медицинских центрах в Газиантепе.",
      p4:
        "Ставя удовлетворенность пациентов в приоритет, доктор Акташ продолжает работу для поддержки здорового развития детей.",
    },
    clinic: {
      title: "Наша клиника",
      location: "Анталья – Кемер",
      desc:
        "Фотографии нашей клиники. Уютная зона ожидания и дружелюбная для детей обстановка.",
      addressLine1: "Район Merkez, пр-т Ататюрка, №45",
      addressLine2: "Кемер / Анталья",
      prevAria: "Предыдущее фото",
      nextAria: "Следующее фото",
      photoAlt: "Фото клиники {n}",
      photoAria: "Фото {n}",
    },
    reviews: {
      title: "Отзывы",
      prevAria: "Предыдущий",
      nextAria: "Следующий",
      items: [
        {
          id: 1,
          rating: 5,
          tag: "Связь и наблюдение",
          text:
            "Осмотр прошёл организованно. Мы быстро получали ответы, план наблюдения был понятным.",
        },
        {
          id: 2,
          rating: 5,
          tag: "Уверенный подход",
          text:
            "Внимательно выслушал и действовал поэтапно без лишних лекарств.",
        },
        {
          id: 3,
          rating: 5,
          tag: "Комфорт для детей",
          text:
            "Клиника просторная и удобная для детей. С расписанием всё было хорошо.",
        },
        {
          id: 4,
          rating: 5,
          tag: "Понятные объяснения",
          text:
            "Чётко объяснил варианты диагностики и лечения. Нам стало спокойнее.",
        },
        {
          id: 5,
          rating: 4,
          tag: "Общее впечатление",
          text:
            "В целом довольны. Время ожидания разумное, в клинике чисто.",
        },
      ],
    },
    footer: {
      slogan: '"Здоровье ваших детей — наш главный приоритет"',
      treatments: "Наши лечения",
      contact: "Контакт",
      phone: "Телефон",
      email: "Электронная почта",
      address: "Адрес",
      copyright:
        "© {year} Uzm. Dr. Mümtaz Aktaş - Специалист по детскому здоровью и болезням Анталья Кемер @все права защищены",
    },
    whatsapp: {
      aria: "Связаться через WhatsApp",
      defaultMessage: "Здравствуйте, я хотел(а) бы получить информацию.",
    },
  },
};

type LanguageContextType = {
  currentLang: Language;
  setLang: (lang: Language) => void;
  t: Translations[Language];
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "site_lang";

const getInitialLanguage = (): Language => {
  if (typeof window === "undefined") return "TR";
  const saved = window.localStorage.getItem(STORAGE_KEY);
  return saved === "TR" || saved === "EN" || saved === "RU" ? saved : "TR";
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [currentLang, setCurrentLang] = useState<Language>(getInitialLanguage);

  const setLang = (lang: Language) => {
    setCurrentLang(lang);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, lang);
    }
  };

  const value = useMemo(
    () => ({
      currentLang,
      setLang,
      t: translations[currentLang],
    }),
    [currentLang]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
