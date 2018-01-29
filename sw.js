//sw.js
---
layout: null
---

const staticCacheName = "uxdx-2018";

console.log("installing service worker");

const filesToCache = [
  "/",
  {% for page in site._includes %}
    '{{ page.url }}',
  {% endfor %}
  {% for post in site.posts %}
    '{{ post.url }}',
  {% endfor %}

  // can be automated rather than manual entries
  "css/main.css",
  "/index.html"
]