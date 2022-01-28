# react-auto-typer

An very minified auto typer component for react.

[![NPM](https://img.shields.io/npm/v/react-auto-typer.svg)](https://www.npmjs.com/package/react-auto-typer) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-auto-typer
```

## Usage

```jsx
import React, { Component } from 'react'

import AutoTyper from 'react-auto-typer'

function Example() {
  render() {
    return <AutoTyper text={'Sample text here'} delay={100} styleClass={'autotyper'}/>
  }
}
```

## Props
#### text (required)
Text to auto type.
#### delay (required)
Delay between typing.
#### stlyleClass (required)
Custom CSS styles.

## Example
[Online Demo](https://trishantpahwa.me/not-found)

## License

Apache-2.0 © [trishantpahwa](https://github.com/trishantpahwa)
