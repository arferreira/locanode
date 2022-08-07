import { Router } from "express";
import multer from "multer";
import { ImportCategoryController } from "../modules/cars/useCases/importCategory/ImportCategoryController";

import { CreateCategoryController } from "../modules/cars/useCases/createCategory/CreateCategoryController";
import { ListCategoryController } from "../modules/cars/useCases/listCategory/ListCategoryController";

const categoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoryController = new ListCategoryController();

// Endpoint to list categories
categoriesRoutes.get('/', listCategoryController.handle);

// Endpoint to create categories
categoriesRoutes.post('/', createCategoryController.handle);





// Endpoint to upload files
categoriesRoutes.post("/import", upload.single("file"), importCategoryController.handle);

export default categoriesRoutes;
