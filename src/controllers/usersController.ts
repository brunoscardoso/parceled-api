import { FastifyReply } from 'fastify';

import { response } from 'utils/response';
import { AuthRequest } from 'types/controllers/auth';

export default class UsersController {
  create = async (req: AuthRequest, res: FastifyReply) => {    
    try {     
      return response(res, {
        status: 401,
        errorCode: 'AUT-LO02',
        errorMessage: 'Email or password incorrect',
      });
    } catch (error) {
      console.log('AUTH_LOGIN ', error);
      return response(res, {
        status: 401,
        errorCode: 'AUT-LO01',
        errorMessage: 'unexpected error to do login',
      });
    }
  }

  listMe = async (req: AuthRequest, res: FastifyReply) => {
    try {
      return response(res, {
        status: 400,
        errorCode: 'AUT-CP02',
        errorMessage: 'Something went wrong. Try again.',
      });
    } catch (e) {
      console.log('CHANGE_PASSWORD', e);

      return response(res, {
        status: 500,
        errorCode: 'AUT-CP01',
        errorMessage: 'Unexpected error to change password.',
      });
    }
  };
}