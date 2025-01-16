import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
  pgCode: String,
  pgName: String,
  taluka: String,
});
const Document = mongoose.model("Document", dataSchema);

export default Document;
