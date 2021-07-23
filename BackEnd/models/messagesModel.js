//Users-collection schema

/*
const MessagesSchema = new mongoose.schema({
    //from or to would be a user ID
    from: {
        type: String,
        required: [true, "A message should have a 'from' propery"],
        validate: {
            validator: (inpt) => {
                // TODO: check if there is a person with that ID
            }
        },
        trim: true
    },
    to: {
        type: String,
        required: [true, "A message should have a 'from' propery"],
        validate: {
            validator: (inpt) => {
                // TODO: check if there is a person with that ID
            }
        },
        trim: ture,
    },
    // Date = miliseconds formated date
    date: {
        type: Number,
        required: [true, "A message should have a date"],
        validate: {
            validator: (inpt) => {
              //Checks if the date contain only digits
              // ??? is it correct expresion?
              return /^[0-9]*$/.test(inpt);
            }
        }
    },
    isLocked: {
        type: Boolean,
        required: [true, "A message should have a 'isLocked' propery"],
    },
    messageBody: {
        type: String,
        required: [true, "A message should have a 'messageBody' propery"],
        trim: true,
    },
    isSent: {
        type: Boolean,
        required: [true, "A message should have a 'isSent' propery"],
    },
    isRead: {
        type: Boolean,
        required: [true, "A message should have a 'isRead' proper"],
    },
});

 
// Creating the messages cllection and model
const Messages = mongoose.model("Messages", MessagesSchema);

module.exports = messages;
*/