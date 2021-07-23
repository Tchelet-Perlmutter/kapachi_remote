const express = require("express");
const CRUDFunctions = require("../controllers/commonFullCRUDFunctions");
// ??? const conversationsController = require("../controllers/conversationsController");
// ??? const usersController = require("../controllers/usersController");
// ??? const messagesController = require("../controllers/messagesController");
// ??? const conversationsRout = require("./conversationsRout");
// ??? const messagesRout = require("./messagesRout");
// ??? const usersRout = require("./musersRout");

exports.routers = (collectionName, router) => {
  // In patch cases - The current content and the new content would be inside the body of the request. In case of get/delete property by id - the proprty name and current property value would be in the body eather
  router
    .route("/")
    .get(CRUDFunctions.getAllDocuments(collectionName))
    .delete(CRUDFunctions.deleteAllDocument(collectionName))
    .post(CRUDFunctions.addDocument(collectionName));

  router
    .route("/:id")
    .get(CRUDFunctions.getDocumentById(collectionName))
    .delete(CRUDFunctions.deleteDocumentByID(collectionName))
    .patch(CRUDFunctions.edditDocumentByid(collectionName));

  router
    .route("/:propertyName")
    .get(CRUDFunctions, CRUDFunctions.getDocumentByProperty(collectionName))
    .delete(CRUDFunctions, deleteDocumentByProperty(collectionName))
    .patch(CRUDFunctions.edditDocumentByProperty(collectionName));
};
