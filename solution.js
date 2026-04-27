const http = require('http');

// Отримуємо порт із аргументів командного рядка
const port = process.argv[2];

const server = http.createServer((req, res) => {
  // Перевіряємо метод та шлях
  if (req.method === 'GET' && req.url === '/') {
    // Встановлюємо статус 200 та заголовок
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    // Відправляємо тіло відповіді (важливо: текст має збігатися до символа!)
    res.end('Welcome to Manual HTTP Router');
  }
});

// Запускаємо сервер на вказаному порту
server.listen(port);
