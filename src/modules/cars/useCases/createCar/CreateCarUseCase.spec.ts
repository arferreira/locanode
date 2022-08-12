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
    await createCarUseCase.execute({
      name: "Jetta",
      description: "Sedan",
      daily_rate: 120,
      license_plate: "FIS7B61",
      fine_amount: 12,
      brand: "Volkswagen",
      category_id: "01823301283"
    });
  });
});