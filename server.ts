import * as express from 'express';
import * as path from 'path';
import * as morgan from 'morgan';

const app = express();

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public'), {
  immutable: true,
  etag: false,
  index: false,
  maxAge: 60 * 60 * 365 * 100,
}));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(4000, () => console.log('Server started on port 4000'));
