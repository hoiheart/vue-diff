const javascript1 =
`var a1 = {
  "name": "vue-diff",
  "version": "0.0.0",
  "description": "Vue diff viewer",
  "private": true,
  "peerDependencies": {
    "vue": "^3.0.0"
  }
}`

const javascript2 =
`const b2 = {
  "name": "vue-diff",
  "version": "1.0.0",
  "description": "Vue diff viewer",
  "scripts": {
    "test": "vue-cli-service test:unit"
    "lint": "vue-cli-service lint"
  },
  "peerDependencies": {
    "vue": "^3.0.0"
  }
}`

const html1 =
`<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vue Diff</title>
</head>
<body>
  <div id="app"></div>
  <script type="module" src="/dev/main.ts"></script>
</body>
</html>`

const html2 =
`<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vue Diff</title>
  <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="bg-gray-900">
  <div id="app"></div>
  <script type="module" src="/dev/main.ts"></script>
  <script async defer src="https://buttons.github.io/buttons.js"></script>
</body>
</html>`

const css1 =
`.vue-diff-wrapper {
  width: 100%;
}

.vue-diff-theme-dark {
  @import 'highlight.js/scss/vs2015.scss';
  background-color: #000;
}

.vue-diff-theme-light {
  @import 'highlight.js/scss/vs.scss';
  background-color: #fff;
}`

const css2 =
`.vue-diff-wrapper {
  overflow: hidden;
  width: 100%;
  border-radius: 0.3em;
}

.vue-diff-theme-dark {
  @import 'highlight.js/scss/monokai.scss';
  background-color: #272822;
}

.vue-diff-theme-light {
  @import 'highlight.js/scss/vs.scss';
  background-color: #fff;
}`

const yaml1 =
`name: Release

on:
  push:
    branches:
      - alpha

jobs:
  # job`

const yaml2 =
`name: Release

on:
  push:
    branches:
      - master

jobs:`

export default {
  javascript1,
  javascript2,
  html1,
  html2,
  css1,
  css2,
  yaml1,
  yaml2
}
