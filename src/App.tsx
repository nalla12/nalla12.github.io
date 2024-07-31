import Header from './components/Header.tsx';
import MenuAccordion from './components/MenuAccordion.tsx';
import {accordionContent, introContent} from '@/content/mainContent';
import useLanguage from '@/hooks/useLanguage.ts';

function App({className}: {className: string}) {
    const [lang, changeLang] = useLanguage();

    return (<div className={className}>
        <Header lang={lang} changeLang={changeLang} />
        <main>
            <div className='intro-text mb-5'>
                {introContent[lang].content}
            </div>
            <MenuAccordion data={accordionContent[lang]}/>
        </main>
    </div>)
}

export default App;
