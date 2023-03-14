// Files to cache
const cacheName = 'Hitsab';

// Fetching content using Service Worker
self.addEventListener('fetch', (e) => {
  e.respondWith((async () => {
    const response = await fetch(e.request,{mode:"no-cors"});
    return response;
  })());
});