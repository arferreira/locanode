import { Router } from "express";


import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { listCategoryController } from "../modules/cars/useCases/listCategory";

const categoriesRoutes = Router();




// Endpoint to create categories
categoriesRoutes.post('/', (req, res) => {
  return createCategoryController.handle(req, res);
});


// Endpoint to list categories
categoriesRoutes.get('/', (req, res) => {
  return listCategoryController.handle(req, res);
});

export default categoriesRoutes;
