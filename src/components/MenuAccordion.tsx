import {Accordion, AccordionItem} from '@nextui-org/react';
import styles from '../styles/app.module.scss';

export default function MenuAccordion() {
    const defaultContent =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

    const menuItems = [
        {
            title: 'Hvem',
            subtitle: 'er jeg?',
            content: defaultContent
        },
        {
            title: 'Hvilke',
            subtitle: 'teknologier kan jeg?',
            content: defaultContent
        },
        {
            title: 'Hvad',
            subtitle: 'har jeg udviklet?',
            content: defaultContent
        },
        {
            title: 'Hvor',
            subtitle: 'kan jeg kontaktes?',
            content: defaultContent
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
                        duration: 0.6,
                    },
                },
            },
            exit: {
                y: 0,
                opacity: 0,
                height: 0,
                transition: {
                    height: {
                        easings: 'ease',
                        duration: 0.2,
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
        >
            {menuItems.map((item, index) => (
                <AccordionItem key={index}
                    aria-label={item.title}
                    title={item.title}
                    subtitle={item.subtitle}
                    className={`[&_button]:px-0 ${styles.btnWrapper}`}
                    classNames={{
                        subtitle: `${styles.subTitle} accordion-subtitle md:ml-3 text-2xl md:text-4xl`,
                        title: `${styles.strokeTitle} ${styles.strokeTitleBg} font-extrabold text-5xl md:text-7xl lg:text-8xl tracking-wider uppercase`
                    }}
                >
                    {item.content}
                </AccordionItem>
            ))}
        </Accordion>
    );
}
// ${itemInFocus === index && 'text-yellow-500'}
