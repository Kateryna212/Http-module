const http = require('http');

// Отримуємо порт
const port = process.argv[2];

const server = http.createServer((req, res) => {
  // Створюємо об'єкт URL. Другий аргумент потрібен для коректного парсингу відносних шляхів
  const myUrl = new URL(req.url, `http://localhost:${port}`);

  // Перевіряємо шлях (pathname ігнорує query-параметри)
  if (req.method === 'GET' && myUrl.pathname === '/echo') {
    // Отримуємо значення параметра 'msg'
    const message = myUrl.searchParams.get('msg') || '';

    // Відповідь
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(message);
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(port);
