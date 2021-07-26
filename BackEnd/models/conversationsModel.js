// Conversation schema
const conversationSchema = new mongoos.schema({
  //The converationalists of the conversation = their IDs
  conversationalistsArr: {
    type: Array,
    required: [true, "A conversation should have conversationalists"],
    unique: true,
  },
  // messages Indexes (IDs)
  mesagesIndexesArr: {
    type: Array,
    defoult: [],
  },
});

// Creating the collection and the model conversations
const Conversations = mongoos.model("Conversations", conversationschema);

module.exports = Conversations;
