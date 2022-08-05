import { SpecificationRepository } from "../../repositories/implementations/SpecificationsRepository";

interface IRequest {
  name,
  description,
}

class CreateSpecificationUseCase {

  constructor(private specificationsRepository: SpecificationRepository) { }

  execute({ name, description }: IRequest): void {
    const specificationAlreadyExists = this.specificationsRepository.findByName(name);
    if (specificationAlreadyExists) {
      throw new Error(`Specification ${name} already exists`);
    } else {
      this.specificationsRepository.create({ name, description });
    }

  }
}


export { CreateSpecificationUseCase }