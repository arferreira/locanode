import { ICategoryRepository } from "../../../src/modules/cars/repositories/ICategoriesRepository";
import { CategoriesRepository } from "../../modules/cars/repositories/implementations/CategoriesRepository";
import { container } from "tsyringe";
import { SpecificationRepository } from "../../../src/modules/cars/repositories/implementations/SpecificationsRepository";
import { ISpecificationsRepository } from "../../../src/modules/cars/repositories/ISpecificationsRepository";
import { IUsersRepository } from "../../../src/modules/accounts/repositories/IUsersRepository";
import { UsersRepository } from "../../../src/modules/accounts/repositories/implementations/UsersRepository";

container.registerSingleton<ICategoryRepository>(
  "CategoriesRepository",
  CategoriesRepository
);


container.registerSingleton<ISpecificationsRepository>(
  "SpecificationRepository",
  SpecificationRepository
);


container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);


