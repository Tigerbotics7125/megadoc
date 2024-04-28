import { Card, CardHeader, CardBody, CardFooter, Image, Divider, Link, Button } from '@nextui-org/react'
import { useRouter } from 'next/router'


export default function ItemCard({ name, img, link }) {
    const router = useRouter()

    const href = link == undefined ? <></> :
        <Link
            showAnchorIcon
            color='primary'
            href={link}
        >
            Documentation
        </Link>

    return (
        <Card>
            <CardBody>
                <div
                    // @ts-ignore
                    align='center'>
                    <Image
                        radius='lg'
                        width={200}
                        height={200}
                        alt={name}
                        src={img}
                        className='object-cover'
                    />
                </div>
            </CardBody>
            <CardFooter className='flex-col items-start'>
                <p>{name}</p>
                {href}
            </CardFooter>
        </Card>
    );
}