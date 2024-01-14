const {Schema,model,models} = require("mongoose");

const Form = new Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true},
    email: {type: String, required: true},
    phone: {type: String, required: true},
});

const FormSchema = (models.Form) || model("User Form",Form);

module.exports= FormSchema;
