import express from "express";
import {
  create,
  getById,
  getAll,
  updateById,
  deleteById,
} from "../controllers/document.controller.js";
import {
  createDocumentValidator,
  updatedDocumentValidator,
} from "../validators/document.validators.js";
import { validateRequest } from "../middleware/validateRequest.js";
import { authorize } from "../middleware/authorize.js";

const router = express.Router();

router
  .route("/")
  .post(createDocumentValidator, validateRequest, create)
  .get(authorize, getAll);

router
  .route("/:id")
  .get(authorize, getById)
  .patch(authorize, updatedDocumentValidator, validateRequest, updateById)
  .delete(authorize, deleteById);

export default router;
