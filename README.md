# Simple Frontend Fetch example

A simple example demonstrating how to Javascript and the browser's built-in `fetch` API to request an endpoint and display the returned data on an HTML page.


## Install system dependencies

Install [Node.js](https://nodejs.org/en/download/).


## Set up backend

This backend API server is just for a mock endpoint, so the browser has data to fetch. Note that you could do this without a backend server too - you could request a static JSON file that gets served by the frontend.

1. Go to [back](/back/)
    ```sh
    cd back
    ```
1. Install packages.
    ```sh
    npm install
    ```
1. Start the dev server.
    ```sh
    npm run start
    ```

You should see the following: 

```
Example app listening at http://localhost:3000
```

## Set up frontend

In a different terminal window:

1. Install `http-server` globally - you can run HTML files on your machine
    ```sh
    npm i http-server -g
    ```
1. Go to [front](/front/).
    ```sh
    cd front
    ```
3. Start the dev server to serve the [index.html](/front/index.html) file on port `8080`.
    ```sh
    http-server
    ```

You should see the following:

```
Starting up http-server, serving ./
Available on:
  http://127.0.0.1:8080
  http://192.168.25.169:8080
Hit CTRL-C to stop the server
```

Open http://127.0.0.1:8080 in your browser.

The page will load data from the backend server.

If you look at the _Network_ tab in your browser's dev tools and refresh the page, you should see the request being sent and the response containing the data.

## Resources

Some links to check out.

Docs for streamable data:

Fetch API - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

MDN Web Docs - Using readable streams - https://developer.mozilla.org/en-US/docs/Web/API/Streams_API/Using_readable_streams  

Streaming requests with the fetch API - https://web.dev/fetch-upload-streaming/
