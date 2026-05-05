(function () {
  function __loadScript(src) {
    return new Promise(function (resolve, reject) {
      var s = document.createElement('script');
      s.src = src;
      s.onload = resolve;
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }

  fetch('/content.json')
    .then(function (r) { return r.json(); })
    .then(function (content) {
      window.__content = content;
      window.__resources = content.photos;
      return [
        'assets/asset-574bf4c3-dc8a-4a8b-a904-0430e0693d8f.js',
        'assets/asset-35129c28-da94-4df6-a2e7-f383de60d973.js',
        'assets/compiled/app-01.js',
        'assets/compiled/app-02.js',
        'assets/compiled/app-03.js',
        'assets/compiled/app-04.js',
        'assets/compiled/app-05.js',
        'assets/compiled/app-06.js',
        'assets/compiled/app-07.js'
      ].reduce(function (p, src) {
        return p.then(function () { return __loadScript(src); });
      }, Promise.resolve());
    });
})();
