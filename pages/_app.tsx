import '../output.css';
import { useState, useEffect } from 'react'
import { NextUIProvider } from '@nextui-org/react'
import { Image } from '@nextui-org/react'
import NextImage from 'next/image'
import { StrictMode } from 'react'

export default function MyApp({ Component, pageProps }) {
    return (
        <StrictMode>
            <NextUIProvider>
                <Component components={customMDX} {...pageProps} />
            </NextUIProvider>
        </StrictMode>
    )
}


const customMDX = {
    img: (props: { alt: string, src: { src: string, width: number, height: number } }) => {

        const [img, setImg] = useState(<></>)
        useEffect(() => {
            const imgComp =
                    <Image
                        radius='lg'
                        isBlurred
                        as={NextImage}
                        alt={props.alt}
                        src={props.src.src}
                        width={props.src.width}
                        height={props.src.height}
                    />
            setImg(imgComp);

        }, [])

        return img;
    }
}