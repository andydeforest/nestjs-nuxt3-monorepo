# nestjs-nuxt3-monorepo

This project is a barebones starter kit for a fullstack web application featuring a NestJS back-end and Nuxt 3 front-end. It is a work in progress and should probably not be used in production.

## Installation

```bash
$ npm install
```

## Running the app

```bash
$ npm run dev
```

## Project structure

```
root
├── apps
│   ├── client
│   │   ├── app.vue
│   │   ├── apps
│   │   ├── public
│   │   └── tsconfig.json
│   └── server
│       ├── src
│       ├── test
│       └── tsconfig.app.json
├── dist
│   └── apps
│       └── server
├── nest-cli.json
├── nuxt.config.ts
├── package.json
├── tsconfig.build.json
└── tsconfig.json
```