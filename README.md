# react-starter

Usage
-----

#### `npm install`
Install Node modules listed in ./package.json

### `npm run dev`
Runs the webpack-dev-server build system with HMR.

You will see the message `Listening on port 3000. Open up http://localhost:3000/ in your browser.`

Docker
------

If you don't know what is docker check the official site at [docker.com](https://www.docker.com/what-docker). You can find instructions about how to install docker on different platforms (OSX, Linux and Windows) accessing [https://docs.docker.com/](https://docs.docker.com/)

Build the docker image

`docker build -t react-starter/website .`

Run the container

`docker run -it --rm --name reactstarter -v $PWD:/usr/src/app -p 3000:3000 react-starter/website`

You will see the message `Listening on port 3000. Open up http://0.0.0.0:3000/ in your browser.`

Press `Ctrl+C` to stop the container execution and consequently the node process.


Structure
---------

```
|-- client
|   |-- index.jsx
|   |-- webpack-assets.json
|-- shared
|   |-- actions
|   |-- components
|   |-- constants
|   |-- lib
|   |-- reducers
|   |-- translations
|   |-- routes.jsx
|-- static
|   |-- img
|   |-- styles
|   |-- favicon.ico
|-- Other config files
```

