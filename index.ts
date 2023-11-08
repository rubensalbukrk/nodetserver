import express, { Express, Response, Request } from "express";
import cors from "cors"
import dotenv from 'dotenv'
import routes from "./src/routes";

export const app: Express = express()
const port = process.env.PORT;
dotenv.config();

app.use(cors())
app.use(express.json())

routes(app);

/// OUVINDO NA PORTA
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});