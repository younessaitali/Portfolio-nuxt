---
title: Home
---

# Lorem ipsum

## dolor—sit—amet

### consectetur &amp; adipisicing

#### elit

##### elit

```python{1,3-5}[server.py]
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
