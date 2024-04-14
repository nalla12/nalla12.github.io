import Pill from '@/components/Pill.tsx';
import Dots from '@/components/Dots.tsx';

interface Props {
    children: string,
}

export default function Rating(props: Props) {
    const data = props.children.split('::').map(item => item.trim());
    const title = data[0];
    const count = Number(data[1]);

    return (<>
        <Pill classNameBase='mb-3'>
            <span className={count ? 'mr-2' : undefined}>{title}</span>
            {!!count && <Dots count={count} />}
        </Pill>
    </>);
}
