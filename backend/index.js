const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
app.use(cors());
const API_URL = "https://api.exchangerate-api.com/v4/latest/USD"; // Ücretsiz API örneği

app.get("/api/rates", async (req, res) => {
  try {
    const response = await axios.get(API_URL);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: "API error" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
