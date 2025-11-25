const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => res.send("Trincate - Category Service"));

// CRUD endpoints placeholders
app.get("/categories", (req, res) => res.json([]));
app.post("/categories", (req, res) => res.json({ message: "Create category" }));
app.put("/categories/:id", (req, res) =>
  res.json({ message: "Update category" })
);
app.delete("/categories/:id", (req, res) =>
  res.json({ message: "Delete category" })
);

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => console.log(`Category Service running on port ${PORT}`));
