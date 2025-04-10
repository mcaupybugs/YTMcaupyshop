import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
const PORT = 4000;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hey there!");
});

app.listen(PORT, () => {
  console.log(`App running at port : ${PORT}`);
});
