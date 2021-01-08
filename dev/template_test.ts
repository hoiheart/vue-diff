const javascript1 =
`const b2 = {
  "name": "vue-diff",
  "version": "0.0.1",
  "description": "Vue diff viewer",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "test:unit": "vue-cli-service test:unit",
    "test:e2e": "vue-cli-service test:e2e",
    "lint": "vue-cli-service lint"
  }
}`

const javascript2 =
`const b2 = {
  "name": "vue-diff",
  "version": "0.0.1",
  "description": "Vue diff viewer",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "test:unit": "vue-cli-service test:unit",
    "test:e2e": "vue-cli-service test:e2e",
    "lint": "vue-cli-service lint"
  }
}`

const html1 =
`<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vue Diff</title>
  <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="bg-gray-900">
  <div id="app" class="p-12"></div>
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
  <div id="app" class="p-12"></div>
  <script type="module" src="/dev/main.ts"></script>
</body>
</html>`

const css1 =
`@import 'prismjs/themes/prism-okaidia.css';

div.vue-diff-viewer {
  background-color: #666;
}

#vue-diff-viewer {
  display: flex;
  display: -webkit-flex;
}`

const css2 =
`@import 'prismjs/themes/prism-okaidia.css';

div.vue-diff-viewer {
  background-color: #666;
}

#vue-diff-viewer {
  display: flex;
  display: -webkit-flex;
}`

export default {
  javascript1,
  javascript2,
  html1,
  html2,
  css1,
  css2
}
