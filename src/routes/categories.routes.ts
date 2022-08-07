import { Router } from "express";
import multer from "multer";
import importCategoryController from "../modules/cars/useCases/importCategory";

import { CreateCategoryController } from "../modules/cars/useCases/createCategory/CreateCategoryController";
import listCategoryController from "../modules/cars/useCases/listCategory";

const categoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

const createCategoryController = new CreateCategoryController();

// Endpoint to list categories
categoriesRoutes.get('/', (req, res) => {
  return listCategoryController().handle(req, res);
});

// Endpoint to create categories
categoriesRoutes.post('/', createCategoryController.handle);





// Endpoint to upload files
categoriesRoutes.post("/import", upload.single("file"), (req, res) => {
  return importCategoryController().handle(req, res);
});

export default categoriesRoutes;
