import { Category } from "../../model/Category";
import { ICategoryRepository, ICreateCategoryDTO } from "../ICategoriesRepository";



class InMemoryCategoriesRepository implements ICategoryRepository {

  categories: Category[] = [];

  findByName(name: string): Category {
    const categories = this.categories.find(c => c.name === name);
    return categories;
  }
  list(): Category[] {
    return this.categories;
  }
  create({ name, description }: ICreateCategoryDTO): void {
    const category = new Category();
    Object.assign(category, { name, description });
    this.categories.push(category);
  }

}


export { InMemoryCategoriesRepository }