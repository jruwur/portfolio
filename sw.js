const nombreCache = "PORTFOLIO_PWA2";
const archivosCache = [
    "/",
    "index.html",
    "img",
    "css/index.css",
    "js/app.js",
    "js/index.js",
    "js/ocultarcontent.js"
];

self.addEventListener('install', e => {
    console.log('El Service Worker se instaló correctamente', e);
    e.waitUntil(
        caches.open(nombreCache).then(cache => {
            console.log("Cache guardada correctamente");
            return Promise.all(
                archivosCache.map(url => {
                    return fetch(url)
                        .then(respuesta => {
                            if (!respuesta.ok) {
                                throw new Error('Fallo al descargar el recurso: ' + url);
                            }
                            return cache.put(url, respuesta);
                        })
                        .catch(error => {
                            console.error('Error al agregar al caché:', error);
                        });
                })
            );
        })
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.filter(cacheName => {
                    // Filtrar cachés antiguas
                    return cacheName.startsWith('PORTFOLIO_PWA') && cacheName !== nombreCache;
                }).map(cacheName => {
                    // Eliminar cachés antiguas
                    return caches.delete(cacheName);
                })
            );
        })
    );
});


self.addEventListener("fetch", e => {
    console.log("Se realizó una petición: ", e);
    e.respondWith(
        caches.match(e.request)
            .then(respuestaCache => {
                return respuestaCache || fetch(e.request);
            })
    );
});
