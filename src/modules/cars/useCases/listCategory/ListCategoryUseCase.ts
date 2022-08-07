import { injectable, inject } from "tsyringe";
import { Category } from "../../entities/Category";
import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";

@injectable()
class ListCategoryUseCase {

  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: CategoriesRepository) { }
  async execute(): Promise<Category[]> {
    return await this.categoriesRepository.list();
  }

}

export { ListCategoryUseCase }