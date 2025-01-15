import { Document } from "../models/index.js";

const create = async function (req, res) {
  try {
    const documentFromBody = req.body;
    const newDocument = await Document.create(documentFromBody);

    return res.status(201).json({
      message: "Document Successfully Created",
      data: newDocument,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something went wrong, please try again.",
    });
  }
};

const getById = async function (req, res) {
  try {
    const document = await Document.findById(req.params.id);

    if (!document) {
      return res.status(404).json({
        message: "Document not found",
      });
    }

    return res.status(200).json({
      message: "Successful",
      data: document,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong, please try again.",
    });
  }
};

const getAll = async function (req, res) {
  try {
    const documents = await Document.find();

    return res.status(200).json({
      message: "Successful",
      data: documents,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong, please try again.",
    });
  }
};

const updateById = async function (req, res) {
  try {
    const document = await Document.findById(req.params.id);

    if (!document) {
      return res.status(404).json({
        message: "Document not found",
      });
    }

    const updatedDocument = await Document.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    return res.status(200).json({
      message: "successful",
      data: updatedDocument,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong, please try again.",
    });
  }
};

const deleteById = async function (req, res) {
  try {
    const document = await Document.findById(req.params.id);

    if (!document) {
      return res.status(404).json({
        message: "Document not found",
      });
    }

    await Document.findByIdAndDelete(req.params.id);

    return res.status(200).json({
      message: "successful",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something went wrong, please try again.",
    });
  }
};

export { create, getById, getAll, updateById, deleteById };
