import MenuAccordion from './components/MenuAccordion.tsx';
import WhoContentDa from './data/mainContent/da/Who.mdx';
import WhichContentDa from './data/mainContent/da/Which.mdx';
import WhatContentDa from './data/mainContent/da/What.mdx';
import WhereContentDa from './data/mainContent/da/Where.mdx';
import WhoContentEn from './data/mainContent/en/Who.mdx';
import WhichContentEn from './data/mainContent/en/Which.mdx';
import WhatContentEn from './data/mainContent/en/What.mdx';
import WhereContentEn from './data/mainContent/en/Where.mdx';
import Header from './components/Header.tsx';

function App({className}: {className: string}) {
    const lang = 'da';
    const data = {
        da: [
            {
                title: 'Hvem',
                subtitle: 'er jeg?',
                content: <WhoContentDa />
            },
            {
                title: 'Hvilke',
                subtitle: 'kompetencer har jeg?',
                content: <WhichContentDa />
            },
            {
                title: 'Hvad',
                subtitle: 'har jeg udviklet?',
                content: <WhatContentDa />
            },
            {
                title: 'Hvor',
                subtitle: 'kan jeg kontaktes?',
                content: <WhereContentDa />
            }
        ],
        en: [
            {
                title: 'Who',
                subtitle: 'am I?',
                content: <WhoContentEn />
            },
            {
                title: 'Which',
                subtitle: 'skills do I have?',
                content: <WhichContentEn />
            },
            {
                title: 'What',
                subtitle: 'have I developed?',
                content: <WhatContentEn />
            },
            {
                title: 'Where',
                subtitle: 'I be contacted?',
                content: <WhereContentEn />
            }
        ]
    };

    return (<div className={className}>
        <Header />
        <main>
            <MenuAccordion data={data[lang]} />
        </main>
    </div>)
}

export default App;
