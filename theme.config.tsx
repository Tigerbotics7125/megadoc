import React from 'react'
import { useRouter } from 'next/router'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'
import Image from 'next/image'
import { title } from 'process'

const config: DocsThemeConfig = {
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s - Tigerbotics',
      }
    } else {
      return {
        title: "Tigerbotics"
      }
    }
  },
  head: function useHead() {
    const { title, frontMatter } = useConfig();
    const { asPath } = useRouter();
    return (
      <>

        <link rel="icon" href="/favicon-32x32.png" />

        <meta property="og:title" content={title}/>
        <meta property="og:type" content="website"/>
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="og:url" content={"https://tigerbotics.aurorabotics.com" + asPath}/>
        <meta property="twitter:image" content="/tigerbotics-hexagons.png"/>
        <meta property="og:image" content="/tigerbotics-hexagons.png"/>
        {/* <meta content="Tigerbotic's collective knowledge database." property="og:description" /> */}
        <meta property="og:description" content={frontMatter.description || "Tigerbotic's collective knowledge database."}/>
        <meta property="theme-color" content="#EE4B2B" data-react-helmet="true"/>
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
    defaultMenuCollapseLevel: 1,
    titleComponent({ title, route, type}) {
      // not a doc don't worry abt it.
      if (type != "doc")
        return <>{title}</>

      // Not implemented yet.
      if (route === "" || route === "#")
        return <s>{title}</s>
      else
        return <>{title}</>
    }
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
