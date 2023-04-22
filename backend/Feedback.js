const mongoURL =
  "mongodb+srv://pantulakartik:12345@cluster0.d8jawtc.mongodb.net/?retryWrites=true&w=majority";

const mongoose = require("mongoose");
mongoose
  .connect(mongoURL, { useNewURLParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(() => console.log("Connection Failed"));

const newSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  feedback: {
    type: String,
    required: true,
  },
});

const collection = mongoose.model("feedbacks", newSchema);

module.exports = collection;
