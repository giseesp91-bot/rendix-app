// Rendix service worker
// Estrategia: primero red, y si no hay conexión usa lo guardado.
// Así las actualizaciones aparecen apenas subís un index.html nuevo,
// y la app sigue abriendo sin internet.
const CACHE = 'rendix-v2';
const SHELL = ['./', './index.html', './manifest.json', './rendix-icon-192.png', './rendix-icon-512.png'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  // La nube (Firebase / Google) se deja pasar directo: no se guarda en caché
  const host = new URL(e.request.url).hostname;
  if (/googleapis\.com$|firebaseapp\.com$|firebaseio\.com$|google\.com$|identitytoolkit/.test(host)) return;
  e.respondWith(
    fetch(e.request)
      .then((res) => {
        if (res && (res.ok || res.type === 'opaque')) {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(e.request, copy));
        }
        return res;
      })
      .catch(() => caches.match(e.request).then((hit) => hit || caches.match('./index.html')))
  );
});
