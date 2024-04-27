import '../output.css';
import { NextUIProvider } from '@nextui-org/react'
import { customMDX } from './mdx-components'
import type { MDXComponents } from 'mdx/types'
import { Image, ImageProps } from '@nextui-org/react'
import NextImage from 'next/image'
import getComponents from 'nextra-theme-docs/'
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
