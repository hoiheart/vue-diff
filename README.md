# vue-diff

Vue diff viewer plugin for Vue@3  
<a href="https://hoiheart.github.io/vue-diff/index.html" target="_blank">demo</a>

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Introduction](#introduction)
- [Features](#features)
- [Install plugin](#install-plugin)
  - [Options](#options)
- [Usage diff viewer](#usage-diff-viewer)
  - [Settings with default props](#settings-with-default-props)
  - [Settings with full props](#settings-with-full-props)
  - [Props](#props)
- [Custom theme](#custom-theme)
- [Extend languages](#extend-languages)
  - [Default supported languages and values](#default-supported-languages-and-values)
- [Virtual scroll](#virtual-scroll)
  - [Object props](#object-props)

## Introduction

<img src="https://user-images.githubusercontent.com/25652218/104784360-7520e600-57cb-11eb-8abc-ce81dd309e05.png" alt="screenshot" style="max-width:100%;">

You can see the difference between the two codes with the `vue-diff` plugin.  
This plugin dependent on <a href="https://github.com/JackuB/diff-match-patch">diff-match-patch</a> and <a href="https://github.com/highlightjs/highlight.js/">highlight.js</a>, shows similar results to other diff viewers (e.g., Github Desktop).  
Here is the <a href="https://hoiheart.github.io/vue-diff/index.html" target="_blank" style="font-size: 1.2em; text-decoration: underline;">demo</a>

## Features

- Support split / unified mode
- Support multiple languages and can be extended
- Support two themes (dark / light) and can be customized
- Virtual scroll for large text comparison
- Folding view (_Partial folding is not supported_)
- Support typescript

## Install plugin

```bash
npm install vue-diff
```

And install plugin in vue application

```ts
import VueDiff from 'vue-diff';

import 'vue-diff/dist/index.css';

app.use(VueDiff);
```

### Options

```ts
app.use(VueDiff, {
  componentName: 'VueDiff',
});
```

| name          | type     | detault | description                |
| ------------- | -------- | ------- | -------------------------- |
| componentName | `string` | `Diff`  | Global diff component name |

## Usage diff viewer

Insert the diff component with props.

### Settings with default props

```vue
<template>
  <!-- If the changed componentName
  <VueDiff>
  -->
  <Diff
    :mode="mode"
    :theme="theme"
    :language="language"
    :prev="prev"
    :current="current"
  />
</template>
```

### Settings with full props

```vue
<template>
  <Diff
    :mode="mode"
    :theme="theme"
    :language="language"
    :prev="prev"
    :current="current"
    :folding="folding"
    :input-delay="0"
    :virtual-scroll="{ height: 500, lineMinHeight: 24, delay: 100 }"
  />
</template>
```

### Props

| name          | type              | detault     | values                             | description                                                                                                                                 |
| ------------- | ----------------- | ----------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| mode          | `string`          | `split`     | `split`, `unified`                 |
| theme         | `string`          | `dark`      | `dark`, `light`, `custom${string}` | See <a href="#custom-theme">Custom theme</a>                                                                                                |
| language      | `string`          | `plaintext` |                                    | See <a href="#extend-languages">Extend languages</a>                                                                                        |
| prev          | `string`          | `''`        |                                    | Prev code                                                                                                                                   |
| current       | `string`          | `''`        |                                    | Current Code                                                                                                                                |
| folding       | `boolean`         | `false`     |                                    | Folding not different                                                                                                                       |
| inputDelay    | `number`          | `0`         |                                    | Setting up rendering debounce for changes for performance benefit (mode, prev, curr)                                                        |
| virtualScroll | `boolean\|object` | `false`     |                                    | _Default value when setting true :_<br>`{ height: 500, lineMinHeight: 24, delay: 100 }`<br>See <a href="#virtual-scroll">virtual scroll</a> |

## Custom theme

`vue-diff` uses the following <a href="https://github.com/highlightjs/highlight.js/tree/master/src/styles">highlight.js themes</a> and can be customized.

- dark: `highlight.js/scss/monokai.scss`
- light: `highlight.js/scss/vs.scss`

```bash
npm install highlight.js
```

```vue
<template>
  <Diff
    :mode="mode"
    <!-- Characters that begin with custom -->
    theme="custom"
    :language="language"
    :prev="prev"
    :current="current"
  />
</template>

<style lang="scss">
.vue-diff-theme-custom {
  @import 'highlight.js/scss/vs2015.scss'; // import theme

  background-color: #000; // Set background color
}
</style>
```

## Extend languages

`vue-diff` supports the following languages and can be extended through <a href="https://github.com/highlightjs/highlight.js/#es6-modules">highlight.js language registration.</a>

### Default supported languages and values

- `css`
- `xml`: `xml`, `html`, `xhtml`, `rss`, `atom`, `xjb`, `xsd`, `xsl`, `plist`, `svg`
- `markdown`: `markdown`, `md`, `mkdown`, `mkd`
- `javascript`: `javascript`, `js`, `jsx`
- `json`
- `plaintext`: `plaintext`, `txt`, `text`
- `typescript`: `typescript`, `ts`

```bash
npm install highlight.js
```

```ts
import VueDiff from 'vue-diff';
import 'vue-diff/dist/index.css';

// extend yaml language
import yaml from 'highlight.js/lib/languages/yaml';

VueDiff.hljs.registerLanguage('yaml', yaml);

app.use(VueDiff);
```

> <a href="https://github.com/highlightjs/highlight.js/blob/master/SUPPORTED_LANGUAGES.md">Check supported languages of Highlight.js</a>

## Virtual scroll

Comparing text from many lines can slow down performance.<br>
With virtualScroll props, virtualScroll applies. (Self-made for this plug-in.)

#### Object property value

When using virtual scroll, the css of all code lines is changed to the absolute position, which requires detailed settings.

- height (`number`): Diff box height (Applies only to px values)
- lineMinHeight (`number`): minimum height of line
  > Minimum height value of line is required for visible area calculation.<br>The default is 24, but you can set it yourself if you need to adjust it according to the page's front-size, line-height, etc.
- delay (`number`): re-rendering delay when scrolling or resizing
  > Performance problems occur when too often a re-rendering function is invoked based on scrolling or resizing<br>This setting applies a delay using throttle.
