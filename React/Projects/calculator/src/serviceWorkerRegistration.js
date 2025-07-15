// This optional code is used to register a service worker.
// register() is not called by default.

const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
  // [::1] is the IPv6 localhost address.
  window.location.hostname === '[::1]' ||
  // 127.0.0.0/8 are considered localhost for IPv4.
  window.location.hostname.match(
    /^127(?:\.(?:25[0-5]|2[0-4]\d|1?\d\d?)){3}$/
  )
);

export function register(config) {
  if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'development') {
    const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

    if (isLocalhost) {
      // This is running on localhost. Check if service worker exists.
      checkValidServiceWorker(swUrl, config);

      navigator.serviceWorker.ready.then(() => {
        console.log('Service worker is ready (local dev)');
      });
    } else {
      // Not localhost. Just register service worker
      registerValidSW(swUrl, config);
    }
  }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker
    .register(swUrl)
    .then(registration => {
      console.log('Service worker registered:', registration);

      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        if (installingWorker == null) return;

        installingWorker.onstatechange = () => {
          if (installingWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              console.log('New content is available; please refresh.');

              if (config && config.onUpdate) {
                config.onUpdate(registration);
              }
            } else {
              console.log('Content cached for offline use.');

              if (config && config.onSuccess) {
                config.onSuccess(registration);
              }
            }
          }
        };
      };
    })
    .catch(error => {
      console.error('Error during service worker registration:', error);
    });
}

function checkValidServiceWorker(swUrl, config) {
  fetch(swUrl)
    .then(response => {
      const contentType = response.headers.get('content-type');
      if (
        response.status === 404 ||
        (contentType && contentType.indexOf('javascript') === -1)
      ) {
        // No service worker found. Reload app.
        navigator.serviceWorker.ready.then(registration => {
          registration.unregister().then(() => window.location.reload());
        });
      } else {
        // Service worker found
        registerValidSW(swUrl, config);
      }
    })
    .catch(() => {
      console.log('No internet connection. App running in offline mode.');
    });
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then(registration => registration.unregister())
      .catch(error => console.error(error.message));
  }
}
