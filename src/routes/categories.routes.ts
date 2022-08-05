import { Router } from "express";

import { Category } from "../model/Category";
import { CategoryRepository } from "../repositories/CategoryRepository";

const categoriesRoutes = Router();


const categoriesRepository = new CategoryRepository();

// Endpoint to create categories
categoriesRoutes.post('/', (req, res) => {
  const { name, description } = req.body;

  try {
    categoriesRepository.create({ name, description });
    return res.status(201).send();
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default categoriesRoutes;
