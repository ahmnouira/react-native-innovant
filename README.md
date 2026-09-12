<h1 align="center">
  React Native Innovant UI Library
</h1>

<p align="center">
  <a href="https://www.npmjs.com/package/react-native-innovant"><img src="https://img.shields.io/npm/v/react-native-innovant.svg"></a>
  <a href="https://github.com/ahmnouira/react-native-innovant"><img src="https://img.shields.io/github/stars/ahmnouira/react-native-innovant"></a>
  <a href="https://github.com/prettier/prettier"><img src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg"></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg"></a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/react-native-innovant"><img src="https://img.shields.io/npm/dw/react-native-innovant.svg?style=for-the-badge"></a>
  <a href="https://www.npmjs.com/package/react-native-innovant"><img src="https://img.shields.io/npm/dm/react-native-innovant.svg?style=for-the-badge"></a>
  <a href="https://www.npmjs.com/package/react-native-innovant"><img src="https://img.shields.io/npm/dt/react-native-innovant.svg?style=for-the-badge"></a>
</p>

<br />

A modern React Native UI library with an interactive **example app** in the [`example/`](./example) directory.

## Table of Contents

- [Installation](#installation)
- [Quick Start](#quick-start)
- [Components](#components)
- [Hooks & Context](#hooks--context)
- [Theme](#theme)
- [Example App](#example-app)
- [Development](#development)

## Installation

```sh
npm install react-native-innovant
```

or

```sh
yarn add react-native-innovant
```

Peer dependencies: `react`, `react-native` and `react-native-vector-icons` must be installed in your project.

## Quick Start

Wrap your app with `ThemeProvider` and `ContextWrapper`, then use any component:

```jsx
import React from 'react'
import { Button, Container, ContextWrapper, ThemeProvider, Text } from 'react-native-innovant'

export const App = () => {
  return (
    <ThemeProvider>
      <ContextWrapper>
        <Container>
          <Button title='Submit' onPress={() => {}} />
          <Text font='bold'>Hello Innovant!</Text>
        </Container>
      </ContextWrapper>
    </ThemeProvider>
  )
}
```

> The root component also renders `<Status />`, `<Snackbar />` and `<Toast />` for you via
> [`ContextWrapper`](#context-wrapper). Access them imperatively with [`useUtils`](#useutils).

## Components

| Component                             | Description                                            |
| ------------------------------------- | ------------------------------------------------------ |
| [Badge](#badge)                       | Small pill-shaped label with text/image.               |
| [Box](#box)                           | Selectable tile with image + title.                    |
| [BoxList](#boxlist)                   | 3-column grid of `Box` items.                          |
| [Button](#button)                     | Loadable & pressable button.                           |
| [CheckBox](#checkbox)                 | Checkbox indicator.                                    |
| [Container](#container)               | Safe area wrapper with themed background.              |
| [Empty](#empty)                       | Empty / no-results state view.                         |
| [EmptyHeader](#emptyheader)           | Placeholder header spacer.                             |
| [ErrorState](#errorstate)             | Error / offline state derived from an error.           |
| [IconButton](#iconbutton)             | Pressable icon (FontAwesome/AntDesign).                |
| [Image](#image)                       | Memoized `FastImage` wrapper.                          |
| [KeyboardAvoiding](#keyboardavoiding) | Keyboard-aware container.                              |
| [Loading](#loading)                   | Centered activity indicator.                           |
| [MiscField](#miscfield)               | Label/value row (optional primary color).              |
| [Modal](#modal)                       | Customizable centered modal dialog.                    |
| [Options](#options)                   | Menu list of pressable rows with icons.                |
| [Pill](#pill)                         | Single selectable pill.                                |
| [PillList](#pilllist)                 | Wrapping list of `Pill` items.                         |
| [RadioBox](#radiobox)                 | Radio indicator.                                       |
| [Sheet](#sheet)                       | Bottom sheet built on `react-native-raw-bottom-sheet`. |
| [SheetHeader](#sheetheader)           | Sheet title bar with close/confirm.                    |
| [Snackbar](#snackbar)                 | Snackbar wrapper.                                      |
| [Setup](#setup)                       | Mounts `<Status />`, `<Toast />` and `<Snackbar />`.   |
| [Status](#status)                     | Status bar wrapper.                                    |
| [SwitchField](#switchfield)           | Themed `Switch` with label.                            |
| [Text](#text)                         | Themed text with font weights & sizes.                 |
| [Toast](#toast)                       | Imperative toast wrapper.                              |
| [TouchableOpacity](#touchableopacity) | Pressable wrapper with consistent feedback.            |

### Badge

```jsx
import { Badge } from 'react-native-innovant'

<Badge text='New' bgColor='#ED1E46' />
<Badge text='Beta' bgColor='#F68955' textColor='#FFFFFF' />
```

### Box

```jsx
import { Box } from 'react-native-innovant'

;<Box title='Guitar' pic={require('./guitar.png')} isChecked handlePress={() => {}} />
```

### BoxList

```jsx
import { BoxList } from 'react-native-innovant'

const items = [
  { title: 'Guitar', icon: require('./guitar.png') },
  { title: 'Piano', icon: require('./piano.png') },
]

<BoxList items={items} selectedItems={selected} handleChange={setSelected} />
```

### Button

```jsx
import { Button } from 'react-native-innovant'

<Button title='Submit' isLoading={false} onPress={() => {}} />
<Button title='Loading…' isLoading />
```

### CheckBox

```jsx
import { CheckBox } from 'react-native-innovant'

;<CheckBox color='#ED1E46' checked />
```

### Container

```jsx
import { Container } from 'react-native-innovant'

;<Container secondary>{/* content */}</Container>
```

### Empty

```jsx
import { Empty } from 'react-native-innovant'

;<Empty message='No results' subMessage='Try another search' searching />
```

### EmptyHeader

```jsx
import { EmptyHeader } from 'react-native-innovant'

;<EmptyHeader />
```

### ErrorState

```jsx
import { ErrorState } from 'react-native-innovant'

;<ErrorState error='Network request failed' />
```

### IconButton

```jsx
import { IconButton } from 'react-native-innovant'

;<IconButton icon='heart' color='#ED1E46' size={24} onPress={() => {}} />
```

### Image

```jsx
import { Image } from 'react-native-innovant'

;<Image source={{ uri: 'https://example.com/logo.png' }} style={{ width: 100, height: 100 }} />
```

### KeyboardAvoiding

```jsx
import { KeyboardAvoiding } from 'react-native-innovant'

;<KeyboardAvoiding>{/* form content */}</KeyboardAvoiding>
```

### Loading

```jsx
import { Loading } from 'react-native-innovant'

;<Loading size='large' center />
```

### MiscField

```jsx
import { MiscField } from 'react-native-innovant'

;<MiscField label='Version' value='0.3.1' primary onPress={() => {}} />
```

### Modal

```jsx
import { Modal } from 'react-native-innovant'

const [visible, setVisible] = useState(false)

<Modal visible={visible} onClose={() => setVisible(false)} title='Settings'>
  <Text>Modal content goes here.</Text>
</Modal>
```

### Options

```jsx
import { Options } from 'react-native-innovant'

;<Options
  options={[
    { title: 'Edit Profile', icon: 'edit', onPress: () => {} },
    { title: 'Report', icon: 'exclamationcircleo', onPress: () => {} },
  ]}
/>
```

### Pill

```jsx
import { Pill } from 'react-native-innovant'

;<Pill title='Hip-Hop' isChecked handlePress={() => {}} />
```

### PillList

```jsx
import { PillList } from 'react-native-innovant'

const genres = ['Hip-Hop', 'R&B', 'Pop', 'Electro']

<PillList items={genres} selectedItems={selected} handleChange={setSelected} />
```

### RadioBox

```jsx
import { RadioBox } from 'react-native-innovant'

;<RadioBox color='#ED1E46' checked />
```

### Sheet

```jsx
import { Sheet } from 'react-native-innovant'

const ref = useRef<any>(null)

<Sheet ref={ref} title='Choose an option' onClose={() => ref.current?.close()}>
  {/* sheet content */}
</Sheet>
```

### SheetHeader

```jsx
import { SheetHeader } from 'react-native-innovant'

;<SheetHeader title='Confirm' onClose={() => {}} onConfirm={() => {}} />
```

### Snackbar

```jsx
import { Snackbar } from 'react-native-innovant'

;<Snackbar visible textMessage='You are offline' />
```

### Setup

```jsx
import { ContextWrapper, Setup } from 'react-native-innovant'

// Usually rendered once inside ContextWrapper:
;<ContextWrapper>
  <Setup />
  {/* your app */}
</ContextWrapper>
```

### Status

```jsx
import { Status } from 'react-native-innovant'

;<Status barStyle='light-content' />
```

### SwitchField

```jsx
import { SwitchField } from 'react-native-innovant'

;<SwitchField label='Notifications' value={on} onValueChange={setOn} />
```

### Text

```jsx
import { Text } from 'react-native-innovant'

<Text font='bold' size={16}>Bold header</Text>
<Text>Regular body</Text>
```

### Toast

```jsx
import { Toast } from 'react-native-innovant'

;<Toast visible message='Saved!' position='bottom' />
```

> Use the [`useUtils`](#useutils) hook to trigger toasts imperatively instead.

### TouchableOpacity

```jsx
import { TouchableOpacity } from 'react-native-innovant'

;<TouchableOpacity onPress={() => {}}>{/* content */}</TouchableOpacity>
```

## Hooks & Context

### useTheme

Returns the current `ThemeType` (see [Theme](#theme)):

```jsx
import { useTheme } from 'react-native-innovant'

const MyComponent = () => {
  const theme = useTheme()
  return <Text style={{ color: theme?.colors.primary }}>Primary color</Text>
}
```

### useUtils

Returns global UI state (`toast`, `snackbar`, `imageModal`) and a `dispatch` function:

```jsx
import { useUtils } from 'react-native-innovant'

const MyComponent = () => {
  const { dispatch } = useUtils()

  return (
    <Button
      title='Show Toast'
      onPress={() => dispatch({ type: 'SET_TOAST', payload: { message: 'Saved!', visible: true, postion: 'top' } })}
    />
  )
}
```

### ThemeProvider

```jsx
import { ThemeProvider } from 'react-native-innovant'

;<ThemeProvider>{/* app */}</ThemeProvider>
```

### ContextWrapper

Providers application-level UI state (`toast`, `snackbar`, `imageModal`) and renders `Setup` for you:

```jsx
import { ContextWrapper } from 'react-native-innovant'

;<ContextWrapper>{/* app */}</ContextWrapper>
```

## Theme

The default theme is provided by `theme` and uses the `Poppins` / `Montserrat` font families:

```js
export const theme = {
  fonts: {
    primary: { regular: 'Poppins-Regular', bold: 'Poppins-Bold' },
    secondary: { regular: 'Montserrat-Regular', bold: 'Montserrat-Bold', medium: 'Montserrat-Medium' },
  },
  colors: {
    primary: '#ED1E46',
    light: '#F68955',
    secondary: 'rgba(0, 0, 0, .5)',
    tertiary: 'rgba(0, 0, 0, .2)',
    black: '#151515',
    white: '#FFF',
  },
  sizes: { xm: 4, sm: 8, md: 12, lg: 16, xl: 20, xxl: 24 },
}
```

Override it with your own `ThemeType`:

```jsx
import { ThemeProvider } from 'react-native-innovant'

const myTheme = { /* your theme */ }

<ThemeProvider theme={myTheme}>{/* app */}</ThemeProvider>
```

## Example App

A complete, runnable example that showcases every component lives in the [`example/`](./example) directory.

```sh
cd example
npm install
npm run ios     # or: npm run android
```

## Development

```sh
npm install
npm run test        # run tests
npm run test:coverage
npm run lint        # eslint
npm run build       # compile TypeScript to dist/
npm run format:fix  # prettier
npm run changelog   # regenerate CHANGELOG.md
```

## License

[MIT](./LICENSE)
