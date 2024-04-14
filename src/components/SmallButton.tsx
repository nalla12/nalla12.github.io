import {Button, Tooltip} from '@nextui-org/react';
import {ReactNode} from 'react';

interface Props {
    onPress?: () => void,
    highlight?: boolean,
    toolTip?: string,
    children: ReactNode
}
export default function SmallButton(props: Props) {
    const highlight = props.highlight ? 'true' : 'false';

    return (
        <Tooltip content={props.toolTip}>
            <Button
                color="secondary"
                variant="light"
                size='sm'
                isIconOnly
                data-hover={highlight}
                onPress={props.onPress}
            >
                {props.children}
            </Button>
        </Tooltip>
    )
}
