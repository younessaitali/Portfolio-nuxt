---
title: test Article
tags: frontend
slug: article-3
date: Mar 16, 2020
time: 6 min read
excerpt: News, Tips and Trick about Development, Productivity.
hero: carrots.jpg
featured: true
---


## Lorem ipsum

It's very easy to make some words **bold** and other words *italic* with Markdown. You can even [link to Google!](http://google.com)


```js
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


