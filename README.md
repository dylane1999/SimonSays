# Simon

This is a starter (and experimental implementation) of a game called Simon.

It's a memory game -- "do what I do".

### Deployment

To run this project just open the `index.html` page.

This entire folder is deployed to `http://adjacent-simon.surge.sh` but only a few files are actually used by the page

### Tests

Start by running `npm install` to install dependencies ([Jest](https://jestjs.io) is the only dependency)

To run Jest tests against the demo `Game`, `Player` and `Step` objects (unused by the working version), run `npm run test`

To run a Jest coverage report against the same objects, run `npm run test -- --coverage`

