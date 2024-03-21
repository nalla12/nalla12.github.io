import { FaRegCircleDot } from 'react-icons/fa6';

export default function Dots({count}: {count: number}) {
    return (<>
        {Array.from({length: count}).map(() => <span className='mr-1'><FaRegCircleDot /></span>)}
    </>);
}
