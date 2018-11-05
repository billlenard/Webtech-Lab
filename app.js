window.addEventListener('install', function (event) {
  console.log('SW Installed');
  event.waitUntil(
    caches.open('static')  //open a cache
      .then(function (cache) {   //cache open returns a promise  
          cache.add('/evac/evac.js');
		  cache.add('/index.html');
		  cache.add('/evac/test.html');
		  cache.add('/function/function.js');
		  cache.add('/function/landslide.html');
		  cache.add('/app.js');
		  cache.add('/style.css');
		  
		 
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

