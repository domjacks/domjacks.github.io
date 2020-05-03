const version = 2;

self.addEventListener("install", function(event) {
  console.log("Service Worker Installed");
  event.waitUntil(
    caches.open(`app-cache-${version}`).then(function(cache) {
      return cache.addAll(["/", "/dom.jpeg"]);
    })
  );
});

self.addEventListener("fetch", function(event) {
  console.log(event.request.url);

  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
