import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { en, ja, zhTW, zhCN } from './translations'

const resources = {
  en: {
    translation: en
  },
  ja: {
    translation: ja
  },
  'zh-TW': {
    translation: zhTW
  },
  'zh-CN': {
    translation: zhCN
  }
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  // default
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
})

export default i18n
