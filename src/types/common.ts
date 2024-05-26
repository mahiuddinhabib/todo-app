export interface IMeta {
  limit: number;
  page: number;
  total: number;
  totalPage: number;
}

export type ResponseSuccessType = {
  data: any;
  meta?: IMeta;
};

export type IGenericErrorResponse = {
  error: {
    statusCode: number;
    message: string;
    errorMessages: IGenericErrorMessage[];
  };
};

export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};

export interface ITask {
  id: string;
  title: string;
  description: string;
  status: string;
  dueDate?: string;
}