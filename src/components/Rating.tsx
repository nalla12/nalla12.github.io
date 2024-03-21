import {Chip} from '@nextui-org/react';
import Dots from './Dots';

export default function Rating({children}: {children: string}) {
    const data = children.split('::').map(item => item.trim());
    const title = data[0];
    const count = Number(data[1]);

    return (<>
        <Chip
            endContent={<Dots count={count} />}
            variant="flat"
            classNames={{
                base: 'bg-gradient-to-br from-blue-700 to-purple-700 border-small border-white/50 shadow-pink-500/30 mb-2',
                content: 'drop-shadow shadow-black text-white text-lg',
            }}
        >
            {title}
        </Chip>
    </>);
}
