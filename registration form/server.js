const cors = require("cors");
const express = require("express");
require("./lib/mongoose.js");
const FormSchema = require("./lib/FormSchema.js");
const app = express();
const PORT = 5500;
app.use(cors());
app.use(express.json());

app.get("/",(request,response) => {
    console.log("GET Request at Home");
    response.send("Hola");
});

app.post("/api/users" , async(request,response) => {
    try {
        const {name,age,phone,email} = request.body;
        console.log("Data : ",{name,age,phone,email});
        const createdUser = await FormSchema.create({name,age,email,phone});
        await createdUser.save();
        return response.json({
            message: "New user created",
            status: 201,
            details: createdUser,
        });
    } catch (error) {
        console.log(error);
        return response.json({
            message: "Error at server",
            status: 500,
        })
    }
});

app.listen(PORT,() => {
    console.log(`Server running at port ${PORT}`);
})