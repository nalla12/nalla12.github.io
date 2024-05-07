import Header from './components/Header.tsx';
import MenuAccordion from './components/MenuAccordion.tsx';
import mainContent from '@/content/mainContent';
import useLanguage from '@/hooks/useLanguage.ts';

function App({className}: {className: string}) {
    const [lang, changeLang] = useLanguage();

    return (<div className={className}>
        <Header lang={lang} changeLang={changeLang} />
        <main>
            <MenuAccordion data={mainContent[lang]} />
        </main>
    </div>)
}

export default App;
