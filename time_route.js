const http = require('http');

// Порт беремо з аргументів (наприклад, node time_route.js 3000)
const port = process.argv[2];

const server = http.createServer((req, res) => {
  // Перевіряємо метод GET та шлях /time
  if (req.method === 'GET' && req.url === '/time') {
    
    // Створюємо об'єкт з поточним часом в форматі ISO
    const responseData = {
      now: new Date().toISOString()
    };

    // Встановлюємо статус 200 та заголовок JSON
    res.writeHead(200, { 'Content-Type': 'application/json' });
    
    // Перетворюємо об'єкт у рядок (string) і відправляємо
    res.end(JSON.stringify(responseData));
  } else {
    // Для інших шляхів повернемо 404
    res.writeHead(404);
    res.end();
  }
});

server.listen(port);
