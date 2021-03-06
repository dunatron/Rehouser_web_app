'use strict';
/**
 * DOCS
 * progressive web apps base overview: https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps
 * next pwa custom service workers example: https://github.com/shadowwalker/next-pwa/tree/master/examples/custom-worker
 * next pwa notifications: https://github.com/imekachi/next-pwa-notification
 * https://github.com/shadowwalker/next-pwa/blob/master/examples/web-push/pages/index.js
 */

// To disable all workbox logging during development, you can set self.__WB_DISABLE_DEV_LOGS to true
// https://developers.google.com/web/tools/workbox/guides/configure-workbox#disable_logging
//
// self.__WB_DISABLE_DEV_LOGS = true
//https://github.com/shadowwalker/next-pwa/tree/master/examples/web-push
const util = require('./util');

util();

// listen to message event from window
self.addEventListener('message', event => {
  // HOW TO TEST THIS?
  // Run this in your browser console:
  //     window.navigator.serviceWorker.controller.postMessage({command: 'log', message: 'hello world'})
  // OR use next-pwa injected workbox object
  //     window.workbox.messageSW({command: 'log', message: 'hello world'})
  console.log(event.data);
});

self.addEventListener('push', function(event) {
  const data = JSON.parse(event.data.text());
  event.waitUntil(
    registration.showNotification(data.title, {
      body: data.message,
      icon: '/icons/android-chrome-192x192.png',
    })
  );
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(
    clients
      .matchAll({ type: 'window', includeUncontrolled: true })
      .then(function(clientList) {
        if (clientList.length > 0) {
          let client = clientList[0];
          for (let i = 0; i < clientList.length; i++) {
            if (clientList[i].focused) {
              client = clientList[i];
            }
          }
          return client.focus();
        }
        return clients.openWindow('/');
      })
  );
});

// self.addEventListener('pushsubscriptionchange', function(event) {
//   event.waitUntil(
//       Promise.all([
//           Promise.resolve(event.oldSubscription ? deleteSubscription(event.oldSubscription) : true),
//           Promise.resolve(event.newSubscription ? event.newSubscription : subscribePush(registration))
//               .then(function(sub) { return saveSubscription(sub) })
//       ])
//   )
// })
