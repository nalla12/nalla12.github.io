import {Accordion, AccordionItem} from '@nextui-org/react';

export default function MenuAccordion() {
    const defaultContent =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

    return (
        <Accordion
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
            <AccordionItem key="1" aria-label="Hvem?" title="Hvem?" className="bg-amber-600">
                {defaultContent}
            </AccordionItem>
            <AccordionItem key="2" aria-label="Hvad?" title="Hvad?">
                {defaultContent}
            </AccordionItem>
            <AccordionItem key="3" aria-label="Hvor?" title="Hvor?">
                {defaultContent}
            </AccordionItem>
        </Accordion>
    );
}
