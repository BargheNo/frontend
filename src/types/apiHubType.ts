export interface getParams {
  endPoint: string;
  headers?: any;
}

export interface postParams {
  endPoint: string;
  data: any;
  headers?: any;
}


interface LoginResponse {
  statusCode: number;
  message: string;
  data: {
    accessToken: string;
    refreshToken: string;
    firstName: string;
    lastName: string;
    permissions: null | any[];
  };
}

interface LoginFormValues {
  phoneNumber: string;
  password: string;
}