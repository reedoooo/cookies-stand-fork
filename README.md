# cookies-stand

<!-- This template should help get you started developing with Vue 3 in Vite. -->

<!-- # Salmon Cookies -->

## Overview

Welcome to the Salmon Cookies coding project, an engaging business concept simulation aimed to showcase your web development skills. In this project, you will assist Pat, an entrepreneur with a knack for sweets and a passion for sustainable ecosystems, in branding his company, managing internal data, and more.

Your task involves creating a proof of concept application to calculate the number of cookies each location must make every day. The application should also handle branding aspects, like the design and construction of a public-facing page. Make sure your code is neat, clean, and properly commented, as we want the code to be as scrumptious as the cookies!

## Problem Domain

Pat's Salmon Cookies, expected to be an international franchise, needs a system for managing its supplies inventory and baking schedule. The application you're about to build will be key for this. It should be adaptable and flexible to add or remove locations and easily modify the input numbers based on different factors.

## Instructions

Before starting, ensure you have forked the provided repository, "cookie-stand". Ensure it's properly set up with a license and a readme.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

The main objective is to provide a tool that helps manage supplies inventory and baking schedules for each location. The application should be adaptable, allowing Pat to easily add or remove locations from the daily projections report and modify input numbers based on different factors like the day of the week or special events.

In addition to the functionality, the problem domain also includes the design and branding aspects of the public-facing page. This involves creating a visually appealing website with a color scheme, fonts, and additional images that align with the Salmon Cookies brand. The goal is to present the necessary information in a clear and user-friendly manner to attract and engage potential customers.

Overall, the problem domain for the Salmon Cookies application in the Vue.js framework encompasses both the technical implementation of the calculations and data management, as well as the design and presentation of the public-facing website to support the business's branding and marketing efforts.

### Project Setup

npm install
npm run dev

### Run Unit Tests

npm run test:unit

### Pages Creation

Start by creating three views pages within your project:

1. **Sales Data** (`/src/views/SalesPage.vue`)
2. **Home Page** (`/src/views/HomePage.vue`)
3. **Contact Page** (`/src/views/ContactPage.vue`)

You will also need at least one JavaScript file (example: `/src/App.vue`).

### Sales Data

Your task involves creating separate JS object literals for each shop location, responsible for generating sales data and providing output on the `sales.html`. This entails:

- Storing the min/max hourly customers and the average cookies per customer in object properties
- Generating a random number of customers per hour
- Calculating and storing the simulated amounts of cookies purchased for each hour at each location
- Displaying the values of each array as unordered lists in the browser
- Calculating the sum of these hourly totals

Please refer to the provided starter numbers for building these objects.

### Home Page

The homepage (`index.html`) should be appealing, readable, useful, and informative. It should contain:

- A custom sans-serif Google Font for headings
- A standard sans-serif web font for sales data (such as Arial, Verdana, or Helvetica)
- A standard serif web font for text (such as Georgia, Times)
- Different font colors for all three font uses
- A background color for the default page background and a different background color for elements such as boxes and tables
- All the typical stuff you'll find on the home page of a business: locations, hours, contact information, etc

Make sure to run a Lighthouse Accessibility report, aiming for a score between 65-80.

## Resources

- ![Vue](https://canvas.instructure.com/courses/6745216/assignments/37279120)
- ![Deployed Site](https://salmon-cookies.netlify.app/)
- ![UML](lab40UML.png)

### PROJECT FILE STRUCTURE

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
