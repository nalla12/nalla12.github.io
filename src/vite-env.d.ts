/// <reference types="vite/client" />
declare module '*.mdx' {
    import {ReactElement} from 'react';

    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    let MDXComponent: (props: any) => ReactElement;

    export const meta: {[key: string]: string};
    export default MDXComponent;
}
