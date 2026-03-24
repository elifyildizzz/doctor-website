"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  ReactNode,
  useState,
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
      appointmentShort: string;
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
      appointmentShort: "Randevu Al",
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
        "Bebek, çocuk ve ergen sağlığında tanı, takip ve tedavi süreçlerinde bilimsel ve güvenilir sağlık hizmeti sunulmaktadır. Antalya Kemer’deki kliniğimizde; büyüme ve gelişim takibi, koruyucu hekimlik uygulamaları ve çocukluk çağı hastalıklarının değerlendirilmesi titizlikle yürütülmektedir.",
      cta: "İletişime Geç",
      slogan: '"Çocuklarınızın sağlığı bizim için her şeyden değerlidir"',
    },
    services: {
      title: "Hizmetlerimiz",
      p1:
        "Hizmet bilgilerimiz şu anda hazırlık aşamasındadır.",
      p2:
        "Yakında güncel hizmet detaylarımızı sizinle paylaşacağız.",
      seeAll: "Tüm Hizmetlerimiz",
      items: {
        healthyChild: {
          title: "Sağlam Çocuk İzlemi",
          desc:
            "Yenidoğan bebeklerden ergenlere kadar tüm çocukların büyüme ve gelişim takibi, aşı programları ve koruyucu sağlık hizmetleri.",
        },
        prematureBaby: {
          title: "Prematüre Bebek İzlemi",
          desc:
            "Erken doğan bebeklerin özel takibi, gelişim değerlendirmesi ve beslenme danışmanlığı hizmetleri.",
        },
        vaccination: {
          title: "Aşı Takibi",
          desc:
            "Milli aşı takvimine uygun olarak tüm aşıların zamanında ve güvenli bir şekilde uygulanması.",
        },
        infectionTests: {
          title: "Enfeksiyon Testleri",
          desc:
            "Çocuk hastalıklarının teşhisinde gerekli olan kan testleri ve enfeksiyon taramaları.",
        },
        bloodLab: {
          title: "Kan Alma ve Laboratuvar Testleri",
          desc:
            "Klinik bünyesinde kan alma işlemi ve gerekli laboratuvar testlerinin güvenli bir şekilde yapılması.",
        },
        breastfeeding: {
          title: "Emzirme Danışmanlığı",
          desc:
            "Annelere doğru emzirme teknikleri, süt üretimi ve beslenme konusunda profesyonel danışmanlık hizmeti.",
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
      location: "Yeni Mahalle, Kemer / Antalya",
      desc:
        "Kliniğimizden görüntüler. Konforlu bekleme alanı ve çocuk dostu ortam.",
      addressLine1: "Yeni Mahalle, Akdeniz Caddesi 15C",
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
        "© {year} Uzm. Dr. Mümtaz Aktaş. Tüm hakları saklıdır.",
    },
    whatsapp: {
      aria: "WhatsApp ile iletişime geç",
      defaultMessage: "Merhaba, bilgi almak istiyorum.",
    },
  },

  EN: {
    nav: {
      home: "Home",
      doctor: "Doctor",
      services: "Services",
      contact: "Contact",
      appointment: "Book an Appointment",
      appointmentShort: "Book Now",
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
      name: "Dr. Mümtaz Aktaş",
      role: "Pediatrician",
      desc:
        "We provide evidence-based and reliable care for infants, children, and adolescents throughout diagnosis, follow-up, and treatment. At our clinic in Kemer, Antalya, we offer careful growth and development monitoring, preventive pediatric care, and evaluation of childhood illnesses.",
      cta: "Contact",
      slogan: '"Your children’s health is our top priority"',
    },
    services: {
      title: "Our Services",
      p1:
        "Our service information is currently being prepared.",
      p2:
        "We will share our updated service details with you soon.",
      seeAll: "All Our Services",
      items: {
        healthyChild: {
          title: "Well-Child Follow-up",
          desc:
            "Comprehensive growth and development follow-up from newborn period to adolescence, including preventive pediatric care.",
        },
        prematureBaby: {
          title: "Premature Baby Monitoring",
          desc:
            "Individualized follow-up for preterm babies with developmental evaluation and feeding guidance.",
        },
        vaccination: {
          title: "Vaccination Follow-up",
          desc:
            "Timely and safe implementation of childhood vaccines in line with national immunization schedules.",
        },
        infectionTests: {
          title: "Infection Tests",
          desc:
            "Diagnostic blood and infection screening tests required for accurate evaluation of pediatric illnesses.",
        },
        bloodLab: {
          title: "Blood Collection and Laboratory Tests",
          desc:
            "Safe blood collection and laboratory sample handling within the clinic setting.",
        },
        breastfeeding: {
          title: "Breastfeeding Consultation",
          desc:
            "Professional support for breastfeeding techniques, milk supply management, and infant nutrition.",
        },
      },
    },
    about: {
      name: "Dr. Mümtaz Aktaş",
      role: "Pediatrician",
      p1:
        "Mümtaz Aktaş completed his medical education at Kocaeli University Faculty of Medicine and his pediatrics residency at İnönü University Faculty of Medicine.",
      p2:
        "He has worked in newborn and premature infant follow-up, child nutrition, growth and development, as well as respiratory, allergy, and urinary system conditions.",
      p3:
        "He has worked at Rich Hospital, Olimpos Hospital, Yaşam Hospital, and various health centers in Gaziantep.",
      p4:
        "Prioritizing patient satisfaction, Dr. Aktaş continues to support the healthy development of children.",
    },
    clinic: {
      title: "Our Clinic",
      location: "Yeni Mahalle, Kemer / Antalya",
      desc:
        "Photos from our clinic. Comfortable waiting area and a child-friendly environment.",
      addressLine1: "Yeni Mahalle, Akdeniz Caddesi 15C",
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
      treatments: "Services",
      contact: "Contact",
      phone: "Phone",
      email: "E-mail",
      address: "Address",
      copyright:
        "© {year} Dr. Mümtaz Aktaş. All rights reserved.",
    },
    whatsapp: {
      aria: "Contact via WhatsApp",
      defaultMessage: "Hello, I would like to get information.",
    },
  },

  RU: {
    nav: {
      home: "Главная",
      doctor: "Наш доктор",
      services: "Услуги",
      contact: "Контакты",
      appointment: "Записаться",
      appointmentShort: "Запись",
    },
    contact: {
      title: "Контакты",
      subtitle:
        "Вы можете связаться с нами через указанные ниже каналы для записи на прием и консультаций.",
      phone: "Телефон",
      email: "Электронная почта",
      address: "Адрес",
      mapTitle: "Карта",
    },
    hero: {
      name: "Д-р Мюмтаз Акташ",
      role: "Педиатр",
      desc:
        "Мы оказываем научно обоснованную и надежную медицинскую помощь младенцам, детям и подросткам на этапах диагностики, наблюдения и лечения. В нашей клинике в Кемере, Анталья, внимательно ведутся наблюдение за ростом и развитием, профилактическая педиатрия и оценка детских заболеваний.",
      cta: "Связаться",
      slogan: '"Здоровье ваших детей — наш главный приоритет"',
    },
    services: {
      title: "Наши услуги",
      p1:
        "Информация о наших услугах сейчас находится в стадии подготовки.",
      p2:
        "Скоро мы поделимся с вами актуальными подробностями об услугах.",
      seeAll: "Все наши услуги",
      items: {
        healthyChild: {
          title: "Наблюдение за здоровым ребенком",
          desc:
            "Комплексное наблюдение за ростом и развитием детей от периода новорожденности до подросткового возраста.",
        },
        prematureBaby: {
          title: "Наблюдение недоношенных детей",
          desc:
            "Индивидуальное наблюдение недоношенных детей с оценкой развития и рекомендациями по питанию.",
        },
        vaccination: {
          title: "Вакцинация",
          desc:
            "Своевременная и безопасная вакцинация детей в соответствии с национальным календарем прививок.",
        },
        infectionTests: {
          title: "Тесты на инфекции",
          desc:
            "Необходимые анализы крови и скрининг инфекций для точной диагностики детских заболеваний.",
        },
        bloodLab: {
          title: "Забор крови и лабораторные анализы",
          desc:
            "Безопасный забор крови и передача лабораторных образцов в условиях клиники.",
        },
        breastfeeding: {
          title: "Консультация по грудному вскармливанию",
          desc:
            "Профессиональная поддержка по технике грудного вскармливания, лактации и питанию младенца.",
        },
      },
    },
    about: {
      name: "Д-р Мюмтаз Акташ",
      role: "Педиатр",
      p1:
        "Мюмтаз Акташ окончил медицинский факультет Университета Коджаэли и прошел ординатуру по педиатрии в Университете Инёню.",
      p2:
        "Работал в области наблюдения новорожденных и недоношенных детей, детского питания, роста и развития, а также заболеваний дыхательной, аллергической и мочевыделительной систем.",
      p3:
        "Работал в Rich Hospital, Olimpos Hospital, Yaşam Hospital и различных медицинских центрах в Газиантепе.",
      p4:
        "Ставя удовлетворенность пациентов на первое место, доктор Акташ продолжает поддерживать здоровое развитие детей.",
    },
    clinic: {
      title: "Наша клиника",
      location: "Yeni Mahalle, Кемер / Анталья",
      desc:
        "Фотографии нашей клиники. Уютная зона ожидания и дружелюбная для детей обстановка.",
      addressLine1: "Yeni Mahalle, Akdeniz Caddesi 15C",
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
      treatments: "Услуги",
      contact: "Контакты",
      phone: "Телефон",
      email: "Электронная почта",
      address: "Адрес",
      copyright:
        "© {year} Uzm. Dr. Mümtaz Aktaş. Все права защищены.",
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
const LANGUAGE_EVENT = "site-language-change";

const normalizeLanguage = (value: string | null): Language =>
  value === "TR" || value === "EN" || value === "RU" ? value : "TR";

const getStoredLanguage = (): Language =>
  typeof window === "undefined" ? "TR" : normalizeLanguage(window.localStorage.getItem(STORAGE_KEY));

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [currentLang, setCurrentLang] = useState<Language>("TR");

  useEffect(() => {
    const syncLanguage = () => {
      setCurrentLang(getStoredLanguage());
    };

    syncLanguage();
    window.addEventListener("storage", syncLanguage);
    window.addEventListener(LANGUAGE_EVENT, syncLanguage);

    return () => {
      window.removeEventListener("storage", syncLanguage);
      window.removeEventListener(LANGUAGE_EVENT, syncLanguage);
    };
  }, []);

  const setLang = (lang: Language) => {
    window.localStorage.setItem(STORAGE_KEY, lang);
    setCurrentLang(lang);
    window.dispatchEvent(new Event(LANGUAGE_EVENT));
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
