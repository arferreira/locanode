import { Router } from "express";

import { Category } from "../modules/cars/model/Category";
import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";

import { createCategoryController } from "../modules/cars/useCases/createCategory";

const categoriesRoutes = Router();


const categoriesRepository = new CategoriesRepository();

// Endpoint to create categories
categoriesRoutes.post('/', (req, res) => {
  return createCategoryController.handle(req, res);
});


// Endpoint to list categories
categoriesRoutes.get('/', (req, res) => {
  try {
    const categories = categoriesRepository.list();
    return res.status(200).json({ categories });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default categoriesRoutes;
