import React from 'react';

export interface userLocaleInterface {
    locale: string,
    changeLocale: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export interface targetLocaleInterface {
    locale: string,
    changeTargetLocale: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const userLocale = 'en';
export const targetLocale = '';

export const localeContext = React.createContext<userLocaleInterface | null>({
    locale: 'en',
    changeLocale: () => {}
});

export const targetLocaleContext = React.createContext<targetLocaleInterface | null>({
    locale: 'de',
    changeTargetLocale: () => {}
});