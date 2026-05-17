const CACHE_NAME = 'css-guide-v1';

const ASSETS = [
  '/CSS-Guide/',
  '/CSS-Guide/css_guide.html',
  '/CSS-Guide/css_guide.css',
  '/CSS-Guide/css_guide_engine.js',
  '/CSS-Guide/css_guide_a_to_z_properties.js',
  '/CSS-Guide/css_guide_topic_map.js',
  '/CSS-Guide/css_guide_manifest.json',
  '/CSS-Guide/css_guide_icon_192.png',
  '/CSS-Guide/css_guide_icon_512.png'
];

// Install — cache all core assets
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

// Activate — remove old caches
self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(key) {
          return key !== CACHE_NAME;
        }).map(function(key) {
          return caches.delete(key);
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch — network first, fall back to cache
self.addEventListener('fetch', function(e) {
  e.respondWith(
    fetch(e.request).then(function(response) {
      const copy = response.clone();
      caches.open(CACHE_NAME).then(function(cache) {
        cache.put(e.request, copy);
      });
      return response;
    }).catch(function() {
      return caches.match(e.request);
    })
  );
});

