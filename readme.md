# IP Limiter

Middleware for Dylan which limits requests by IP address.

## Install

`npm install @dylan/ip-limiter`

## Usage

``` js
const dylan = require('dylan');
const ipLimiter = require('@dylan/ip-limiter');
const app = dylan();

app.use(ipLimiter({
  window: 10000, // milliseconds
  limit: 30 // requests limited within the window
}));
```
