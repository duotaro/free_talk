import { useRouter } from 'next/router'
import en from "../const/locale/en.json";
import ja from "../const/locale/ja.json";

export const useLocale = () => {
  const { locale } = useRouter();
  const json = locale === "en" ? en : ja;
  return { locale, json };
}