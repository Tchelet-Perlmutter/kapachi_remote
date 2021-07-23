const mongoose = require('mongoose');

//Users-collection schema
const UsersSchema = new mongoose.schema({
    phone:{
        type: String, 
        required: [true, "A User must have a phone number"],
        unique: true,
        validate: {
            validator: (inpt) => {
                //Checks if the phone number contain only 10 digits
                // ??? is it correct expresion? 
                return /^[0-9]{10}$/.test(inpt);
            },
            message: () => "Invalid phone number. please write exactly ten digits"
        },
        trim: true
    },
    //Conversation's array = Conversation's indexes in the db
    conversationsArr:{
        type: Array,
        default: [],
    },
    password:{
        type: Number, // ??? When I write type Numbers, I don't need a validator for checking if he puted only numbers?
        default: null,
        unique: true,
    },
    keysQ:{
        type: Number,
        default: 0,
    },
    messagesHeChanedQ:{
        type: Number,
        default: 0,
    },
    // User rank - between 0 to 5 
    userRank:{
        type: Number,
        default: 0,
        min: 0,
        max: 5, 
    },
    //Status - Max 150 characters
    status:{
        type: String,  
        maxLength: 150,
        trim: true,      
    }

});

// Creating the users cllection and model
const Users = mongoose.model("Users", UsersSchema);

module.exports = Users;