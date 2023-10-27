namespace response {
  export interface REQUEST_PAGINATION {
    page?: number;
    perPage?: number;
  }
  export interface PAGINATION_DATA {
    count: number;
    pages: number;
    page: number;
    perPage: number;
  }

  export interface PAGINATION<T> {
    pagination: PAGINATION_DATA;
    records?: T[];
  }

  export interface RESPONSE<T> {
    hasError: boolean;
    errorCode: string;
    errorMessage: string;
    data?: T | PAGINATION<T>;
  }

  export type JOIN =
    | 'join'
    | 'innerJoin'
    | 'leftJoin'
    | 'leftOuterJoin'
    | 'rightJoin'
    | 'rightOuterJoin'
    | 'outerJoin'
    | 'fullOuterJoin';
}

export = response;
