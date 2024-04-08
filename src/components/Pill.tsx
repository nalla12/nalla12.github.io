import {Chip} from '@nextui-org/react';
import Dots from './Dots';

interface Props {
    classNameBase?: string,
    classNameContent?: string,
    children: string,
}

export default function Pill(props: Props) {
    const data = props.children.split('::').map(item => item.trim());
    const title = data[0];
    const count = Number(data[1]);

    return (<>
        <Chip
            endContent={<Dots count={count} />}
            variant="flat"
            classNames={{
                base: `bg-gradient-to-br from-blue-700 to-purple-700 border-small border-white/50 mb-2 ${props.classNameBase}`,
                content: `drop-shadow shadow-black text-white text-lg pr-2 empty:px-0 ${props.classNameContent}`,
            }}
        >
            {title}
        </Chip>
    </>);
}
