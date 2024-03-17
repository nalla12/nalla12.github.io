import * as WhoContentDa from './da/Who.mdx';
import * as WhichContentDa from './da/Which.mdx';
import * as WhatContentDa from './da/What.mdx';
import * as WhereContentDa from './da/Where.mdx';
import * as WhoContentEn from './en/Who.mdx';
import * as WhichContentEn from './en/Which.mdx';
import * as WhatContentEn from './en/What.mdx';
import * as WhereContentEn from './en/Where.mdx';
import WorkCard from '@/components/WorkCard.tsx';

export default {
    da: [
        {title: WhoContentDa.meta.title, subtitle: WhoContentDa.meta.subtitle, content: <WhoContentDa.default />},
        {title: WhichContentDa.meta.title, subtitle: WhichContentDa.meta.subtitle, content: <WhichContentDa.default />},
        {title: WhatContentDa.meta.title, subtitle: WhatContentDa.meta.subtitle, content: <WhatContentDa.default components={{WorkCard}} />},
        {title: WhereContentDa.meta.title, subtitle: WhereContentDa.meta.subtitle, content: <WhereContentDa.default />}
    ],
    en: [
        {title: WhoContentEn.meta.title, subtitle: WhoContentEn.meta.subtitle, content: <WhoContentEn.default />},
        {title: WhichContentEn.meta.title, subtitle: WhichContentEn.meta.subtitle, content: <WhichContentEn.default />},
        {title: WhatContentEn.meta.title, subtitle: WhatContentEn.meta.subtitle, content: <WhatContentEn.default />},
        {title: WhereContentEn.meta.title, subtitle: WhereContentEn.meta.subtitle, content: <WhereContentEn.default />}
    ]
}