/*const nombreCache = "PORTFOLIO_PWA"
const archivosCache = [
    "/",
    "/index.html",
    "/css/index.css",
    "/js/app.js",
    "/js/apv.js",
    "/js/index.js"
]

self.addEventListener('install', e => {
    console.log('el servis worquer se instalo bien', e);
    e.waitUntil(
        caches.open(nombreCache).then((cache)=>{
            console.log("cache guardada correctamente");
            cache.addAll(archivosCache);
        })
    )
})

self.addEventListener('activate', e =>{
console.log("El servis worquer está activo papi", e);
})

self.addEventListener("fetch", e =>{
    console.log("Se realizó una peticion: ", e );
    e.respondWith(
        caches.match(e.request)
        .then(respuestaCache =>{
            return respuestaCache;
        })
    )
})*/