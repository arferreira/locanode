
import { AppError } from "../../../../shared/errors/AppError";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { InMemoryUsersRepository } from "../../repositories/in-memory/InMemoryUsersRepository";
import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";


let inMemoryUsersRepository: InMemoryUsersRepository;
let authenticateUserUseCase: AuthenticateUserUseCase;
let createUserUseCase: CreateUserUseCase;

describe("Authenticate User", () => {


  beforeEach(() => {
    inMemoryUsersRepository = new InMemoryUsersRepository();
    authenticateUserUseCase = new AuthenticateUserUseCase(inMemoryUsersRepository);
    createUserUseCase = new CreateUserUseCase(inMemoryUsersRepository);
  });


  it("should be able to authenticate a user", async () => {
    const user: ICreateUserDTO = {
      driver_licence: "02938402",
      email: "user@test.com",
      password: "12345",
      name: "User Test",
    };

    await createUserUseCase.execute(user);
    const result = await authenticateUserUseCase.execute({
      email: user.email,
      password: user.password,
    });

    expect(result).toHaveProperty("token");

  });


  it("should not be able authenticate with non-existing user", () => {
    expect(async () => {
      await authenticateUserUseCase.execute({
        email: "fake@email.com",
        password: "fake@password.com",
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able authenticate with incorrect password", () => {
    expect(async () => {
      const user: ICreateUserDTO = {
        driver_licence: "92834923",
        email: "fake@email.com",
        password: "fake@password.com",
        name: "Fake User",
      };
      await createUserUseCase.execute(user);
      const result = await authenticateUserUseCase.execute({
        email: user.email,
        password: "123445",
      });
    }).rejects.toBeInstanceOf(AppError);
  });



});