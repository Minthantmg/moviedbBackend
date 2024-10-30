const express = require("express");
const connectDB = require("./config/mongo");
const corsMiddleware = require("./middlewares/cors");
const movieRouter = require("./routes/movie.route");
const port = 4000;

const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(corsMiddleware);

app.use("/api/v1", movieRouter);

app.get("/", (req, res) => {
  res.status(200).json("welcome");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
