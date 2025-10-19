# Nano Stores Media Query

<img align="right" width="92" height="92" title="Nano Stores logo"
     src="https://nanostores.github.io/nanostores/logo.svg">

A smart store for [Nano Stores] state manager to sync with some media query.

* **Small.** from 0 bytes (minified and brotlied).
  Zero dependencies. It uses [Size Limit] to control size.
* It has good **TypeScript**.
* Framework agnostic. It supports SSR.

```ts
import { fromMediaQuery } from '@nanostores/media-query'

export const $mobile = fromMediaQuery('(max-width: 600px)')
```

[Nano Stores]: https://github.com/nanostores/nanostores
[Size Limit]: https://github.com/ai/size-limit

---

<img src="https://cdn.evilmartians.com/badges/logo-no-label.svg" alt="" width="22" height="16" />  Made at <b><a href="https://evilmartians.com/devtools?utm_source=nanostores-media-query&utm_campaign=devtools-button&utm_medium=github">Evil Martians</a></b>, product consulting for <b>developer tools</b>.

---


## Install

```sh
npm install nanostores @nanostores/media-query
```


## Usage

See [Nano Stores docs](https://github.com/nanostores/nanostores#guide)
about using the store and subscribing to store’s changes in UI frameworks.
