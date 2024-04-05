import React from 'react'
import { useRouter } from 'next/router'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'
import Image from 'next/image'

const config: DocsThemeConfig = {
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s - Tigerbotics Megadocs'
      }
    }
  },
  head: function useHead() {
    const { title } = useConfig();
    const { asPath } = useRouter();
    return (
      <>
        <link rel="icon" href="/favicon-32x32.png" />
        <meta content={title} property="og:title" />
        <meta property="og:type" content="website" />
        <meta content={"https://tigerbotics.aurorabotics.com" + asPath} property="og:url" />
        <meta content="/Tigerbotics-flat.svg" property="og:image" />
        <meta content="This website serves as a collection point for all information about Tigerbotics, whether it be our cooperative technical documentation base, our Open Alliance build logs, or simply pictures of our robot, you can find it here." property="og:description" />
        <meta content="#EE4B2B" data-react-helmet="true" name="theme-color" />
      </>
    );
  },
  primaryHue: 9.85,
  primarySaturation: 81.93,
  docsRepositoryBase: 'https://github.com/tigerbotics7125/megadoc/tree/main',
  logo: (
    <div style={{ margin: "0, .5em, .5em, .5em" }}>
      <Image src="/Tigerbotics_Text.svg" alt="Logo" width={325} height={50} />
    </div>
  ),
  sidebar: {
    toggleButton: true,
    defaultMenuCollapseLevel: 1
  },
  feedback: {
    content: "Give feedback for this page →"
  },
  editLink: {
    text: "Make changes to this page →"
  },
  footer: {
    text:
      <>
        <span>
          GNU General Public License v3.0 {new Date().getFullYear()} ©{' '}
          <a href="https://tigerbotics.aurorabotics.com" target="_blank">Tigerbotics</a>
          .
        </span>
      </>
  },
}

export default config
