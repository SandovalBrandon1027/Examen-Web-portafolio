const mongoose = require('mongoose');


const MONGODB_URI = 'mongodb+srv://Dennis2003:123*@cluster0.euw1ldq.mongodb.net/DatosEjemplo';

const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database is connected");
    } catch (error) {
        console.error("Error connecting to database:", error);
    }
};

module.exports = connectDB;
