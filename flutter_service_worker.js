'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "0c573666fd4c4db7d5ae57ac8c67da3e",
"assets/AssetManifest.bin.json": "e62a67bb423278875421796e97054710",
"assets/AssetManifest.json": "7d991101fdab0b778a4bf575764e36f7",
"assets/assets/AboutText.md": "2c7320ea4eb8b13af296f3d44bd1abbd",
"assets/assets/Codes.json": "161c628c268b38c2b84dceb15caffe6f",
"assets/assets/EmergencyText/ACLS-AsystolePEA.md": "a5c34e7399cdfdcaf8da9584101da247",
"assets/assets/EmergencyText/ACLS-VFVT.md": "4948580cbb27e0bbfddf8958bdb1275d",
"assets/assets/EmergencyText/Airway.md": "5a7b30b29461266f995ae74f776adab5",
"assets/assets/EmergencyText/AirwayFire.md": "6ac14f71810379b5205397052bb32f41",
"assets/assets/EmergencyText/AirwayPressure.md": "941436e684d5b9508a01d62e30430243",
"assets/assets/EmergencyText/Anaphylaxis.md": "29bdad8e2e6792b40d2b9972c0ab4bb8",
"assets/assets/EmergencyText/Brady.md": "33e0345a072ece7dba80074bbdfc65df",
"assets/assets/EmergencyText/Bronchospasm.md": "25c1670665640d84c318279bee2f92e7",
"assets/assets/EmergencyText/Cric.jpg": "637eb6a3775743b39f2096f7f3a4cc0e",
"assets/assets/EmergencyText/Delayed.md": "2729aa843bc49852087badf2ebed7bd2",
"assets/assets/EmergencyText/Fire.md": "fe167fc85321db7f3f1043a894e3f845",
"assets/assets/EmergencyText/HandTs.md": "f32955c8640cc3b85a75b2deea90e5bb",
"assets/assets/EmergencyText/Hemorrhage.md": "8cdd69a5d93f7bf8c19352e60e48f1bd",
"assets/assets/EmergencyText/HighSpinal.md": "cef50341e757ba29a123a11f5aa7a84e",
"assets/assets/EmergencyText/HOTN.md": "9b692f5dabdcde4a53127a5bf8bb8a02",
"assets/assets/EmergencyText/HTN.md": "425d682cecbf9e92da7d9b515142fc89",
"assets/assets/EmergencyText/Hypoxemia.md": "ea2c8e70b1491fef7ba850aa27e95f22",
"assets/assets/EmergencyText/HypoxiaDDx.md": "5d2d2bdc473834a0a7bd9da2da3910ca",
"assets/assets/EmergencyText/LAST.md": "2c5707842f9740f37d5d85cc87d71ac7",
"assets/assets/EmergencyText/MH.md": "07787bbdd9d4d9757ef5f4ad942ba62f",
"assets/assets/EmergencyText/MI.md": "5f140f12f7f335492aab7dce1513e83a",
"assets/assets/EmergencyText/O2Failure.md": "9a31cb1c84a485916311e2c12febe8c1",
"assets/assets/EmergencyText/PE.md": "a7e04c3cda8a3ac26078d259cc994f03",
"assets/assets/EmergencyText/PowerFailure.md": "14b2c1b8b1a5316fa49e1f2f2cd9a73b",
"assets/assets/EmergencyText/PTX.md": "bd6e3cd4d459e837d19e0d22ea9382f0",
"assets/assets/EmergencyText/RightHeartFailure.md": "3ee8ed375ad2503496634549b7986734",
"assets/assets/EmergencyText/StableTach.md": "2ecf30ffed829b81828378ea81e78f0b",
"assets/assets/EmergencyText/TransfusionRxn.md": "fb6afb2faa38044a9d30f11558022b7e",
"assets/assets/EmergencyText/Trauma.md": "668ad85dffd20f6f2bd0edb6cd541160",
"assets/assets/EmergencyText/UnstableTach.md": "c0d3057204321d622bcc57e171d36686",
"assets/assets/PhoneNumbers.json": "4f71da6b16bbb283b32cf307abb273c1",
"assets/assets/wikianesthesia_logo.png": "ae630e055e92e27afe905e23f73b7046",
"assets/FontManifest.json": "7920de41c58b42dbd3b2fdc96094529a",
"assets/fonts/MaterialIcons-Regular.otf": "d1dc06da6b3b592f1e5d5f9abd56e4fd",
"assets/NOTICES": "1bba1206b425765e8ee29e3a65894728",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "efe0afe05aebf9cede4b38a44d061239",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "6ebc7bc5b74956596611c6774d8beb5b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "e82750b8cac2f77d94e6542f483b5e97",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ba6d28881f52610d99640aa4e2f2c5e8",
"/": "ba6d28881f52610d99640aa4e2f2c5e8",
"main.dart.js": "5e663e4d08e6b18bdcc9255b24121568",
"manifest.json": "35ff09d8909ccfe0b0dc6ea405352109",
"version.json": "965887c71737995e0b16725a1885e472"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
