import React from 'react';

export const userLocale = 'en';
export const targetLocale = '';

export const localeContext = React.createContext({
    locale: userLocale,
    changeLocale: () => {}
});

export const targetLocaleContext = React.createContext({
    locale: targetLocale,
    changeTargetLocale: () => {}
});