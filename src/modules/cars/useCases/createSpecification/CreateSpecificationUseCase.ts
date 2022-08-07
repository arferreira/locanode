import { AppError } from "../../../../errors/AppError";
import { injectable, inject } from "tsyringe";
import { SpecificationRepository } from "../../repositories/implementations/SpecificationsRepository";

interface IRequest {
  name,
  description,
}

@injectable()
class CreateSpecificationUseCase {

  constructor(
    @inject("SpecificationRepository")
    private specificationsRepository: SpecificationRepository) { }

  async execute({ name, description }: IRequest): Promise<void> {
    const specificationAlreadyExists = await this.specificationsRepository.findByName(name);
    if (specificationAlreadyExists) {
      throw new AppError(`Specification ${name} already exists`, 400);
    } else {
      await this.specificationsRepository.create({ name, description });
    }
  }
}


export { CreateSpecificationUseCase }