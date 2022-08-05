"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const categories_routes_1 = __importDefault(require("./routes/categories.routes"));
const app = (0, express_1.default)();
app.use(categories_routes_1.default);
app.get('/', (req, res) => {
    return res.json({ message: 'Running' });
});
app.listen(3333, () => console.info('API listening on port ' + 3333));
