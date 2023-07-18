# cookies-stand

This template should help get you started developing with Vue 3 in Vite.

## Problem Domain

Adding a form to your existing cookie stand project so that you can add new locations to the table by simply inputting their information with the form

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## PROJECT FILE STRUCTURE

.
├── index.html
├── LICENSE
├── .eslintrc.cjs
├── vite.config.js
├── vitest.config.js
├── README.md
├── public
│ └── favicon.ico
├── .prettierrc.json
├── .gitignore
├── package-lock.json
├── package.json
├── .github
│ └── workflow
│ └── node.yml
├── .git
│ ├── config
│ ├── objects
│ │ ├── pack
│ │ │ ├── pack-5120aaa52d15a0d5505af21d38dc79d4d55a1ac4.idx
│ │ │ └── pack-5120aaa52d15a0d5505af21d38dc79d4d55a1ac4.pack
│ │ └── info
│ ├── HEAD
│ ├── info
│ │ └── exclude
│ ├── logs
│ │ ├── HEAD
│ │ └── refs
│ │ ├── heads
│ │ │ ├── reedBranch
│ │ │ └── main
│ │ └── remotes
│ │ └── origin
│ │ └── HEAD
│ ├── description
│ ├── hooks
│ │ ├── commit-msg.sample
│ │ ├── pre-rebase.sample
│ │ ├── pre-commit.sample
│ │ ├── applypatch-msg.sample
│ │ ├── fsmonitor-watchman.sample
│ │ ├── pre-receive.sample
│ │ ├── prepare-commit-msg.sample
│ │ ├── post-update.sample
│ │ ├── pre-merge-commit.sample
│ │ ├── pre-applypatch.sample
│ │ ├── pre-push.sample
│ │ ├── update.sample
│ │ └── push-to-checkout.sample
│ ├── refs
│ │ ├── heads
│ │ │ ├── reedBranch
│ │ │ └── main
│ │ ├── tags
│ │ └── remotes
│ │ └── origin
│ │ └── HEAD
│ ├── index
│ └── packed-refs
├── .vscode
│ └── extensions.json
└── src
├── App.vue
├── stores
│ └── counter.js
├── main.js
├── components
│ ├── HelloWorld.vue
│ ├── **tests**
│ │ └── HelloWorld.spec.js
│ ├── icons
│ │ ├── IconCommunity.vue
│ │ ├── IconSupport.vue
│ │ ├── IconTooling.vue
│ │ ├── IconDocumentation.vue
│ │ └── IconEcosystem.vue
│ ├── WelcomeItem.vue
│ └── TheWelcome.vue
├── views
│ ├── AboutView.vue
│ └── HomeView.vue
├── assets
│ ├── app.css
│ ├── main.css
│ ├── img
│ │ ├── fish.jpeg
│ │ ├── salmon.png
│ │ ├── shirt.jpeg
│ │ ├── frosted-cookie.jpeg
│ │ ├── chinook.jpeg
│ │ ├── family.jpeg
│ │ ├── fish.jpg
│ │ └── cutter.jpeg
│ ├── logo.svg
│ └── base.css
└── router
└── index.js
