import {Accordion, AccordionItem} from '@nextui-org/react';
import styles from '../styles/app.module.scss';
import WhoContentDa from '../contents/da/Who.mdx';
import WhichContentDa from '../contents/da/Which.mdx';
import WhatContentDa from '../contents/da/What.mdx';
import WhereContentDa from '../contents/da/Where.mdx';

export default function MenuAccordion() {
    const menuItems = [
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
    ];
    const motionProps = {
        variants: {
            enter: {
                y: 0,
                opacity: 1,
                height: 'auto',
                transition: {
                    height: {
                        type: 'spring',
                        stiffness: 500,
                        damping: 30,
                        duration: 1.5,
                    },
                    opacity: {
                        easings: 'ease',
                        duration: 1,
                    },
                },
            },
            exit: {
                y: -20,
                opacity: 0,
                height: 0,
                transition: {
                    height: {
                        easings: 'ease',
                        duration: 0.25,
                    },
                    opacity: {
                        easings: 'ease',
                        duration: 0.3,
                    },
                },
            },
        }
    };

    return (
        <Accordion
            className='max-w-full mx-auto p-0'
            itemClasses={{
                titleWrapper: 'md:flex-row md:items-end'
            }}
            motionProps={motionProps}
            showDivider={false}
        >
            {menuItems.map((item, index) => (
                <AccordionItem key={index}
                    aria-label={`${item.title} ${item.subtitle}`}
                    title={item.title}
                    subtitle={item.subtitle}
                    className={`[&_button]:px-0 ${styles.btnWrapper}`}
                    classNames={{
                        indicator: 'text-4xl text-primary',
                        subtitle: `${styles.subtitle} accordion-subtitle md:ml-3 text-2xl md:text-4xl`,
                        title: `${styles.strokeTitle} ${styles.strokeTitleBg} font-extrabold text-5xl md:text-7xl lg:text-8xl tracking-wider uppercase`
                    }}
                    disableIndicatorAnimation={true}
                    indicator={({ isOpen }) => (isOpen ? <>-</> : <>+</>)}
                >
                    {item.content}
                </AccordionItem>
            ))}
        </Accordion>
    );
}
