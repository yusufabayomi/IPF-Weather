# IPF Take Home Test

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

Run the `npm install` command to install the project dependencies

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

### `npm test`

Launches the test runner in the interactive watch mode.

## Run on docker

### `docker compose -f docker-compose.yaml build`

Run `docker compose -f docker-compose.yaml build` from the root folder to build the project

### `docker run -p 80:80 --name react-app weather-app-prod`

Runs the build app on port 80 \
Open [http://localhost](http://localhost) to view it in the browser.
