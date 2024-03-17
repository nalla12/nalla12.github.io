import {Card, CardHeader, CardBody, CardFooter, Divider, Link} from '@nextui-org/react';

export default function WorkCard() {
    return (
        <Card className="work-card">
            <CardHeader className="flex gap-3">
                <div className="flex flex-col">
                    <p className="text-md">Project name</p>
                    <p className="text-default-500">Year, platform, libraries, framework</p>
                </div>
            </CardHeader>
            <Divider/>
            <CardBody>
                <p>Description. Make beautiful websites regardless of your design experience.</p>
            </CardBody>
            <Divider/>
            <CardFooter>
                <Link
                    isExternal
                    showAnchorIcon
                    href="https://github.com/nextui-org/nextui"
                >
                    Link to project
                </Link>
            </CardFooter>
        </Card>
    );
}
