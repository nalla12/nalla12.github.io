import {ReactNode} from 'react';
import {Card, CardBody, CardFooter, CardHeader, Divider, Link} from '@nextui-org/react';
import Rating from '@/components/Rating.tsx';

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

    return (<div>
        <Card>
            <CardHeader className="flex gap-3">
                <div className="flex flex-col">
                    <p className="text-md">{props.title}</p>
                    <p className="text-default-500">{props.subtitle}</p>
                </div>
            </CardHeader>
            <Divider/>
            <CardBody>
                <div className="block mb-2">
                    {technologies?.map((item) => (
                        <Rating key={item}>
                            {item}
                        </Rating>
                    ))}
                </div>
                <div>{props.children}</div>
            </CardBody>
            <Divider/>
            {props.link && <CardFooter>
                <Link
                    isExternal
                    showAnchorIcon
                    href={props.link}
                >
                    Link to project
                </Link>
            </CardFooter>}
        </Card>
    </div>);
}
