const CACHE_NAME = "nanhi-pathshala-v1";

const APP_SHELL = [
    "./",
    "./index.html",
    "./login.html",
    "./home.html",
    "./content.html",
    "./profile.html",
    "./manifest.json"
];


/* ============================================================
   INSTALL
============================================================ */

self.addEventListener(
    "install",
    (event) => {

        event.waitUntil(

            caches.open(
                CACHE_NAME
            ).then(
                (cache) => {

                    return cache.addAll(
                        APP_SHELL
                    );

                }
            )

        );

        self.skipWaiting();

    }
);


/* ============================================================
   ACTIVATE
============================================================ */

self.addEventListener(
    "activate",
    (event) => {

        event.waitUntil(

            caches.keys().then(
                (cacheNames) => {

                    return Promise.all(

                        cacheNames
                            .filter(
                                (name) =>
                                    name !== CACHE_NAME
                            )
                            .map(
                                (name) =>
                                    caches.delete(name)
                            )

                    );

                }
            )

        );

        self.clients.claim();

    }
);


/* ============================================================
   FETCH
============================================================ */

self.addEventListener(
    "fetch",
    (event) => {

        if (
            event.request.method !== "GET"
        ) {
            return;
        }


        event.respondWith(

            fetch(
                event.request
            )
            .then(
                (response) => {

                    if (
                        response &&
                        response.status === 200 &&
                        response.type === "basic"
                    ) {

                        const responseClone =
                            response.clone();


                        caches.open(
                            CACHE_NAME
                        ).then(
                            (cache) => {

                                cache.put(
                                    event.request,
                                    responseClone
                                );

                            }
                        );

                    }


                    return response;

                }
            )
            .catch(
                () => {

                    return caches.match(
                        event.request
                    );

                }
            )

        );

    }
);