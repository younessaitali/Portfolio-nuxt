---
title: so
---

# Lorem ipsum

## dolor—sit—amet

### consectetur &amp; adipisicing

#### elit

##### elit

```js{1,3-5}[server.js]
const http = require("http");
const bodyParser = require("body-parser");

http
  .createServer((req, res) => {
    bodyParser.parse(req, (error, body) => {
      res.end(body);
    });
  })
  .listen(3000);
```
