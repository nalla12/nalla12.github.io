import {useState} from 'react';
import Header from './components/Header.tsx';
import MenuAccordion from './components/MenuAccordion.tsx';
import mainContent from '@/content/mainContent';

function App({className}: {className: string}) {
    const [lang, setLang] = useState<'da' | 'en'>('da');

    const handleChangeLang = (lang: 'da' | 'en') => {
        setLang(lang);
    }

    return (<div className={className}>
        <Header lang={lang} changeLang={handleChangeLang} />
        <main>
            <MenuAccordion data={mainContent[lang]} />
        </main>
    </div>)
}

export default App;
