const nombreCache = "PORTFOLIO_PWA3";
const archivosCache = [
    "/",
    "index.html",
    "pages/contacto.html",
    "pages/proyectos.html",
    "img/back.jpg",
    "img/bihghhhhh.jpg",
    "img/bongo-cat-transparent.gif",
    "img/bongoGIF.gif",
    "img/drivelogo.png",
    "img/dseguasd.jpg",
    "img/gitlogo.png",
    "img/home.png",
    "img/navigation.jpg",
    "img/reconocimiento.jpeg",
    "img/stars.jpg",
    "img/text.jpg",
    "img/stars.jpg",
    "img/swipe.gif",
    "css/index.css",
    "img/yo.jpeg",
    "js/app.js",
    "js/index.js",
    "js/ocultarcontent.js",
    "js/proyectos.js"
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
