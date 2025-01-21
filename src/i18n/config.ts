import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      title: 'Speed Reader',
      text: 'Text:',
      placeholder: 'With this method, you can now read long texts much faster!',
      wpmLabel: 'Words per minute:',
      start: 'Start',
      stop: 'Stop',
      about: 'About Speed Reading',
      aboutText: 'This application helps increase your reading speed using the Optimal Recognition Point (ORP) method. The optimal recognition point of each word is shown in red, allowing your eye to perceive the word faster. With regular practice, you can significantly increase your reading speed.',
    },
  },
  tr: {
    translation: {
      title: 'Hızlı Okuyucu',
      text: 'Metin:',
      placeholder: 'Bu yöntemle artık uzun metinleri çok daha kısa sürede okuyabileceksiniz!',
      wpmLabel: 'Dakikadaki kelime sayısı:',
      start: 'Başlat',
      stop: 'Durdur',
      about: 'Hızlı Okuma Hakkında',
      aboutText: 'Bu uygulama, Optimal Tanıma Noktası (ORP) yöntemini kullanarak okuma hızınızı artırmanıza yardımcı olur. Her kelimenin optimal tanıma noktası kırmızı renkte gösterilir, bu da gözünüzün kelimeyi daha hızlı algılamasını sağlar. Düzenli pratik yaparak, okuma hızınızı önemli ölçüde artırabilirsiniz.',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // Changed from 'tr' to 'en'
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;