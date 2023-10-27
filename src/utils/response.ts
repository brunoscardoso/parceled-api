import { FastifyReply } from 'fastify';
import { RESPONSE } from 'types/utils/response';

export const response = (
  res: FastifyReply,
  {
    status = 200,
    errorCode = '',
    errorMessage = '',
    data,
  }: {
    status?: number;
    errorCode?: string;
    errorMessage?: string;
    data?: any;
  },
) => {
  const resData: RESPONSE<any> = {
    hasError: false,
    errorCode: '',
    errorMessage: '',
    data,
  };

  if (status >= 400 && status <= 599) {
    resData.hasError = true;
    resData.errorCode = errorCode;
    resData.errorMessage = errorMessage;
  }

  return res.status(status).send(resData);
};
