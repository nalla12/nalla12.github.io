import {Chip} from '@nextui-org/react';
import {ReactNode} from 'react';

interface Props {
    classNameBase?: string,
    classNameContent?: string,
    children: ReactNode,
}

export default function Pill(props: Props) {
    return (<>
        <Chip
            variant="flat"
            classNames={{
                base: `h-9 bg-gradient-to-br from-blue-700 to-purple-700 border-small border-white/50 ${props.classNameBase}`,
                content: `drop-shadow shadow-black text-white text-lg -mt-[2px] empty:px-0 ${props.classNameContent}`,
            }}
        >
            {props.children}
        </Chip>
    </>);
}
