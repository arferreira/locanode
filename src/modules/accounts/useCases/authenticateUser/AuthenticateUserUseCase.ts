import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { AppError } from "../../../../errors/AppError";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  }
  token: string;
}

@injectable()
export class AuthenticateUserUseCase {

  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) { }
  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);
    if (!user) {
      throw new AppError(`Email or password mismatch.`);
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError(`Email or password mismatch.`);
    }
    const token = sign({}, "9e3c5a40a0e1ceae3a76dc6d026a5fe2", {
      subject: user.id,
      expiresIn: "1d"
    });
    return {
      user: {
        name: user.name,
        email: user.email
      },
      token
    }
  }
}