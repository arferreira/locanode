import express from "express";
import swaggerUi from "swagger-ui-express";
import "./database";
import "./shared/container";
import swaggerFile from "../swagger.json";
import { router } from "./routes";

const app = express();

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);


app.get('/', (req, res) => {
  return res.json({ message: 'Running API' })
});



app.listen(3333, () => console.info('API listening on port ' + 3333));