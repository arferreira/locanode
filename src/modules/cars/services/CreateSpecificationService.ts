import { SpecificationRepository } from "../repositories/SpecificationsRepository";

interface IRequest {
  name,
  description,
}

class CreateSpecificationService {

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


export { CreateSpecificationService }