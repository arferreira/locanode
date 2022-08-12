import { injectable, inject } from "tsyringe";
import { Category } from "../../infra/typeorm/entities/Category";
import { CategoriesRepository } from "../../infra/typeorm/repositories/CategoriesRepository";



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