import * as WhoContentDa from './da/Who.mdx';
import * as WhichContentDa from './da/Which.mdx';
import * as WhatContentDa from './da/What.mdx';
import * as WhereContentDa from './da/Where.mdx';
import * as WhoContentEn from './en/Who.mdx';
import * as WhichContentEn from './en/Which.mdx';
import * as WhatContentEn from './en/What.mdx';
import * as WhereContentEn from './en/Where.mdx';
import pdfUrl from '@/assets/allan-duong-cv.pdf';
import Dots from '@/components/Dots.tsx';
import Rating from '@/components/Rating.tsx';
import Project from '@/components/Project.tsx';
import ResponsiveGrid from '@/components/ResponsiveGrid.tsx';

export default {
    'da': [
        {
            title: WhoContentDa.meta.title,
            subtitle: WhoContentDa.meta.subtitle,
            content: <WhoContentDa.default pdfUrl={pdfUrl} />
        },
        {
            title: WhichContentDa.meta.title,
            subtitle: WhichContentDa.meta.subtitle,
            content: <WhichContentDa.default components={{Rating, Dots}} />
        },
        {
            title: WhatContentDa.meta.title,
            subtitle: WhatContentDa.meta.subtitle,
            content: <WhatContentDa.default components={{Project, ResponsiveGrid}} />
        },
        {
            title: WhereContentDa.meta.title,
            subtitle: WhereContentDa.meta.subtitle,
            content: <WhereContentDa.default />
        }
    ],
    'en': [
        {
            title: WhoContentEn.meta.title,
            subtitle: WhoContentEn.meta.subtitle,
            content: <WhoContentEn.default />
        },
        {
            title: WhichContentEn.meta.title,
            subtitle: WhichContentEn.meta.subtitle,
            content: <WhichContentEn.default components={{Rating, Dots}} />
        },
        {
            title: WhatContentEn.meta.title,
            subtitle: WhatContentEn.meta.subtitle,
            content: <WhatContentEn.default components={{Project, ResponsiveGrid}} />
        },
        {
            title: WhereContentEn.meta.title,
            subtitle: WhereContentEn.meta.subtitle,
            content: <WhereContentEn.default />
        }
    ]
}
