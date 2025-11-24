const mongoose = require("mongoose");

const connectDb = async () => {
        await mongoose.connect("mongodb://localhost:27017/myappdb")
        .then(() => console.log("Database connected"))
        .catch(err => {
            console.error("Connection Failed", err.message);
            process.exit(1);
        });
};

module.exports = connectDb;