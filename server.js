const express = require("express");
const appRouter = require("./src/routes/index");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://throwpvk.github.io",
      "http://127.0.0.1:5500",
      "https://feed-6z7f.onrender.com",
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    optionsSuccessStatus: 200,
  })
);
app.use(express.json());
app.use(express.static("."));
app.use("/api", appRouter);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
