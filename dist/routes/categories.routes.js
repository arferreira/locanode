"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categoriesRoutes = (0, express_1.Router)();
const categories = [];
categoriesRoutes.post('/categories', (req, res) => {
    const { name, description } = req.body;
    categories.push({ name, description });
    return res.status(201).json({ categories });
});
exports.default = categoriesRoutes;
