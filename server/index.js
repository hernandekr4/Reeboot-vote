const express = require("express");
const cors = require("cors");
require("dotenv").config();

const pledgeRoutes = require("./routes/pledgeRoutes");
const registerRoutes = require("./routes/registerRoutes");
const statusRoutes = require("./routes/statusRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// Mount all API routes before starting the server
app.use("/api/pledge", pledgeRoutes);
app.use("/api/register", registerRoutes);
app.use("/api/status", statusRoutes);

app.get("/", (req, res) => {
  res.send("Reeboot.vote backend is running!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
