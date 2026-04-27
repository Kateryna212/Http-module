const http = require('http');

// Отримуємо порт із командного рядка
const port = process.argv[2];

const server = http.createServer((req, res) => {
  // Оскільки завдання вимагає 404 для БУДЬ-ЯКОГО невідомого шляху,
  // а в цій вправі ми не створюємо інших роутів, 
  // ми просто на все відповідаємо помилкою.
  
  res.writeHead(404, { 'Content-Type': 'application/json' });
  
  const responseData = {
    error: "Not found"
  };

  res.end(JSON.stringify(responseData));
});

server.listen(port);
