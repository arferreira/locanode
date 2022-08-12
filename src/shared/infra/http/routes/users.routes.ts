import { Router } from "express";
import multer from "multer";
import { UpdateUserAvatarController } from "../../../../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController";
import { CreateUserController } from "../../../../modules/accounts/useCases/createUser/CreateUserController";

import uploadConfig from "../../../../config/upload";

const usersRoutes = Router();



const createUsersController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();



usersRoutes.post('/', createUsersController.handle);


const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));

usersRoutes.patch('/avatar',
  uploadAvatar.single("avatar"),
  updateUserAvatarController.handle);

export { usersRoutes };