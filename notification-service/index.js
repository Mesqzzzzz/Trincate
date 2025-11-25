const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => res.send("Trincate - Notification Service"));

// Placeholder endpoints
app.get("/notifications", (req, res) => res.json([]));
app.post("/notifications", (req, res) =>
  res.json({ message: "Send notification" })
);

const PORT = process.env.PORT || 3005;
app.listen(PORT, () =>
  console.log(`Notification Service running on port ${PORT}`)
);
