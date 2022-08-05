import { Category } from "../model/Category";
import { ICategoryRepository } from "../repositories/ICategoriesRepository";

interface IRequest {
  name,
  description,
}


class CreateCategoryService {

  constructor(private categoriesRepository: ICategoryRepository) { }

  execute({ name, description }: IRequest): void {

    const categoryAlreadyExists = this.categoriesRepository.findByName(name);
    if (!categoryAlreadyExists) {
      this.categoriesRepository.create({ name, description });
    }
    else {
      throw new Error("Category already exists!");
    }
  }

}

export { CreateCategoryService };