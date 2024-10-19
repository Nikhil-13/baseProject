import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from '../locales/en.json';
import hi from '../locales/hi.json';

export const useLocalization = () => {
  const resources = {
    en: {
      translation: en,
    },
    hi: {
      translation: hi,
    },
  };
  i18n.use(initReactI18next).init({
    resources,
    lng: 'en',
    fallbackLng: 'hi',
    compatibilityJSON: 'v3',
    interpolation: {
      escapeValue: false,
    },
  });

  const changeLanguage = async language => {
    const response = i18n.changeLanguage(language);
  };

  return {i18n, changeLanguage};
};
