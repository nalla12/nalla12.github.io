import {ReactNode} from 'react';
import {Accordion, AccordionItem} from '@nextui-org/react';
import styles from '../styles/app.module.scss';

interface AccordionData {
    title: string,
    subtitle: string,
    content: ReactNode
}
export default function MenuAccordion({data}: {data: AccordionData[]}) {
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
            {data.map((item, index) => (
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
