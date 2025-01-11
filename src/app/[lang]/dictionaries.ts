import 'server-only'
const dictionaries = {
  en: () => import('../../../public/dictionaries/en.json').then((module) => module.default),
  tr: () => import('../../../public/dictionaries/tr.json').then((module) => module.default),
}
export const getDictionary = async (locale: 'en' | 'tr') => dictionaries[locale]()