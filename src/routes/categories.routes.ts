import { Router } from "express";

import { Category } from "../model/Category";
import { CategoryRepository } from "../repositories/CategoryRepository";

const categoriesRoutes = Router();


const categoriesRepository = new CategoryRepository();

// Endpoint to create categories
categoriesRoutes.post('/', (req, res) => {
  const { name, description } = req.body;
  const categoryAlreadyExists = categoriesRepository.findByName(name);

  try {
    if (!categoryAlreadyExists) {
      categoriesRepository.create({ name, description });
      return res.status(201).send();
    }
    else {
      return res.status(500).json({ message: 'Category already exists' });
    }

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
