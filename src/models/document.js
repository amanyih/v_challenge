import mongoose from "mongoose";

const Schema = mongoose.Schema;

const documentSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    ownerId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const DocumentModel = mongoose.model("Document", documentSchema);

export default DocumentModel;
