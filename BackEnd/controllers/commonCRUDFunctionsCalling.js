const Conversions = require("./../models/conversionsModel");
const Messages = require("../models/messagesModel");
const Users = require("../models/usersModel");
const CRUDTamplates = require("./commonCRUDFunctions");

//Get all collection's documents in the db - comes from / route
exports.getAllDocuments = (collectionName) => {
  CRUDTamplates.getOrAddOrEdditDocuments(collectionName, "find()");
};

//Get document by property - comes from /:id/:propertyName/:propertyContent route
exports.getDocumentByProperty = (collectionName) => {
  CRUDTamplates.getOrAddOrEdditDocuments(collectionName, "find(req.body)");
};

//Get 'document by id' - comes from /:id route
exports.getDocumentByID = (collectionName) => {
  CRUDTamplates.getOrAddOrEdditDocuments(
    collectionName,
    "findById(req.params.id)"
  );
};

//Delete all collection's documents - comes from / route
// ??? Is findAndDelete is the right way to delete all
exports.deleteAllDocuments = (collectionName) => {
  CRUDTamplates.deleteDocuments(collectionName, "findAndDelete()");
};

//Delete 'document by id' - comes from /:id route
exports.deleteDocumentByID = (collectionName) => {
  CRUDTamplates.deleteDocuments(
    collectionName,
    "findAndDeleteById(req.params.id)"
  );
};

//Delete 'document by property' - comes from /:propertyName/:propertyContent route
exports.deleteDocumentByProperty = (collectionName) => {
  CRUDTamplates.deleteDocuments(collectionName, "findOneAndDelete(req.body)");
};

//Eddit 'document by property' - comes from /:propertyName/:propertyContent route.
// The propety name and the new content would be inside the body of the request
exports.edditDocumentByProperty = (collectionName) => {
  CRUDTamplates.getOrAddOrEdditDocuments(
    collectionName,
    // I took out the /propertyContent (that represented the current content) in order to make the content in the body. Hoe do I distingwish diferent parts inside the body?
    "findOneAndUpdate({req.params.propertyName: req.body.???}, req.body.???, {new: true, runValidators: true})"
  );
};

//Eddit 'document by id' - comes from /:id route
exports.edditDocumentByID = (collectionName) => {
  const edditFunc =
    // ??? what is the option for updating just one property? should I add to the route /:propertyToChange ?
    "findByIdAndUpdate (req.params.id, req.body, {new: true, runValidators: true})";
  CRUDTamplates.getOrAddOrEdditDocuments(collectionName, edditFunc);
};

//Add document - comes from / route
exports.AddDocument = (collectionName) => {
  CRUDTamplates.getOrAddOrEdditDocument(collectionName, "create(req.body)");
};
