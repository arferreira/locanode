import express from 'express';


import { router } from './routes'

const app = express();

app.use(express.json());


app.use(router);


app.get('/', (req, res) => {
  return res.json({ message: 'Running' })
});



app.listen(3333, () => console.info('API listening on port ' + 3333));