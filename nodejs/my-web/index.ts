import express, { Request, Response, NextFunction } from 'express';

const app = express();

interface LogEntry {
  ip: string;
  timestamp: Date;
}

let logs: LogEntry[] = [];

function auditMiddleware(req: Request, res: Response, next: NextFunction) {
  let ip = req.connection.remoteAddress;
  let timestamp = new Date();
  logs.push({
    ip: ip || '',
    timestamp
  });
  console.log(logs);
  next();
  return undefined;
}

app.use(auditMiddleware);


app.use('/static', express.static('public'));

app.get('/users/:id/cars', (request, response) => {
  console.log(request.params);
  console.log(request.query);

  response.send(`Hello world ${request.params.id},
           color is: ${request.query.color}`);
});

app.get('/logs', (req, res) => {
  let rows = '';
  for(let i = 0 ; i < logs.length; i++) {
    rows += `
    <tr>
      <td>${logs[i].ip}</td>
      <td>${logs[i].timestamp}</td>
    </tr>`;
  }

  let html = `
  
    <html>
    <body>
      <table border="1">
        ${rows}
      </table>
    </body>
    </html>

  `
  res.send(html);
});

app.listen(3000, '0.0.0.0', () => console.log('listening...'));