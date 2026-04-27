const http = require('http');

const port = process.argv[2];

const server = http.createServer((req, res) => {
  const myUrl = new URL(req.url, `http://localhost:${port}`);

  if (req.method === 'GET' && myUrl.pathname === '/sum') {
    // Дістаємо параметри a та b
    const aParam = myUrl.searchParams.get('a');
    const bParam = myUrl.searchParams.get('b');

    // Перетворюємо їх на числа
    const a = Number(aParam);
    const b = Number(bParam);

    // Перевіряємо, чи параметри існують і чи є вони дійсними числами
    // Важливо: Number('') повертає 0, тому перевіряємо також чи параметри не null
    if (aParam === null || bParam === null || isNaN(a) || isNaN(b)) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ error: "Invalid numbers" }));
    }

    // Якщо все добре, рахуємо суму і повертаємо 200
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ sum: a + b }));
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(port);
