window.addEventListener('install', function (event) {
  console.log('SW Installed');
  event.waitUntil(
    caches.open('static')  //open a cache
      .then(function (cache) {   //cache open returns a promise  
          cache.add('/');
		  cache.add('/index.html');
		  cache.add('/index.html#current');
		  cache.add('/index.html#recent');
		  cache.add('/index.html#summary');
		  cache.add('/app.js');
		  cache.add('/style.css');
		  //cache.add('/manifest.json');
		  
		 
      })
  );
});

window.addEventListener('activate', function () {  //activate and
  console.log('SW Activated');
});

window.addEventListener('fetch', function(event) {  //triggered when you fetch something in the index/html - css, script
  event.respondWith(		//respond by reaching out to the cache
    caches.match(event.request)  //match request in the cache
      .then(function(res) {
        if (res) {
          return res;
        } else {
          return fetch(event.request);
        }
      })
  );
});

