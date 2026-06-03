export type Lang = 'ru' | 'kz' | 'en';

export const languages: Lang[] = ['ru', 'kz', 'en'];

export const langLabels: Record<Lang, string> = {
  ru: 'Русский',
  kz: 'Қазақша',
  en: 'English'
};

export const dictionary = {
  ru: {
    locale: 'ru-RU',
    shortName: 'КМВК',
    name: 'Кызылординский медицинский высший колледж',
    tagline: 'Цифровой портал медицинского образования',
    heroTitle: 'Медицинское образование с историей с 1928 года',
    heroText: 'Современный портал колледжа: поступление, специальности, практика, документы, новости, галерея, обратная связь и цифровые сервисы.',
    apply: 'Подать заявку', chooseProgram: 'Выбрать специальность', learnMore: 'Подробнее', sections: 'Разделы', portalTitle: 'Официальная платформа колледжа', specialties: 'Специальности', news: 'Новости', gallery: 'Галерея', contacts: 'Контакты',
    nav: { about: 'О колледже', specialties: 'Специальности', admissions: 'Абитуриентам', students: 'Студентам', parents: 'Родителям', practice: 'Практика', documents: 'Документы', news: 'Новости', gallery: 'Галерея', contacts: 'Контакты' }
  },
  kz: {
    locale: 'kk-KZ', shortName: 'ҚМЖК', name: 'Қызылорда медициналық жоғары колледжі', tagline: 'Медициналық білім берудің цифрлық порталы', heroTitle: '1928 жылдан басталған медициналық білім тарихы', heroText: 'Колледждің заманауи порталы: қабылдау, мамандықтар, практика, құжаттар, жаңалықтар, галерея және цифрлық сервистер.', apply: 'Өтінім беру', chooseProgram: 'Мамандық таңдау', learnMore: 'Толығырақ', sections: 'Бөлімдер', portalTitle: 'Колледждің ресми платформасы', specialties: 'Мамандықтар', news: 'Жаңалықтар', gallery: 'Галерея', contacts: 'Байланыс',
    nav: { about: 'Колледж туралы', specialties: 'Мамандықтар', admissions: 'Талапкерлерге', students: 'Студенттерге', parents: 'Ата-аналарға', practice: 'Практика', documents: 'Құжаттар', news: 'Жаңалықтар', gallery: 'Галерея', contacts: 'Байланыс' }
  },
  en: {
    locale: 'en-US', shortName: 'KMHC', name: 'Kyzylorda Medical Higher College', tagline: 'Digital medical education portal', heroTitle: 'Medical education with a history since 1928', heroText: 'A modern college portal for admissions, programs, clinical practice, documents, news, gallery, communication and digital services.', apply: 'Apply now', chooseProgram: 'Choose a program', learnMore: 'Learn more', sections: 'Sections', portalTitle: 'Official college platform', specialties: 'Programs', news: 'News', gallery: 'Gallery', contacts: 'Contacts',
    nav: { about: 'About', specialties: 'Programs', admissions: 'Admissions', students: 'Students', parents: 'Parents', practice: 'Practice', documents: 'Documents', news: 'News', gallery: 'Gallery', contacts: 'Contacts' }
  }
} as const;

export function getCopy(lang: string) {
  return dictionary[(languages.includes(lang as Lang) ? lang : 'ru') as Lang];
}

export function withBase(path = '') {
  const base = import.meta.env.BASE_URL || '/';
  const cleanPath = path.replace(/^\/+/, '');
  return `${base}${cleanPath}`.replace(/\/+/g, '/');
}
