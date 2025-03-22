import axios from "axios";



// export const baseURL = "https://bombfundingbackend.liara.run";
// export const baseURL = "http://104.168.46.4:8000";
export const baseURL = "http://185.110.189.68:8080";

const apiClient = axios.create({
  baseURL: baseURL,
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
    // Authorization:""
  },
});

// Optional: Add interceptors to handle requests/responses globally
// This is useful for logging, error handling, or adding authorization tokens dynamically

// Request Interceptor
apiClient.interceptors.request.use(
  (config) => {
    // Modify the config before the request is sent, e.g., attach token
    //  const token = localStorage.getItem('token');
    // const token =
    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMyMzY3NDc1LCJpYXQiOjE3MzIzNjM4NzUsImp0aSI6IjI2NjU0YzMzMzIwMzQyYjhiOTVlZDhiNjkxZDBhOTg5IiwidXNlcl9pZCI6M30.53XrPqzf9jmSdZBnZwZP8_Ggk8GfN4HbSgPYe4-Hux4";
    // if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    // Handle errors in the request
    return Promise.reject(error);
  }
);

// Response Interceptor
apiClient.interceptors.response.use(
  (response) => {
    // Any response status code 2xx is handled here
    return response;
  },
  (error) => {
    // Handle response errors globally
    if (error.response) {
      // Server responded with a status other than 2xx
      console.error("API Error:", error.response.status, error.response.data);
    } else if (error.request) {
      // No response was received
      console.error("No response received:", error.request);
    } else {
      // Something happened in setting up the request
      console.error("Error setting up request:", error.message);
    }
    return Promise.reject(error);
  }
);

export const getData = async ({ endPoint, headers }: getParams) => {
  try {
    const response = await apiClient.get(endPoint, headers);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// export const getDataParams = async (endPoint, headers, params) => {
//   await RefreshToken();
//   try {
//     const response = await apiClient.get(endPoint, {
//       headers,
//       params: { ...params },
//     });
//     return response.data;
//   } catch (error) {
//     throw new Error(error);
//   }
// };

export const postData = async ({ endPoint, data, headers }: postParams) => {
  try {
    const response = await apiClient.post(endPoint, data, headers);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const patchData = async ({ endPoint, data, headers }: postParams) => {
  //   await RefreshToken();
  try {
    const response = await apiClient.patch(endPoint, data, headers);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const putData = async ({ endPoint, data, headers }: postParams) => {
  //   await RefreshToken();
  try {
    const response = await apiClient.put(endPoint, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const deleteData = async ({ endPoint, headers }: getParams) => {
  //   await RefreshToken();
  try {
    const response = await apiClient.delete(endPoint, headers);
    return response.data;
  } catch (error) {
    throw error;
  }
};






export const handleLogin = async (phoneNumber: string, password: string) => {
  try {
    const response = await axios.post(`${baseURL}/v1/auth/login`, {
      phone: phoneNumber,
      password: password,
    }, {
      headers: {
        "Content-Type": "application/json",
      }
    });

    if (response.status === 200) {
      return {
        success: true,
        data: response.data,
      };
    }

    return {
      success: false,
      message: response.data?.message || "An unknown error occurred",
    };
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return {
        success: false,
        message: error.response?.data?.message || "Network error",
      };
    }

    return {
      success: false,
      message: "An unexpected error occurred",
    };
  }
};

