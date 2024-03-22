import {ReactNode} from 'react';
import {Card, CardBody, CardFooter, CardHeader, Link} from '@nextui-org/react';
import Tag from '@/components/Tag.tsx';

interface Props {
    title: string,
    subtitle?: string,
    tech?: string,
    link?: string,
    children: ReactNode,
}

export default function Project(props: Props) {
    const technologies = props.tech?.split(',').map(item => item.trim());
    // Year, platform, libraries, framework

    return (<>
        <Card className='bg-blue-950/60 border-1 border-blue-900 max-w-xl mb-5 px-3 py-1 rounded-3xl'>
            <CardHeader className="flex flex-col gap-3 items-start pb-0">
                <div className="flex flex-row gap-2 align-bottom justify-between w-full">
                    <p className="text-3xl">{props.title}</p>
                    <p className="text-xl text-default-500">{props.subtitle}</p>
                </div>
                <div className="flex flex-wrap gap-2 mb-2 w-full">
                    {technologies?.map((item) => (
                        <Tag key={item} classNameContent="text-md">
                            {item}
                        </Tag>
                    ))}
                </div>
            </CardHeader>
            <CardBody>
                <div>{props.children}</div>
            </CardBody>
            {props.link && <>
                <CardFooter>
                    <Link
                        isExternal
                        showAnchorIcon
                        href={props.link}
                    >
                        Link to project
                    </Link>
                </CardFooter>
            </>}
        </Card>
    </>);
}
