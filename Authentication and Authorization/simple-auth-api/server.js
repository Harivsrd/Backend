const express = require("express");

const app = express();

const authRoutes = require("./routes/authRoutes");

app.use(express.json());

app.use("/", authRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})