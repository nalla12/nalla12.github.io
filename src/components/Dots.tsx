import { FaRegCircleDot } from 'react-icons/fa6';

export default function Dots({count}: {count: number}) {
    return (<div className='inline'>
        {Array.from({length: count}).map(() => (
            <span className='mr-1 last:mr-2 *:inline'><FaRegCircleDot /></span>
        ))}
    </div>);
}
