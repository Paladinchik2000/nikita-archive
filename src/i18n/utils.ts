import { defaultLocale, type Locale, locales, ui } from './ui';

export function isLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export function getLangFromUrl(url: URL): Locale {
  const [, maybeLocale] = url.pathname.split('/');
  return isLocale(maybeLocale) ? maybeLocale : defaultLocale;
}

export function useTranslations(lang: Locale) {
  return function t(path: string): string {
    const value = path.split('.').reduce<unknown>((current, key) => {
      if (current && typeof current === 'object' && key in current) {
        return (current as Record<string, unknown>)[key];
      }

      return undefined;
    }, ui[lang]);

    return typeof value === 'string' ? value : path;
  };
}

export function localizePath(path: string, lang: Locale): string {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const pathWithoutLocale = stripLocaleFromPath(normalizedPath);

  if (lang === defaultLocale) {
    return pathWithoutLocale;
  }

  return pathWithoutLocale === '/' ? `/${lang}` : `/${lang}${pathWithoutLocale}`;
}

export function stripLocaleFromPath(path: string): string {
  const normalizedPath = path.replace(/\/$/, '') || '/';

  for (const locale of locales) {
    if (locale === defaultLocale) continue;
    if (normalizedPath === `/${locale}`) return '/';
    if (normalizedPath.startsWith(`/${locale}/`)) {
      return normalizedPath.slice(locale.length + 1) || '/';
    }
  }

  return normalizedPath;
}

export function getLocalizedUrl(path: string, lang: Locale): string {
  return localizePath(path, lang);
}

export function getAlternateLocale(lang: Locale): Locale {
  return lang === 'en' ? 'ru' : 'en';
}

export function getAlternateLocaleUrl(path: string, lang: Locale): string {
  return localizePath(stripLocaleFromPath(path), getAlternateLocale(lang));
}

export function cleanSlug(id: string): string {
  return id.replace(/\.(en|ru)$/, '').replace(/(en|ru)$/, '');
}

export function getContentSlug(entry: { id: string; data: { translationKey?: string } }): string {
  return entry.data.translationKey ?? cleanSlug(entry.id);
}
