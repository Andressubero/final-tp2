import express from "express";
import routes from "./routes/index.js";
import { notFound } from "./middlewares/notFound.js";

const app = express();
const port = 8080

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);
app.use(notFound);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})