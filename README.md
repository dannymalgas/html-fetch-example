# Simple Frontend Fetch example

This is a simple example demonstrating how a javascript file, with the help of the `fetch` API, can ping an endpoint and display the returned data on the html page.

## Setup backend

The server is just for a mock end point. I'm assuming you have Node.js installed to run the app (otherwise https://nodejs.org/en/download/)

1. `cd back`
2. `npm install`
3. `npm run start` - this starts the server. 

You should see the following: 

```
Example app listening at http://localhost:3000
```

## Setup frontend

1. install `http-server` globally - you can run html files on your machine

```
npm i http-server -g
```

2. `cd front`
3. `http-server`

You should see the following:
```
Starting up http-server, serving ./
Available on:
  http://127.0.0.1:8080
  http://192.168.25.169:8080
Hit CTRL-C to stop the server
```

Go to `http://127.0.0.1:8080` in your browser.
If you look at the Network tab in your browser's dev tools, you should see the request being sent and the response displaying the data.

## Some links to check out

Docs for streamable data:

Fetch API
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

MDN Web Docs - Using readable streams
https://developer.mozilla.org/en-US/docs/Web/API/Streams_API/Using_readable_streams  

Streaming requests with the fetch API
https://web.dev/fetch-upload-streaming/
