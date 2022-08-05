import { Router } from "express";

import { Category } from "../modules/cars/model/Category";
import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
import { CreateCategoryService } from "../modules/cars/services/CreateCategoryService";

const categoriesRoutes = Router();


const categoriesRepository = new CategoriesRepository();

// Endpoint to create categories
categoriesRoutes.post('/', (req, res) => {
  const { name, description } = req.body;
  const createCategoryService = new CreateCategoryService(categoriesRepository);

  try {
    createCategoryService.execute({ name, description });
    return res.status(201).send();
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
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
