import { AppError } from "../../../../shared/errors/AppError";
import { InMemoryCarsRepository } from "../../repositories/in-memory/InMemoryCarsRepository";
import { CreateCarUseCase } from "./CreateCarUseCase";


let createCarUseCase: CreateCarUseCase;
let createCarRepository: InMemoryCarsRepository;

describe("Create Car", () => {

  beforeEach(() => {
    createCarRepository = new InMemoryCarsRepository();
    createCarUseCase = new CreateCarUseCase(createCarRepository);
  });

  it("should create a new car", async () => {
    const car = await createCarUseCase.execute({
      name: "Jetta",
      description: "Sedan",
      daily_rate: 120,
      license_plate: "FIS7B61",
      fine_amount: 12,
      brand: "Volkswagen",
      category_id: "01823301283"
    });
    expect(car).toHaveProperty("id");
  });

  it("should not be able to create a new car with same license_plate", async () => {
    expect(async () => {
      await createCarUseCase.execute({
        name: "Jetta",
        description: "Sedan",
        daily_rate: 120,
        license_plate: "FIS7B61",
        fine_amount: 12,
        brand: "Volkswagen",
        category_id: "01823301283"
      });

      await createCarUseCase.execute({
        name: "Jetta",
        description: "Sedan",
        daily_rate: 120,
        license_plate: "FIS7B61",
        fine_amount: 12,
        brand: "Volkswagen",
        category_id: "01823301283"
      });

    }).rejects.toBeInstanceOf(AppError);
  });


  it("should be able to create a car with available true", async () => {
    const car = await createCarUseCase.execute({
      name: "Jetta",
      description: "Sedan",
      daily_rate: 120,
      license_plate: "FIS7B6W1",
      fine_amount: 12,
      brand: "Volkswagen",
      category_id: "01823301283"
    });

    expect(car.available).toBe(true);
  });

});