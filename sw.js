/* Señor X · service worker: deixa os apps instaláveis. Não guarda cópia das páginas (sempre busca a versão mais nova). */
self.addEventListener("install",()=>self.skipWaiting());
self.addEventListener("activate",e=>e.waitUntil(self.clients.claim()));
self.addEventListener("fetch",e=>{
  if(e.request.mode!=="navigate") return;
  e.respondWith(fetch(e.request).catch(()=>new Response(`<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Sem internet</title></head>
<body style="margin:0;min-height:100vh;background:#1B1512;color:#F1E4D3;font-family:system-ui,sans-serif;display:flex;align-items:center;justify-content:center;text-align:center;padding:24px;box-sizing:border-box">
<div><div style="font-size:48px">📶</div><h2 style="margin:10px 0">Sem internet</h2><p style="opacity:.8">Verifique o Wi-Fi ou os dados móveis e tente de novo.</p>
<button onclick="location.reload()" style="margin-top:12px;background:#CF7132;color:#fff;border:0;border-radius:24px;padding:12px 26px;font-size:16px">Tentar de novo</button></div></body></html>`,{headers:{"Content-Type":"text/html; charset=utf-8"}})));
});
