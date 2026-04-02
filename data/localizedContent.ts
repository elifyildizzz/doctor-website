import type { Language } from "@/contexts/LanguageContext";

export type ServiceDetailKey =
  | "healthyChild"
  | "prematureBaby"
  | "vaccination"
  | "infectionTests"
  | "bloodLab"
  | "breastfeeding";

export const contactPhoneDisplay = "0533 255 53 61";
export const contactPhoneE164 = "905332555361";
export const contactPhoneHref = `tel:+${contactPhoneE164}`;
export const contactEmail = "aktasmumtaz@yahoo.com";
export const contactEmailHref = `mailto:${contactEmail}`;
export const contactBusinessName = "Uzm. Dr. Mümtaz Aktaş";
export const contactGoogleBusinessHref = "https://share.google/vAjWIG1MuEW1r4XGk";
export const contactGoogleReviewsHref =
  "https://www.google.com/search?sca_esv=483bff7be855fde4&hl=tr-TR&sxsrf=ANbL-n5iWXBiJDarMnv7H7eMj6VjWPo0SQ:1775130286629&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOeEDMKoS4jIOmjahSFI7yzBWDdwCEa8nMs12X138NjzRc74cyG7dlDWAcT11VANmgz6tvti6bLmvkDQ1N-_OF-slbCaGCK2bk35CHojZnW0f4wFp9A%3D%3D&q=Uzm.Dr.Mümtaz+Aktaş+Yorumlar&sa=X&ved=2ahUKEwj13qTRi8-TAxWSAtsEHWUvF-QQ0bkNegQIHRAH&biw=1440&bih=797&dpr=2";
export const contactAddress = "Yeni Mahalle, Akdeniz Caddesi 15C, Kemer / Antalya";
// 36°35'47.3"N 30°32'56.5"E
export const contactLatitude = "36.596472";
export const contactLongitude = "30.549028";
export const contactMapsLocationQuery = "Uzm.Dr.Mümtaz Aktaş";
const contactMapsLocationQueryEncoded = encodeURIComponent(contactMapsLocationQuery);
const contactMapsBusinessIdEncoded = encodeURIComponent("/g/11nbjjz18z");

export const contactLocationHref = `https://www.google.com/maps/search/?api=1&query=${contactMapsLocationQueryEncoded}&query_place_id=${contactMapsBusinessIdEncoded}`;
export const contactDirectionsHref = `https://www.google.com/maps/dir/?api=1&destination=${contactLatitude},${contactLongitude}`;
export const contactMapEmbedSrc = `https://www.google.com/maps?q=${contactLatitude},${contactLongitude}&z=17&output=embed`;

type GoogleBusinessContent = {
  reviewCardTitle: string;
  reviewCardText: string;
  reviewButton: string;
  profileButton: string;
  directionsButton: string;
};

export const googleBusinessContentByLang: Record<Language, GoogleBusinessContent> = {
  TR: {
    reviewCardTitle: "Yorumlarınız Bizim İçin Değerli",
    reviewCardText: "Deneyiminizi bizimle paylaşmak isterseniz yorum bırakabilirsiniz.",
    reviewButton: "Yorum Yap",
    profileButton: "Profili Aç",
    directionsButton: "Konumu Aç",
  },
  EN: {
    reviewCardTitle: "Your Feedback Matters",
    reviewCardText: "You can share your experience with a quick review.",
    reviewButton: "Write a Review",
    profileButton: "Open Profile",
    directionsButton: "Open Location",
  },
  RU: {
    reviewCardTitle: "Ваши отзывы важны для нас",
    reviewCardText: "Если хотите, вы можете оставить короткий отзыв.",
    reviewButton: "Оставить отзыв",
    profileButton: "Открыть профиль",
    directionsButton: "Открыть место",
  },
};

type DoctorExperienceCard = {
  title: string;
  items: string[];
};

type DoctorExperienceContent = {
  title: string;
  cards: DoctorExperienceCard[];
};

type ServiceDetailContent = Record<ServiceDetailKey, string[]>;

