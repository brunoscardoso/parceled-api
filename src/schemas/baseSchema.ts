export const toPaginationRequestSchema = (schema?: any) => {
  return {
    page: { type: 'integer', nullable: true },
    perPage: { type: 'integer', nullable: true },
    ...schema,
  };
};

export const toResponseSchema = (schema: any, pagination: boolean) => {
  let data: any = {
    type: 'object',
    properties: {
      records: {},
      pagination: {},
    },
  };
  if (pagination) {
    (data.properties.records = schema),
      (data.properties.pagination = {
        type: 'object',
        properties: {
          count: { type: 'integer' },
          pages: { type: 'integer' },
          page: { type: 'integer' },
          perPage: { type: 'integer' },
        },
      });
  } else {
    data = schema;
  }
  return {
    hasError: { type: 'boolean' },
    errorCode: { type: 'string' },
    errorMessage: { type: 'string' },
    data,
  };
};

export const authHeader = () => {
  return {
    type: 'object',
    properties: {
      authorization: { type: 'string' },
    },
    required: ['authorization'],
  };
};
