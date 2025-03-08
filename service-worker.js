const CACHE_NAME = "bachat-bazar-v1";
const urlsToCache = [
    "/bachat-Bazar/",
    "/bachat-Bazar/index.html",
    "/bachat-Bazar/styles.css",
    "/bachat-Bazar/script.js",
    "/bachat-Bazar/manifest.json",
    "/bachat-Bazar/assets/default-ad.png",
    "/bachat-Bazar/assets/icon-192.png",
    "/bachat-Bazar/assets/icon-512.png"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(urlsToCache);
        })
    );
});
