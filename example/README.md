# Innovant Example

A runnable React Native app that showcases every component exported by
[`react-native-innovant`](https://github.com/ahmnouira/react-native-innovant).

## Getting started

If you have not yet installed the library, run `npm run build` in the package root
so that `react-native-innovant`'s `dist/` output exists (the example links to the
package via `file:..`).

```sh
# from the example directory
npm install

npm run ios      # run on iOS simulator
npm run android  # run on Android emulator
```

> If Metro cannot resolve the library, restart the dev server with:
>
> ```sh
> npm start -- --reset-cache
> ```

## What's inside

`App.tsx` renders a scrolling screen using every component: `Badge`, `Box`,
`BoxList`, `Button`, `CheckBox`, `Container`, `Empty`, `ErrorState`,
`IconButton`, `Image`, `KeyboardAvoiding`, `Loading`, `MiscField`, `Modal`,
`Options`, `Pill`, `PillList`, `RadioBox`, `Sheet`, `Status`, `SwitchField`,
`Text`, and more — with interactive state for selections, toggles and overlays.

## Scripts

| Script              | Description                        |
| ------------------- | ---------------------------------- |
| `npm run ios`       | Run the app on the iOS simulator   |
| `npm run android`   | Run the app on an Android emulator |
| `npm run start`     | Start the Metro bundler            |
| `npm run typecheck` | Run TypeScript without emitting    |
| `npm run lint`      | Lint the example sources           |
| `npm test`          | Run Jest                           |
