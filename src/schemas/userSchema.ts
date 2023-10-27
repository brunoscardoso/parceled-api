import { toResponseSchema } from './baseSchema';

const tags = ['users'];

export const authSchema = {
  tags,
  body: {
    type: 'object',
    properties: {
      email: { type: 'string' },
      password: { type: 'string' },
    },
    required: ['email', 'password'],
  },
  response: {
    200: {
      type: 'object',
      properties: toResponseSchema(
        {
          type: 'object',
          properties: {
            token: { type: 'string' },
          },
        },
        false,
      ),
    },
  },
};

export const changePasswordSchema = {
  tags,
  body: {
    type: 'object',
    properties: {
      current_password: { type: 'string' },
      password: { type: 'string' },
    },
    required: ['current_password', 'password'],
  },
  response: {
    '2xx': {
      type: 'object',
      properties: toResponseSchema(
        {
          type: 'object',
          properties: {
            success: { type: 'boolean' },
          },
        },
        false,
      ),
    },    
  },
};