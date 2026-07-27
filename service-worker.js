const CACHE_NAME = "afshan-app-v1";

const ASSETS = [
  "/MagicianAfshanAli/",
  "/MagicianAfshanAli/index.html",
  "/MagicianAfshanAli/manifest.json"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    clients.claim()
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
      .catch(() => {
        return new Response("You are offline");
      })
  );
});
