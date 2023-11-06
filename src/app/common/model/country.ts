export const COUNTRIES = ['Ireland', 'United Kingdom'] as const;
export type Country = (typeof COUNTRIES)[number];
