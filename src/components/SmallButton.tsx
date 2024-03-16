import {Button, Tooltip} from '@nextui-org/react';
import {ReactNode} from 'react';

export default function SmallButton({children}: {children: ReactNode}) {
    return (
        <Tooltip content='Does not work yet'>
            <Button color="secondary" variant="light" size='sm' isIconOnly>
                {children}
            </Button>
        </Tooltip>
    )
}
