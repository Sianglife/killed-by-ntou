# Killed By NTOU

A small static site for remembering the umbrellas that have survived, suffered, or fallen in the weather around NTOU.

## What is this?

This project is a lightweight, client-side website built with plain HTML, CSS, and JavaScript. It renders umbrella records from `list.json` and displays them on the home page and the list page.

## Pages

- `index.html` - landing page with the umbrella memorial board
- `list.html` - full umbrella roster
- `ocean.html` - themed page with an embedded video

## Data

Umbrella entries live in `list.json` under the `umbrella` array. Each item currently includes:

- `index`
- `name`
- `from`
- `join-date`
- `died-date`
- `died-reason`
- `contribution`
- `hurt`

The JavaScript in `script.js` reads this file and generates the displayed cards.

## Assets

- `assets/umbrella/` - individual umbrella photos, named by index

## Run locally

The `index.html` is the static entry point for the site.

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
