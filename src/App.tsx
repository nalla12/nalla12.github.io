import Header from './components/Header.tsx';
import MenuAccordion from './components/MenuAccordion.tsx';
import mainContent from './data/mainContent';

function App({className}: {className: string}) {
    const lang = 'da';

    return (<div className={className}>
        <Header />
        <main>
            <MenuAccordion data={mainContent[lang]} />
        </main>
    </div>)
}

export default App;
