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

const comps = {Rating, Dots, Project, ResponsiveGrid, Link};
export default {
    'da': [
        {
            title: AboutDa.meta.title,
            subtitle: AboutDa.meta.subtitle,
            content: <AboutDa.default pdfUrl={pdfUrl} />
        },
        {
            title: SkillsDa.meta.title,
            subtitle: SkillsDa.meta.subtitle,
            content: <SkillsDa.default components={comps} />
        },
        {
            title: ProjectsDa.meta.title,
            subtitle: ProjectsDa.meta.subtitle,
            content: <ProjectsDa.default components={comps} />
        },
        {
            title: ContactDa.meta.title,
            subtitle: ContactDa.meta.subtitle,
            content: <ContactDa.default components={{Link}} />
        }
    ],
    'en': [
        {
            title: AboutEn.meta.title,
            subtitle: AboutEn.meta.subtitle,
            content: <AboutEn.default pdfUrl={pdfUrlEn} />
        },
        {
            title: SkillsEn.meta.title,
            subtitle: SkillsEn.meta.subtitle,
            content: <SkillsEn.default components={comps} />
        },
        {
            title: ProjectsEn.meta.title,
            subtitle: ProjectsEn.meta.subtitle,
            content: <ProjectsEn.default components={comps} />
        },
        {
            title: ContactEn.meta.title,
            subtitle: ContactEn.meta.subtitle,
            content: <ContactEn.default components={{Link}} />
        }
    ]
}
