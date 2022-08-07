import { inject, injectable } from "tsyringe";
import { hash } from "bcryptjs";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";



@injectable()
export class CreateUserUseCase {

  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository) {

  }

  async execute({ name, email, password, driver_licence }: ICreateUserDTO): Promise<void> {

    const userAlreadyExists = await this.usersRepository.findByEmail(email);
    if (userAlreadyExists) {
      throw new Error(`User ${name} already exists`);
    }
    const passwordHashed = await hash(password, 10);
    await this.usersRepository.create({
      name,
      email,
      password: passwordHashed,
      driver_licence
    });
  }

}