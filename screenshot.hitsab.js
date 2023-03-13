// Files to cache
const cacheName = 'Hitsab';

function screenshot(cacheName,url) {
    // Fetching content using async methods
    const test = fetch("https://hitsab.geoloup.com/index.html");
    if (test != "rejected") {
        console.log(`[Service Worker] Fetching resource: ${url}`);
        const response = fetch(url);
        caches.open(cacheName).then(cache => {
            cache.add(response)
        })
    }
}