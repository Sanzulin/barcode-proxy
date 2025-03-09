const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();

app.use(cors()); // Enable CORS

app.get("/lookup", async (req, res) => {
    let barcode = req.query.barcode;
    let apiKey = "qbmsbivm0bh9sthmw0c2miu7etkoit"; // Keep this secret

    try {
        let response = await axios.get(`https://api.barcodelookup.com/v3/products?barcode=${barcode}&formatted=y&key=${apiKey}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "API request failed." });
    }
});

app.listen(3000, () => console.log("Server running on port 3000"));
