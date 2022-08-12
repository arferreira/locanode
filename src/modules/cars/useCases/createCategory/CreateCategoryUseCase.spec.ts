import { AppError } from "../../../../shared/errors/AppError";
import { InMemoryCategoriesRepository } from "../../repositories/in-memory/InMemoryCategoriesRepository";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

let createCategory: CreateCategoryUseCase;
let categoriesRepositoryInMemory: InMemoryCategoriesRepository;

describe("Create Category", () => {

  beforeEach(() => {
    categoriesRepositoryInMemory = new InMemoryCategoriesRepository();
    createCategory = new CreateCategoryUseCase(categoriesRepositoryInMemory);
  });

  it("should be able to create a category", async () => {

    const category = {
      name: "Category Test",
      description: "Category Test Description",
    };

    await createCategory.execute({
      name: category.name,
      description: category.description,
    });
    const categoryCreated = await categoriesRepositoryInMemory.findByName(category.name);
    expect(categoryCreated).toHaveProperty("id");

  });

  it("should not be able to create a category with same name", async () => {

    expect(async () => {
      const category = {
        name: "Category Test",
        description: "Category Test Description",
      };

      await createCategory.execute({
        name: category.name,
        description: category.description,
      });

      await createCategory.execute({
        name: category.name,
        description: category.description,
      });
    }).rejects.toBeInstanceOf(AppError);




  });

});