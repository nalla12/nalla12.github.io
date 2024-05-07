import {useState} from 'react';

export default function useLanguage(defaultLang: 'da' | 'en' = 'da') {
    const [lang, setLang] = useState<'da' | 'en'>(defaultLang);
    const handleChangeLang = (lang: 'da' | 'en') => {
        setLang(lang);
    }

    return [lang, handleChangeLang] as const;
}
