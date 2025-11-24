const userRouter = require('./routes/userRoutes');

const express = require('express');
const app = express();
app.use(express.json());

// Database connection
const db = require('./config/db');
db();

app.use("/api", userRouter);

app.listen(3000, () => {
    console.log("Your app run on http://localhost:3000");    
})