const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => res.send("Trincate - Stats Service"));

// Placeholder stats endpoints
app.get("/stats/meals-by-category", (req, res) => res.json({}));
app.get("/stats/total-calories", (req, res) => res.json({}));

const PORT = process.env.PORT || 3004;
app.listen(PORT, () => console.log(`Stats Service running on port ${PORT}`));
