# Riffs

Tool to organize your musical ideas. Basically, it's just a frontend on top of your filesystem that allows you to filter by music keys and tags and displays your ideas in a convenient format.

This is an app I wrote for myself to learn Electron and organize my musical ideas. If you feel like using it or working on it, please do so but I do not intend to maintain it or concern myself with its distribution.

## How it works

You'll need a main folder (which you'll need to select by clicking the settings cog) and one folder inside it for each musical idea. It could be composed of several media files, scores, tabs, etc. You can put whatever you want inside it, the tool will only recognize and present a predefined subset of your files. Add a `meta.ini` file that looks like this:

```ini
title=Song 1
keys=A Am
tags=eFlatTuning rock riff
stars=4
```

Once you've selected a master folder, the main screen will show you a listing of all the musical ideas in it (one per sub-folder). The `keys` and `tags` fields of each `meta.ini` file will be used for filtering. The `stars` field will be used for sorting.

Once you filter down and find the idea you're interested in, you can select it by clicking its name on the table. That will take you to the details screen, which will show you the info for your idea in a convenient format:

* Top left: Metadata about the idea.
* Bottom left: Media players for all the mp3 files in the folder.
* Right column: The score, if available (should be called `score.jpg`).

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
