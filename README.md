# Riffs

Tool to organize your musical ideas. Basically, it's just a frontend on top of your filesystem that allows you to filter by music keys and tags and displays your ideas in a convenient format.

This is an app I wrote for myself to learn Electron and organize my musical ideas. If you feel like using it or working on it, please do so but I do not intend to maintain it or concern myself with its distribution.

## Development

The tool runs on Electron and uses React and Redux. The codebase is based off [electron-react-boilerplate](https://github.com/chentsulin/electron-react-boilerplate).

Run the webpack dev server with `npm run dev`.

## Packaging

To create executables for all platforms, run:

```
npm run package-all --name riffs
```

## TODO

* Linting
* Fix jumpy styles in table / filters (home)
* Metadata and tags should reload automatically all the time
