import NextImage from 'next/image'
import { Image } from '@nextui-org/react'

import { useState, useEffect } from 'react'

export const customMDX = {
    img: (props: { alt: string, src: { src: string, width: number, height: number } }) => {

        const [img, setImg] = useState(<></>)
        useEffect(() => {
            const imgDiv =
                // @ts-ignore idk why it says align doesn't exist.
                <div align="center">
                    <Image
                        radius='lg'
                        isBlurred
                        as={NextImage}
                        alt={props.alt}
                        src={props.src.src}
                        width={props.src.width}
                        height={props.src.height}
                    />
                </div>

            setImg(imgDiv);

        }, [])

        return img;
    }
}

