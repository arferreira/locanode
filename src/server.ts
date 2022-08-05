import express from 'express';
import categoriesRoutes from './routes/categories.routes';
import { specificationsRoutes } from './routes/specifications.routes';

const app = express();

app.use(express.json());


app.use('/categories', categoriesRoutes);
app.use('/specifications', specificationsRoutes);



app.get('/', (req, res) => {
  return res.json({ message: 'Running' })
});



app.listen(3333, () => console.info('API listening on port ' + 3333));