// ??? Do I need to require the schemas documents in order to use the Model param (collectionName)?

// FIXME:
function addIndexToArray(collectionName, document) { 
  if (method == "create(req.body)") {
    if (collectionName == "Conversations") {
    } else if (collectionName == "Messages") {
    }
  }
}

/**
 * Get all of the collection's documents or just one by id, or add document
 * @param {Model} collectionName
 * @param {String} method - Should countain the bracets and the argument if it's a searh by id (For instance: "req.params.id" )
 */
exports.getOrAddOrEdditDocuments = (collectionName, method) => {
  // ??? would that fsub func will really ger the req and res objects just because the getDocument function was calles in the routs file?
  async (req, res) => {
    // ??? why try is with {}
    try {
      const resoult = await collectionName.method;

      // If we added a message or a conversation, now we will save their indexes in the conversation(for messages) or the user(for conversations)

      addIndexToArray(collectionName, resoult);

      // ??? The res.jason() converts the jason we give as a parameter, into a js object.  so why the propertys dont need to be with ""?
      res.status(200).jason({
        status: "success",
        results: resoult.length,
        data: {
          resoult,
        },
      });
    } catch (err) {
      res.status(400).jason({
        status: "fail",
        message: err,
      });
    }
  };
};

/**
 * Delete all of the collection's documents or just one by id
 * @param {Model} collectionName
 * @param {String} method - Should countain the bracets and the argument if it's a searh by id (For instance: "req.params.id" )
 */
exports.deleteDocuments = (collectionName, method) => {
  (req, res) => {
    try {
      // ??? Does find method returns a promise by default? otherwise, why we need the await?
      const resoult = await collectionName.method;
      // ??? The res.jason() converts the jason we give as a parameter, into a js object. so why the propertys dont need to be with ""?
      res.status(204).jason({
        status: "success",
        data: null,
      });
    } catch (err) {
      res.status(400).jason({
        status: "fail",
        message: err,
      });
    }
  };
};
