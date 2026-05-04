const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
    console.log("REQUEST RECEIVED");
    res.json({ message: "Backend is running " });
});

// Start server
app.listen(5000, () => {
    console.log("Server is running on port 5000 ");
});