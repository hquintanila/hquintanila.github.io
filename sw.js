// Nombre del caché
const CACHE_NAME = 'v1_cache_miapp';

// Archivos que quieres que funcionen sin internet
const urlsToCache = [
  '/',
  './index.html',
  './style.css',
  './script.js',
  './manifest.json'
];

// Instalación del Service Worker
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache)
          .then(() => self.skipWaiting());
      })
      .catch(err => console.log('Falló el registro de caché', err))
  );
});

// Activación y manejo de archivos en caché
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request)
      .then(res => {
        if (res) return res;
        return fetch(e.request);
      })
  );
});