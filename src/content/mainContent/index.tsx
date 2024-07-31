import * as IntroDa from './da/Intro.mdx';
import * as AboutDa from './da/About.mdx';
import * as SkillsDa from './da/Skills.mdx';
import * as ProjectsDa from './da/Projects.mdx';
import * as ContactDa from './da/Contact.mdx';
import * as AboutEn from './en/About.mdx';
import * as SkillsEn from './en/Skills.mdx';
import * as ProjectsEn from './en/Projects.mdx';
import * as ContactEn from './en/Contact.mdx';
import pdfUrl from '@/assets/allan-duong-cv.pdf';
import pdfUrlEn from '@/assets/allan-duong-cv-english.pdf';
import Dots from '@/components/Dots.tsx';
import Rating from '@/components/Rating.tsx';
import Project from '@/components/Project.tsx';
import ResponsiveGrid from '@/components/ResponsiveGrid.tsx';
import {Link} from '@nextui-org/link';
import {ReactNode} from 'react';

interface ContentData {
    title: string,
    subtitle: string,
    content: ReactNode
}

interface IntroContent {
    da: ContentData;
    en: ContentData;
}

interface AccordionContent {
    da: ContentData[];
    en: ContentData[];
}

const components = {Rating, Dots, Project, ResponsiveGrid, Link};

export const introContent: IntroContent = {
    da: {
        title: IntroDa.meta.title,
        subtitle: IntroDa.meta.subtitle,
        content: <IntroDa.default pdfUrl={pdfUrl} />
    },
    en: {
        title: IntroDa.meta.title,
        subtitle: IntroDa.meta.subtitle,
        content: <IntroDa.default pdfUrl={pdfUrl} />
    },
};

export const accordionContent: AccordionContent = {
    da: [
        {
            title: AboutDa.meta.title,
            subtitle: AboutDa.meta.subtitle,
            content: <AboutDa.default pdfUrl={pdfUrl} />
        },
        {
            title: SkillsDa.meta.title,
            subtitle: SkillsDa.meta.subtitle,
            content: <SkillsDa.default components={components} />
        },
        {
            title: ProjectsDa.meta.title,
            subtitle: ProjectsDa.meta.subtitle,
            content: <ProjectsDa.default components={components} />
        },
        {
            title: ContactDa.meta.title,
            subtitle: ContactDa.meta.subtitle,
            content: <ContactDa.default components={{Link}} />
        }
    ],
    en: [
        {
            title: AboutEn.meta.title,
            subtitle: AboutEn.meta.subtitle,
            content: <AboutEn.default pdfUrl={pdfUrlEn} />
        },
        {
            title: SkillsEn.meta.title,
            subtitle: SkillsEn.meta.subtitle,
            content: <SkillsEn.default components={components} />
        },
        {
            title: ProjectsEn.meta.title,
            subtitle: ProjectsEn.meta.subtitle,
            content: <ProjectsEn.default components={components} />
        },
        {
            title: ContactEn.meta.title,
            subtitle: ContactEn.meta.subtitle,
            content: <ContactEn.default components={{Link}} />
        }
    ]
};
