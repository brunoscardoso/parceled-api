import { FastifyRequest } from 'fastify';

export interface ReqHeaders {
  authorization?: string;
}

export interface AuthorizationData {
  email: string;
  status: string;
  createdAt?: string;
}

export interface QueryRequest {
  state?: string;
}
export interface AuthRequest extends FastifyRequest<{ Querystring: QueryRequest | unknown }> {
  auth?: AuthorizationData;
}
