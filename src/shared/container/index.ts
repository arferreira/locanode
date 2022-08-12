import { ICategoryRepository } from "../../../src/modules/cars/repositories/ICategoriesRepository";

import { container } from "tsyringe";

import { ISpecificationsRepository } from "../../../src/modules/cars/repositories/ISpecificationsRepository";
import { IUsersRepository } from "../../../src/modules/accounts/repositories/IUsersRepository";

import { CategoriesRepository } from "../../modules/cars/infra/typeorm/repositories/CategoriesRepository";
import { SpecificationRepository } from "../../modules/cars/infra/typeorm/repositories/SpecificationsRepository";
import { UsersRepository } from "../../modules/accounts/infra/typeorm/repositories/UsersRepository";

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