export const serviceNoticeByLang: Record<Language, string[]> = {
  TR: [
    "Hizmet bilgilerimiz şu anda hazırlık aşamasındadır.",
    "Yakında güncel hizmet detaylarımızı sizinle paylaşacağız.",
  ],
  EN: [
    "Our service information is currently being prepared.",
    "We will share our updated service details with you soon.",
  ],
  RU: [
    "Информация о наших услугах сейчас находится в стадии подготовки.",
    "Скоро мы поделимся с вами актуальными подробностями об услугах.",
  ],
};

export const contactAddressByLang: Record<Language, string> = {
  TR: contactAddress,
  EN: contactAddress,
  RU: contactAddress,
};

export const doctorExperienceByLang: Record<Language, DoctorExperienceContent> = {
  TR: {
    title: "Deneyim ve Uzmanlık Alanları",
    cards: [
      {
        title: "Eğitim",
        items: [
          "Kocaeli Üniversitesi Tıp Fakültesi",
          "İnönü Üniversitesi Çocuk Sağlığı ve Hastalıkları Uzmanlığı",
        ],
      },
      {
        title: "Uzmanlık Alanları",
        items: [
          "Prematüre Bebek Takibi",
          "Aşı Uygulamaları",
          "Büyüme-Gelişme Monitorizasyonu",
        ],
      },
      {
        title: "İlgi Alanları",
        items: [
          "Koruyucu Sağlık Hizmetleri",
          "Çocuk Beslenmesi",
          "Gelişimsel Pediatri",
        ],
      },
    ],
  },
  EN: {
    title: "Experience and Expertise",
    cards: [
      {
        title: "Education",
        items: [
          "Kocaeli University Faculty of Medicine",
          "Inonu University Residency in Pediatrics",
        ],
      },
      {
        title: "Areas of Expertise",
        items: [
          "Premature Baby Follow-up",
          "Vaccination Services",
          "Growth and Development Monitoring",
        ],
      },
      {
        title: "Clinical Interests",
        items: [
          "Preventive Healthcare",
          "Child Nutrition",
          "Developmental Pediatrics",
        ],
      },
    ],
  },
  RU: {
    title: "Опыт и области экспертизы",
    cards: [
      {
        title: "Образование",
        items: [
          "Медицинский факультет Университета Коджаэли",
          "Ординатура по педиатрии в Университете Инёню",
        ],
      },
      {
        title: "Области специализации",
        items: [
          "Наблюдение недоношенных детей",
          "Вакцинация",
          "Мониторинг роста и развития",
        ],
      },
      {
        title: "Профессиональные интересы",
        items: [
          "Профилактическая медицина",
          "Питание детей",
          "Педиатрия развития",
        ],
      },
    ],
  },
};

