import React, {
  useState,
  createContext,
  useContext,
  PropsWithChildren,
} from 'react';
import { IntlProvider } from 'react-intl';

import en from './messages/en.json';
import ru from './messages/ru.json';

type Locale = 'en' | 'ru';

const messages = { en, ru };

// Create a context to store current locale
const LocaleContext = createContext<{
  locale: Locale;
  setLocale: (l: Locale) => void;
}>({
  locale: 'en',
  setLocale: () => {},
});

export const useLocale = () => useContext(LocaleContext);

export const IntlWrapper: React.FC<PropsWithChildren> = props => {
  const [locale, setLocale] = useState<Locale>('en');

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <IntlProvider locale={locale} messages={messages[locale]} key={locale}>
        {props.children}
      </IntlProvider>
    </LocaleContext.Provider>
  );
};
