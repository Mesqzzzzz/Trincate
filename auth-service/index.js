const express = require("express");
const app = express();
app.use(express.json());

// Placeholder routes
app.get("/", (req, res) => res.send("Trincate - Auth Service"));

// Auth routes (placeholders)
app.post("/register", (req, res) => res.json({ message: "Register endpoint" }));
app.post("/login", (req, res) => res.json({ message: "Login endpoint" }));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Auth Service running on port ${PORT}`));
