import { SpecificationRepository } from "../../infra/typeorm/repositories/SpecificationsRepository";

import { injectable, inject } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";

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