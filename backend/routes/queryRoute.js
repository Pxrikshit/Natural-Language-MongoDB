const express = require("express");
const router = express.Router();
const { processQuery } = require("../services/queryService");

router.post("/query", async (req, res) => {
    try {
        const { userQuery } = req.body;

        if (!userQuery) {
            return res.status(400).json({ error: "Query is required" });
        }

        const data = await processQuery(userQuery);
        res.json(data);

    } catch (error) {
        console.error("Query Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;