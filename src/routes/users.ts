import { FastifyInstance } from 'fastify';

import { changePasswordSchema } from 'schemas/userSchema';

import AuthController from 'controllers/authController';
import UsersController from 'controllers/usersController';

const authController = new AuthController();
const usersController = new UsersController();

export default async (app: FastifyInstance) => {  
  app.post('/change-password', { schema: changePasswordSchema }, authController.changePassword);
  app.post('/create', { schema: {} }, usersController.create);
};
