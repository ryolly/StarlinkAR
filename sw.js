// Cache-first service worker
const CACHE = 'sky-ar-v4';
const ASSETS = [
  './','./index.html','./manifest.webmanifest','./sw.js',
  './icons/icon-192.png','./icons/icon-512.png','./icons/icon-512-maskable.png',
  './sample-skychart.jpg'
];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS))); self.skipWaiting(); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(keys => Promise.all(keys.map(k => k!==CACHE && caches.delete(k))))); self.clients.claim(); });
self.addEventListener('fetch', e => { const u=new URL(e.request.url); if(u.origin===location.origin){ e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))); } });
