import {ReactNode} from 'react';
import {Accordion, AccordionItem} from '@nextui-org/react';
import styles from '../styles/menuAccordion.module.scss';
import { BiPlus } from 'react-icons/bi';
import { BiMinus } from 'react-icons/bi';
import {motionProps} from '@/configs/motionProps.ts';

interface AccordionData {
    title: string,
    subtitle: string,
    content: ReactNode
}
export default function MenuAccordion({data}: {data: AccordionData[]}) {
    return (
        <Accordion
            defaultExpandedKeys={["0"]}
            className='max-w-full mx-auto p-0'
            keepContentMounted={true}
            motionProps={motionProps.menuAccordion}
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
                    onPress={(e) => {
                        setTimeout(() => {
                            e.target.scrollIntoView({behavior: 'smooth'});
                        }, 200)
                    }}
                >
                    {/*<item.content />*/}
                    {item.content}
                </AccordionItem>
            ))}
        </Accordion>
    );
}
