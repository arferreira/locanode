import { Router } from "express";

import { Category } from "../modules/cars/model/Category";
import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";

import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { listCategoryController } from "../modules/cars/useCases/listCategory";

const categoriesRoutes = Router();


const categoriesRepository = new CategoriesRepository();

// Endpoint to create categories
categoriesRoutes.post('/', (req, res) => {
  return createCategoryController.handle(req, res);
});


// Endpoint to list categories
categoriesRoutes.get('/', (req, res) => {
  return listCategoryController.handle(req, res);
});

export default categoriesRoutes;
