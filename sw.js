/* ==========================================================================
   CYBERMAP OFFLINE VECTOR TILE SERVICE WORKER
   Intercepts and caches OpenFreeMap vector tiles, OSM raster tiles & fonts
   ========================================================================== */
const TILE_CACHE_NAME = 'cybermap-offline-tiles-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  const url = event.request.url;
  // Intercept vector tiles, raster tiles, and font glyphs
  if (
    url.includes('tiles.openfreemap.org') ||
    url.includes('tile.openstreetmap.org') ||
    url.includes('arcgisonline.com')
  ) {
    event.respondWith(
      caches.open(TILE_CACHE_NAME).then(async (cache) => {
        // 1. Check offline device cache first
        let cachedResponse = await cache.match(event.request, { ignoreSearch: true });
        if (!cachedResponse) {
          cachedResponse = await cache.match(url, { ignoreSearch: true });
        }
        if (cachedResponse) {
          return cachedResponse;
        }

        // 2. Fetch from network if online and cache for offline replay
        try {
          const networkResponse = await fetch(event.request);
          if (networkResponse && networkResponse.status === 200) {
            cache.put(event.request, networkResponse.clone()).catch(() => {});
          }
          return networkResponse;
        } catch (err) {
          // If offline and TileJSON root was requested, return valid offline TileJSON
          if (url.includes('tiles.openfreemap.org/planet') && !url.includes('.pbf')) {
            const tileJson = JSON.stringify({
              tilejson: '3.0.0',
              name: 'openfreemap',
              tiles: ['https://tiles.openfreemap.org/planet/{z}/{x}/{y}.pbf'],
              minzoom: 0,
              maxzoom: 16
            });
            return new Response(tileJson, {
              status: 200,
              headers: { 'Content-Type': 'application/json' }
            });
          }

          // If offline and vector tile wasn't pre-cached, return clean empty tile buffer
          if (url.includes('.pbf')) {
            return new Response(new Uint8Array(0), {
              status: 200,
              headers: { 'Content-Type': 'application/x-protobuf' }
            });
          }
          throw err;
        }
      })
    );
  }
});
