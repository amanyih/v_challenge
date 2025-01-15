import { body } from "express-validator";

const createDocumentValidator = [
  body("title")
    .notEmpty()
    .withMessage("title must not be empty")
    .isLength({ max: 255 })
    .withMessage("title must not exceed 255 characters"),
  body("content").notEmpty().withMessage("content must not be empty"),
  body("ownerId").notEmpty(),
];

const updatedDocumentValidator = [
  body("title")
    .optional()
    .notEmpty()
    .withMessage("title must not be empty")
    .isLength({ max: 255 })
    .withMessage("title must not exceed 255 characters"),
  body("content")
    .optional()
    .notEmpty()
    .withMessage("content must not be empty"),
];

export { createDocumentValidator, updatedDocumentValidator };
