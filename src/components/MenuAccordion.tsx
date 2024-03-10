import {Accordion, AccordionItem} from '@nextui-org/react';
import {useState} from 'react';

export default function MenuAccordion() {
    const [itemInFocus, setItemInFocus] = useState<undefined | number>();

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

    return (
        <Accordion
            className='max-w-screen-md mx-auto'
            itemClasses={{
                subtitle: 'ml-2 text-lg',
                titleWrapper: 'flex-row items-end'
            }}
            motionProps={{
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
                                duration: 1,
                            },
                            opacity: {
                                easings: 'ease',
                                duration: 1,
                            },
                        },
                    },
                    exit: {
                        y: -10,
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
                },
            }}
        >
            {menuItems.map((item, index) => (
                <AccordionItem key={index}
                    aria-label={item.title}
                    title={item.title}
                    subtitle={item.subtitle}
                    onFocus={() => setItemInFocus(index)}
                    classNames={{
                        title: itemInFocus === index
                            ? 'text-amber-400 inline text-4xl'
                            : 'inline text-4xl'
                    }}
                >
                    {item.content}
                </AccordionItem>
            ))}
        </Accordion>
    );
}
