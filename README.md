# Hello, guys :grinning:
I created this project to learn a little about how excalidraw works :sunglasses:

## Project Description :scream:
Hey guys!

I'm developing a project inspired by the Excalidraw website and using the React-Flow library to create flowcharts. At the top of the interface, there is a fixed menu bar that makes it easy to create nodes. There are four different types of nodes:

- **Entry node**

- **Processing Node**

- **Exit node**

- **Custom node**

To connect these nodes, it is important to understand that the input node is of type target, while the output node is of type source. This means you can add a connection between these nodes. The processing node has connection options at both the top (source) and bottom (target).

As you can see, there is a difference between origin and destination. It is not possible to add a connection between two nodes of type input, as both are targets.

### Tech :boom:
- NextJs
- React-flow


### Features :sparkler:
- plugins
    - background
    - miniMap
    - Controls
- Menu
    - create node input
    - create node processing
    - create node output
    - create node custom
- Custom Node
    - input (allow typing on node)
    - localStorage (persist text in input)
    - reuse custom nodes to create other node types
- LocalStorage
    - zustand store
    - nodes text
- Custom Line Connection
- functions utils
- custom hook
- shadcn-ui
>you can adapt shadcn-ui with react-flow
    - Input
    - Button
    - Dropdown-menu
    - Next-themes
- Zustand
    - create store
    - persist store in localstorage

### Challenge: Project Improvement Proposal

- Implementation of shortcuts for creating node types.

- Added new node types.

- Added new cores for custom nodes.

- Please feel free to make additional changes and improvements.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

1. install the project dependencies
```
npm i
```
2. run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
