/* Service worker mínimo: permite instalar la app. La app siempre se carga de Internet. */
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function (e) {
  if (e.request.mode !== 'navigate') return;
  e.respondWith(fetch(e.request).catch(function () {
    return new Response('<meta charset=utf-8><meta name=viewport content="width=device-width"><body style="font:16px sans-serif;padding:40px;text-align:center">Sin conexión a Internet.<br>Vuelve a intentarlo cuando tengas cobertura.', {headers: {'Content-Type': 'text/html; charset=utf-8'}});
  }));
});
