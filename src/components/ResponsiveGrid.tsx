import {ReactNode} from 'react';

interface Props {
    children: ReactNode,
}

export default function ResponsiveGrid(props: Props) {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {props.children}
        </div>
    );
}
