const express = require('express');
const userRouter = require('./routes/userRoutes');
const db = require('./config/db');

const app = express();
app.use(express.json());

// Database connection
db();

app.use("/api", userRouter);

app.listen(3000, () => {
    console.log("Your app run on http://localhost:3000");    
})