// Service Worker - 注入 COOP/COEP 头以启用 SharedArrayBuffer
// 这个方案允许在不配置服务器的情况下使用 SharedArrayBuffer

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));

self.addEventListener('fetch', (event) => {
  const request = event.request;
  
  // 只处理同源请求
  if (request.mode === 'navigate' || 
      (request.mode === 'same-origin' && request.destination !== '')) {
    
    event.respondWith(
      fetch(request).then((response) => {
        // 克隆响应并添加必需的头
        const headers = new Headers(response.headers);
        headers.set('Cross-Origin-Opener-Policy', 'same-origin');
        headers.set('Cross-Origin-Embedder-Policy', 'require-corp');
        
        return new Response(response.body, {
          status: response.status,
          statusText: response.statusText,
          headers: headers
        });
      }).catch((err) => {
        console.error('Service Worker fetch error:', err);
        return fetch(request);
      })
    );
  }
});
