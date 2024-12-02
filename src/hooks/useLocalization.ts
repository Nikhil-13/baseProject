import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from '../locales/en.json';
import hi from '../locales/hi.json';
import AsyncStorage from '@react-native-async-storage/async-storage';

type lang = 'en' | 'hi';

export default () => {
  const resources = {
    en: {
      translation: en,
    },
    hi: {
      translation: hi,
    },
  };

  const initializeI18n = async () => {
    const currentLanguage = (await AsyncStorage.getItem('lng')) || 'en'; // Ensure a default value is used if none is set
    i18n.use(initReactI18next).init({
      resources,
      lng: currentLanguage,
      fallbackLng: 'en',
      compatibilityJSON: 'v3',
      interpolation: {
        escapeValue: false,
      },
    });
  };

  initializeI18n();

  const changeLanguage = (language: lang) => {
    i18n
      .changeLanguage(language)
      .then(() => AsyncStorage.setItem('lng', language));
  };

  return {i18n, changeLanguage};
};
