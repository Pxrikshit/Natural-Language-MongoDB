require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const queryRoute = require("./routes/queryRoute");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected Successfully"))
.catch(err => {
    console.error("MongoDB Connection Error:", err);
    process.exit(1);
});

app.use("/api", queryRoute);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});