import { inject, injectable } from "tsyringe";

import { Category } from "../../entities/Category";
import { ICategoryRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
  name,
  description,
}

@injectable()
class CreateCategoryUseCase {

  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoryRepository) { }

  async execute({ name, description }: IRequest): Promise<void> {

    const category = await this.categoriesRepository.findByName(name);
    if (!category) {
      await this.categoriesRepository.create({ name, description });
    }
    else {
      throw new Error("Category already exists!");
    }
  }

}

export { CreateCategoryUseCase };