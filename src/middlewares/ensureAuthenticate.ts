import { Response, Request, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../errors/AppError";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticate(request: Request, response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("Missing authorization header", 401);
  }
  const [, token] = authHeader.split(" ");
  try {
    const { sub: user_id } = verify(token, "9e3c5a40a0e1ceae3a76dc6d026a5fe2") as IPayload;
    const usersRepository = new UsersRepository();
    const user = await usersRepository.findById(user_id);
    if (!user) {
      throw new AppError("User not found", 401);
    }
    next();
  } catch (error) {
    throw new AppError("Access not authorizated", 401);

  }
}