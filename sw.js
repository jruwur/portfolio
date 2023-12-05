const nombreCache = "PORTFOLIO_PWA2";
const archivosCache = [
    "/",
    "index.html",
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

self.addEventListener('activate', e => {
    console.log("El Service Worker está activo y listo para controlar las páginas", e);
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
