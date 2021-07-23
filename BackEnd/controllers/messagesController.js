const Messages = require("./../models/messagesModel");
const commonFunctions = require("./commonFunctions");

//Get all Messages in the db
exports.getAllMessages = () => {
  commonFunctions.getOrAddOrEdditDocuments(Messages, "find()");
};

//Get message by messagealists TODO:
exports.getMessageBymessagealists = () => {
  commonFunctions.getOrAddOrEdditDocuments(
    Messages,
    "find({messagealists: req.params.propertyContent})"
  );
};

//Get message by id
exports.getMessage = () => {
  commonFunctions.getOrAddOrEdditDocuments(
    Messages,
    "findById(req.params.id)"
  );
};

//Delete all Messages
// ??? Is findAndDelete is the right ay to delete all
exports.deleteAllMessages = () => {
  commonFunctions.deleteDocuments(Messages, "findAndDelete()");
};

//Delete message by id
exports.deleteMessage = () => {
  commonFunctions.deleteDocuments(
    Messages,
    "findAndDeleteById(req.params.id)"
  );
};

//Delete a message by messagealists TODO:
exports.deleteMessageBymessagealists = () => {
  commonFunctions.deleteDocuments(
    Messages,
    "findOneAndDelete({messagealists: req.params.propertyContent})"
  );
};

//Eddit message by messagelists TODO:
exports.edditMessageBymessagealists = () => {
  commonFunctions.getOrAddOrEdditDocuments(
    Messages,
    "findOneAndUpdate({messagealists: req.params.propertyContent}, req.body, {new: true, runValidators: true})"
  );
};

//Eddit message by id
exports.edditMessage = () => {
  const edditFunc =
    "findByIdAndUpdate (req.params.id, req.body, {new: true, runValidators: true})";
  commonFunctions.getOrAddOrEdditDocuments(Messages, edditFunc);
};

//Add message
exports.AddMessage = () => {
  commonFunctions.getOrAddOrEdditDocument(Messages, "create(req.body)");
};

