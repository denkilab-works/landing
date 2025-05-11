export type Locale = (typeof locales)[number];

export const locales = ['en', 'it', 'fr'] as const;
export const defaultLocale: Locale = 'en';
