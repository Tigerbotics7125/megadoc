# Tigerbotics Megadocs

This is the source code for Tigerbotic's documentation, accessable [here](https://tigerbotics.aurorabotics.com).

# Local Setup

This project is built on [Next.js](https://nextjs.org/). You can run it on your machine, provided you have [Node.js](https://nodejs.org/en) and [pnpm](https://pnpm.io/installation) installed locally.

If you need to install `Node.js` and `pnpm`, you can use their links above to go to their respective download / installation pages.

First, clone the repo:
```bash
git clone https://github.com/tigerbotics7125/megadoc.git
```

Change directory (cd) into the folder:
```bash
cd docs
```

Install dependencies:
```bash
pnpm install
```

Then, run the project:
```bash
pnpm run dev
```

You can then visit [http://localhost:3000](http://localhost:3000) to see it in action.

# Writing documentation

**The site is generated using Nextra, their guide will have the most information about how this project works, you can find it [here](https://nextra.site/docs/guide).**

The following will explain the basics however:

- The site is automatically generated with files that are in the `pages/` folder.

    - These files typically end in `.md` or `.mdx` (Nextra supports other formats, but it is not as intuitive as plain Markdown).

        - `.md` files are Markdown files, you can find documentation on how to write in basic Markdown [here](https://github.github.com/gfm/).

        - `.mdx` files are also Markdown, but they allow for extra front end logic using React components, you can find more info about MDX [here](https://nextra.site/docs/guide/markdown).
            - You should install a MDX language extension for VSCode such as [this one](https://marketplace.visualstudio.com/items?itemName=unifiedjs.vscode-mdx) if you plan to use MDX files.
- Images are stored in the `public/` folder.
    - Nextra automatically optimizes your images when using the Markdown syntax. You do not need to specify the width and height of the image, just use the ![]() Markdown syntax:
    ```md
    ![Image Name](/image.png)
    ```