export const serviceDetailsByLang: Record<Language, ServiceDetailContent> = {
  TR: {
    healthyChild: [
      "Sağlam çocuk izlemi, doğumdan ergenlik dönemine kadar düzenli kontrol muayenelerini kapsar. Bu süreç ile büyüme, gelişme, aşı takvimi ve koruyucu sağlık başlıkları sistematik şekilde takip edilir.",
      "İzlemlerde fiziksel ölçümler, gelişimsel değerlendirmeler ve gerekli taramalar planlanır. Olası risklerin erken fark edilmesi, hem tedaviye hızlı başlamayı hem de ileride ortaya çıkabilecek sorunları azaltmayı sağlar.",
      "Aileye beslenme, emzirme, tamamlayıcı gıda ve yaş dönemine uygun bakım konusunda rehberlik verilir. Amaç, çocuğun yaşına uygun şekilde sağlıklı büyüyüp gelişmesini sürdürmesidir.",
    ],
    prematureBaby: [
      "Prematüre bebekler, gebeliğin 37. haftasından önce doğan ve yakın izlem gerektiren bebeklerdir. Doğumdan sonraki ilk günler solunum, beslenme ve enfeksiyon riski açısından kritik olduğu için dikkatli takip gerekir.",
      "İzlem sürecinde kilo alımı, solunum, kalp hızı, beslenme toleransı ve gelişimsel basamaklar düzenli değerlendirilir. Gerekli durumlarda çocuk sağlığı, nöroloji, göz ve diğer branşlarla birlikte multidisipliner planlama yapılır.",
      "Kliniğimizde prematüre bebek izlem programı bireyselleştirilmiş takvimle sürdürülür; aileye evde bakım, beslenme ve kontrol sıklığı konusunda ayrıntılı bilgilendirme sunulur.",
    ],
    vaccination: [
      "Aşı takibi, çocukları bulaşıcı ve ciddi hastalıklara karşı koruyan temel koruyucu sağlık hizmetlerinden biridir. Takvim, çocuğun yaşı ve risk durumuna göre çocuk hekimi tarafından planlanır.",
      "Aşıların önerilen zaman aralıklarında uygulanması bağışıklık yanıtının güçlü olması için önemlidir. Düzenli takip, eksik dozların önüne geçer ve korunma düzeyini artırır.",
      "Aileler her kontrolde aşı takvimi hakkında bilgilendirilir; gerekli hatırlatmalar yapılarak sürecin düzenli ve güvenli biçimde ilerlemesi sağlanır.",
    ],
    infectionTests: [
      "Enfeksiyon testleri, belirtilerin nedenini netleştirmek ve uygun tedaviyi planlamak için kullanılır. Klinik değerlendirmeye göre kan, idrar, boğaz kültürü, kan sayımı ve gaita testleri istenebilir.",
      "Hangi testlerin gerekli olduğu; çocuğun yaşı, klinik bulguları ve hastalığın seyrine göre belirlenir. Böylesi hedefli yaklaşım, gereksiz ilaç kullanımını azaltmaya yardımcı olur.",
      "Kliniğimizde hızlı antijen testleri de uygulanmaktadır: COVID-19, Influenza (Grip), Adenovirüs Solunum Yolu ve Hızlı Strep A testleri.",
    ],
    bloodLab: [
      "Kliniğimizde kan alma işlemi çocuklara uygun, güvenli ve konforlu koşullarda uygulanır. Alınan örnekler anlaşmalı laboratuvarlara uygun zincirle iletilir.",
      "Temel tetkiklerin yanı sıra gerekli durumlarda genetik ve alerji testleri gibi ileri incelemeler de planlanabilir.",
    ],
    breastfeeding: [
      "Emzirme danışmanlığı, anne sütünün etkin ve sürekli şekilde sürdürülmesini destekleyen profesyonel bir hizmettir. Anneye doğru teknik, pozisyonlama ve süt yönetimi konusunda birebir rehberlik verilir.",
      "Danışmanlık süreci, emzirme sırasında karşılaşılan sorunların çözümüne ve anne-bebek bağının güçlenmesine yardımcı olur. Ayrıca bebeğin büyüme-gelişme sürecine uygun beslenme düzeni planlanır.",
      "Kliniğimizde anneler, emzirme ile ilgili tüm soruları için sertifikalı ekip tarafından desteklenir; gerekli durumlarda doğum öncesi veya doğum sonrası ek takip önerilir.",
    ],
  },
  EN: {
    healthyChild: [
      "Healthy child monitoring includes regular check-ups from birth through adolescence. Growth, development, vaccination schedule, and preventive care are followed in a structured way.",
      "During follow-up visits, physical measurements, developmental assessments, and required screenings are planned. Detecting risks early helps start treatment sooner and reduces long-term complications.",
      "Families are guided on nutrition, breastfeeding, complementary feeding, and age-appropriate care, with the goal of supporting healthy growth at every stage.",
    ],
    prematureBaby: [
      "Premature babies are born before the 37th week of pregnancy and require close follow-up. The first days after birth are especially critical for breathing, feeding, and infection risk.",
      "Monitoring includes weight gain, respiratory status, heart rate, feeding tolerance, and developmental milestones. When needed, care is coordinated with pediatric subspecialties.",
      "At our clinic, follow-up plans are individualized for each baby, and families receive clear guidance on home care, feeding, and visit frequency.",
    ],
    vaccination: [
      "Vaccination follow-up is one of the core preventive healthcare services that protects children from serious infectious diseases. The schedule is planned by the pediatrician according to age and risk profile.",
      "Applying vaccines at recommended intervals is essential for a strong immune response. Regular follow-up prevents missed doses and improves protection.",
      "Families are informed about the vaccine schedule at every visit, with reminders to keep the process safe and consistent.",
    ],
    infectionTests: [
      "Infection tests are used to clarify the cause of symptoms and plan appropriate treatment. Depending on clinical findings, blood tests, urine tests, throat culture, complete blood count, and stool tests may be requested.",
      "The required tests are selected according to the child's age, symptoms, and disease course. This targeted approach helps avoid unnecessary medication use.",
      "Our clinic also performs rapid antigen testing, including COVID-19, Influenza, Adenovirus respiratory testing, and Rapid Strep A.",
    ],
    bloodLab: [
      "Blood collection at our clinic is performed in a safe and child-friendly setting. Samples are transferred to partner laboratories through appropriate handling procedures.",
      "In addition to routine tests, advanced investigations such as genetic and allergy testing can be planned when clinically indicated.",
    ],
    breastfeeding: [
      "Breastfeeding consultation is a professional support service aimed at maintaining effective and sustainable breastfeeding. Mothers receive one-on-one guidance on technique, positioning, and milk management.",
      "The process helps solve common breastfeeding challenges and strengthens mother-baby bonding. Feeding plans are adjusted to the baby's growth and developmental needs.",
      "Our certified team supports mothers with all breastfeeding-related questions, and additional follow-up can be arranged when needed.",
    ],
  },
  RU: {
    healthyChild: [
      "Наблюдение за здоровым ребенком включает регулярные осмотры с рождения до подросткового возраста. Рост, развитие, график вакцинации и профилактика оцениваются системно.",
      "Во время визитов планируются физические измерения, оценка развития и необходимые скрининги. Раннее выявление рисков позволяет быстрее начать лечение и снизить вероятность осложнений.",
      "Семья получает рекомендации по питанию, грудному вскармливанию, введению прикорма и уходу по возрасту, чтобы поддерживать здоровое развитие ребенка на каждом этапе.",
    ],
    prematureBaby: [
      "Недоношенные дети рождаются до 37-й недели беременности и требуют более тщательного наблюдения. Первые дни после рождения особенно важны с точки зрения дыхания, питания и риска инфекций.",
      "Контроль включает набор веса, состояние дыхания, частоту сердцебиения, переносимость питания и этапы развития. При необходимости подключаются смежные педиатрические специалисты.",
      "В нашей клинике программа наблюдения формируется индивидуально, а родители получают подробные рекомендации по домашнему уходу, питанию и графику визитов.",
    ],
    vaccination: [
      "Контроль вакцинации - основа профилактической медицины, которая защищает детей от тяжелых инфекционных заболеваний. График составляет педиатр с учетом возраста и факторов риска.",
      "Соблюдение рекомендованных интервалов вакцинации необходимо для эффективного иммунного ответа. Регулярное наблюдение помогает избежать пропущенных доз.",
      "На каждом визите родители получают разъяснения по календарю прививок и напоминания для безопасного и последовательного прохождения программы.",
    ],
    infectionTests: [
      "Анализы на инфекции помогают уточнить причину симптомов и выбрать правильную тактику лечения. По клинической необходимости могут назначаться анализ крови, анализ мочи, мазок из горла, общий анализ крови и анализ кала.",
      "Набор исследований определяется возрастом ребенка, клинической картиной и течением заболевания. Такой целевой подход помогает уменьшить ненужное применение лекарств.",
      "В нашей клинике также выполняются экспресс-антиген тесты: COVID-19, Influenza (грипп), респираторный Adenovirus и Rapid Strep A.",
    ],
    bloodLab: [
      "Забор крови в нашей клинике проводится в безопасных и комфортных для детей условиях. Образцы передаются в партнерские лаборатории с соблюдением необходимых правил.",
      "Помимо стандартных анализов, при необходимости могут быть назначены расширенные исследования, включая генетические и аллергологические тесты.",
    ],
    breastfeeding: [
      "Консультация по грудному вскармливанию - это профессиональная поддержка для эффективного и устойчивого грудного кормления. Матери получают персональные рекомендации по технике, положению и выработке молока.",
      "Консультация помогает решать распространенные трудности и укрепляет связь между матерью и ребенком. Питание корректируется в соответствии с ростом и развитием ребенка.",
      "Наша сертифицированная команда отвечает на все вопросы по грудному вскармливанию и при необходимости организует дополнительное сопровождение.",
    ],
  },
};
