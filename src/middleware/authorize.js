import { Document } from "../models/index.js";

export const authorize = async (req, res, next) => {
  try {
    if (req.user.role === "Admin") {
      return next();
    }

    const { id } = req.params;

    if (!id) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    const document = await Document.findById(id);

    if (document.ownerId !== req.user.id) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    return next();
  } catch (err) {
    console.log(error);
    return res.status(500).json({
      message: "Something went wrong, please try again.",
    });
  }
};
