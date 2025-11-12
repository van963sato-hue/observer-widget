// docs/sw.js
const CACHE = "obs-widget-v1";
const CORE = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png"
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(CORE)));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
});

self.addEventListener("fetch", (e) => {
  const { request } = e;
  // GETのみキャッシュ
  if (request.method !== "GET") return;
  e.respondWith(
    caches.match(request).then((hit) =>
      hit ||
      fetch(request).then((resp) => {
        // 成功レスポンスは動的キャッシュ
        const copy = resp.clone();
        caches.open(CACHE).then((c) => c.put(request, copy));
        return resp;
      }).catch(() => caches.match("./index.html"))
    )
  );
});
