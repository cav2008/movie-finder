# Movie Finder
Search for your favourite movies on OMDb.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development, production and testing purposes.

### Prerequisites

A few things that should be set up and installed to run the application.

```
git
npm
```

### Installing

To install the application follow the following steps:

```
npm install
```

### running on developement mode

```
npm run start
```

the page should open itself, but if not go to

```
http://localhost:8000/
```

### running on production mode

```
npm run build
```

then run your local server (e.g. https://www.npmjs.com/package/serve) in the /dist folder

```
cd dist
serve
```

## Running the tests

```
npm run test
```

## Library motivations
### Axios
https://github.com/axios/axios
Axios was used because fetch api is not supported by IE 11. Axios has more stars than isomorphic-fetch on github.