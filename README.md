# ngx-electron-schema

Electron tag support for Angular 2 and newer apps.

## Installation

`npm install --save ngx-electron-schema`

## Usage

app.module.ts
```TypeScript
import { ELECTRON_SCHEMA } from 'ngx-electron-schema';

@NgModule({
  // ...
  schemas: [ELECTRON_SCHEMA]
})
export class AppModule {}
```

## Features

Currently only the `webview` tag is supported, I plan to add additional tags as needed.

###### This is a fork of [moecube/electron-schema](https://github.com/moecube/electron-schema) that has been prepared for npm.
