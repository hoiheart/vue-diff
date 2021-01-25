# vue-diff

Vue diff viewer plugin

> ⚠️ This plugin supports only Vue3  
> Vue2 doesn't have a support plan yet.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Install plugin](#install-plugin)
  * [Options](#options)
- [Usage diff viewer](#usage-diff-viewer)
  * [props](#props)
- [Custom theme](#custom-theme)
- [Extend languages](#extend-languages)
- [Large text comparison](#large-text-comparison)

## Introduction

<img src="https://user-images.githubusercontent.com/25652218/104784360-7520e600-57cb-11eb-8abc-ce81dd309e05.png" alt="screenshot" style="max-width:100%;">

You can see the difference between the two codes with the `vue-diff` plugin.  
This plugin dependent on <a href="https://github.com/JackuB/diff-match-patch">diff-match-patch</a> and <a href="https://github.com/highlightjs/highlight.js/">highlight.js</a>, shows similar results to other diff viewers (e.g., Github Desktop).  
Here is the <a href="https://hoiheart.github.io/vue-diff/demo/index.html" target="_blank" style="font-size: 1.2em; text-decoration: underline;">demo</a>

## Features

* [x] Support split / unified mode
* [x] Support multiple languages and can be extended
* [X] Support two themes (dark / light) and can be customized
* [ ] Virtual scroll for large text comparison
* [ ] Support IE11 (IE 11 support for Vue@3 is still pending)

## Install plugin

```bash
npm install vue-diff
```

install plugin in vue application

```ts
import VueDiff from 'vue-diff'
// import VueDiff from 'vue-diff/dist/index.es5' // If need to use es5 build
import 'vue-diff/dist/index.css'

app.use(VueDiff)
```
### Options

```ts
app.use(VueDiff, {
  componentName: 'VueDiff'
})
```

| name | type | detault | description |
|- | - | - | - |
| componentName | `string` | `Diff` | Global diff component name |

## Usage diff viewer

Insert the diff component with props.

```vue
<template>
  <Diff
    :mode="mode"
    :theme="theme"
    :language="language"
    :prev="prev"
    :current="current"
  />
</template>
```

### props

| name | type | detault | values | description
|- | - | - | - |- |
| mode | `string` | `split` | `split`, `unified` | 
| theme | `string` | `dark` | `dark`, `light` | See <a href="#custom-theme">Custom theme</a>
| language | `string` | `plaintext` |  | See <a href="#extend-languages">Extend languages</a>
| prev | `string` | `''` |  | Prev code |
| current | `string` | `''` |  | Current Code |

## Custom theme

`vue-diff` uses the following <a href="https://github.com/highlightjs/highlight.js/tree/master/src/styles">highlight.js themes</a> and can be customized.

* dark: `highlight.js/scss/monokai.scss`
* light: `highlight.js/scss/vs.scss`

```bash
npm install highlight.js
```

```vue
<template>
  <Diff
    :mode="mode"
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

* `css`
* `xml`: `xml`, `html`, `xhtml`, `rss`, `atom`, `xjb`, `xsd`, `xsl`, `plist`, `svg`
* `markdown`: `markdown`, `md`, `mkdown`, `mkd`
* `javascript`: `javascript`, `js`, `jsx`
* `json`
* `plaintext`: `plaintext`, `txt`, `text`
* `typescript`: `typescript`, `ts`

```bash
npm install highlight.js
```

```ts
import VueDiff from 'vue-diff'
import 'vue-diff/dist/index.css'

// extend yaml language
import yaml from 'highlight.js/lib/languages/yaml'

VueDiff.hljs.registerLanguage('yaml', yaml)

app.use(VueDiff)
```

> <a href="https://github.com/highlightjs/highlight.js/blob/master/SUPPORTED_LANGUAGES.md">Check supported languages of Highlight.js</a>

## Large text comparison

⚠️ It's still hard to compare large texts. Virtual scroll for Vue3 must be created or found.