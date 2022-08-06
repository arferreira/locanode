import { InMemoryCategoriesRepository } from "../../repositories/in-memory/InMemoryCategoriesRepository";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

let createCategory: CreateCategoryUseCase;
let categoriesRepositoryInMemory: InMemoryCategoriesRepository;

describe("Create Category", () => {

  beforeAll(() => {
    categoriesRepositoryInMemory = new InMemoryCategoriesRepository();
    createCategory = new CreateCategoryUseCase(categoriesRepositoryInMemory);
  });

  it("should be able to create a category", () => {
    const category = {
      name: "Test Category",
      description: "Description Test"
    }
    createCategory.execute({ name: category.name, description: category.description });
    const categoryCreated = categoriesRepositoryInMemory.findByName(category.name);
    expect(categoryCreated).toHaveProperty("id");
  });

  it("should not be able to create a category with same name", () => {
    expect(() => {
      const category = {
        name: "Test Category",
        description: "Description Test"
      }
      createCategory.execute({ name: category.name, description: category.description });
      createCategory.execute({ name: category.name, description: category.description });
    }).toThrow(Error);

  });

});