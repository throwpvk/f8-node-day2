const express = require("express");
const appRouter = require("./src/routes/index");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(
  cors({
    origin: ["http://localhost:5173", "https://throwpvk.github.io"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    optionsSuccessStatus: 200,
  })
);
app.use(express.json());
app.use("/api", appRouter);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
