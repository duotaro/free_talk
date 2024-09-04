import en from "../const/locale/en.json";
import ja from "../const/locale/ja.json";

export const useLocale = (locale) => {
  const json = locale === "en" ? en : ja;
  return { locale, json };
}