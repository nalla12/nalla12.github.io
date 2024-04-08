import {ReactNode} from 'react';
import {Accordion, AccordionItem} from '@nextui-org/react';
import styles from '../styles/app.module.scss';
import { BiPlus } from 'react-icons/bi';
import { BiMinus } from 'react-icons/bi';

interface AccordionData {
    title: string,
    subtitle: string,
    content: ReactNode
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    // content: (props: any) => ReactElement
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
            keepContentMounted={true}
            motionProps={motionProps}
            showDivider={false}
        >
            {data.map((item, index) => (
                <AccordionItem key={index}
                    aria-label={`${item.title} ${item.subtitle}`}
                    title={item.title}
                    subtitle={item.subtitle}
                    className={`${styles.btnWrapper} [&_button]:px-0 *:m-0`}
                    classNames={{
                        content: 'py-4',
                        indicator: 'text-4xl sm:text-5xl text-primary -mt-2',
                        subtitle: `${styles.subtitle} accordion-subtitle sm:mt-0 sm:ml-3 text-2xl sm:text-4xl`,
                        title: `${styles.strokeTitle} ${styles.strokeTitleBg} font-extrabold text-5xl sm:text-7xl lg:text-8xl tracking-wider uppercase`,
                        titleWrapper: 'sm:flex-row sm:items-end'
                    }}
                    disableIndicatorAnimation={true}
                    indicator={({ isOpen }) => (isOpen ? <BiMinus /> : <BiPlus />)}
                >
                    {/*<item.content />*/}
                    {item.content}
                </AccordionItem>
            ))}
        </Accordion>
    );
}
