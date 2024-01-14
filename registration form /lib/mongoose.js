const mongoose = require("mongoose");

const uri = process.env.MONGO_URI || "mongodb+srv://sparshv70:IIT0Bombay@users.rweelhm.mongodb.net/"
mongoose.connect(uri).then(() => {
    console.log("Connection successful");
}).catch((error) => {
    console.log(process.env.MONGO_URI);
    console.log("Error",error);
})
