// Files to cache
const cacheName = 'Hitsab';
const file = [
  'index.html',
  "loading.gif",
  "navigator.js",
  "tab.js",
  "search.svg",
  "style.css",
  "manifest.json",
  "img/home.png",
  "img/logo.png",
  "img/logo144.png",
  "img/multitab.png"
];


// Fetching content using Service Worker
self.addEventListener('fetch', (e) => {
  e.respondWith((async () => {
    const r = await caches.match(e.request);
    console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
    if (r) return r;
    const response = await fetch(e.request);
    return response;
  })());
});