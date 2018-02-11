---
  layout: null
---

const CACHE_NAME = "uxdx-2018-cache-v8";

console.log("installing service worker");

const urlsToCache = [
  {% comment %}
  'style.css',
  {% for page in site.html_pages %}
  '{{ page.url }}',
  {% endfor %}
{% for image in site.static_files %}{% if image.path contains 'images/' %}
  "{{ image.path }}",
{% endif %}{% endfor %}
{% endcomment %}
]

self.addEventListener('install', function (event) {
  self.skipWaiting();
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function (cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.match(event.request).then(function (response) {
        if (response) console.log('service from cache', event.request.url)
        return response || fetch(event.request)
        // .then(function (response) {
        //   cache.put(event.request, response.clone());
        //   return response;
        // });
      });
    })
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.filter(function (cacheName) {
          return cacheName.startsWith('uxdx-2018-cache-')
            && cacheName != CACHE_NAME;
        }).map(function (cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
});
