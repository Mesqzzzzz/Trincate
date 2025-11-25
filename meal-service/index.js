const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => res.send("Trincate - Meal Service"));

// CRUD endpoints placeholders
app.get("/meals", (req, res) => res.json([]));
app.post("/meals", (req, res) => res.json({ message: "Create meal" }));
app.put("/meals/:id", (req, res) => res.json({ message: "Update meal" }));
app.delete("/meals/:id", (req, res) => res.json({ message: "Delete meal" }));

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => console.log(`Meal Service running on port ${PORT}`));
