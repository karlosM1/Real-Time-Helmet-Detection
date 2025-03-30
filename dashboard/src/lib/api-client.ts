import Axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import { toast } from "sonner";

export const apiClient = Axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

// Add a request interceptor to add the Authorization header with the API token
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    if (
      (error.response?.data as { message?: string })?.message ===
      "Jwt is missing"
    ) {
      toast.error(
        "Session expired. Please log in again. You will be redirected shortly",
        {
          duration: 3000,
          onAutoClose: () => {
            window.location.href = "/";
          },
        }
      );
    }
    throw error;
  }
);

// apiClient.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error: AxiosError) => {
//     let errorMessageKey = 'errors.genericError.body';
//     const actor = createActor(errorMachine);
//     actor.start();
//     if (error.response?.data) {
//       actor.send({
//         type: 'CHECK_RESPONSE',
//         response: error.response.data as Record<string, unknown>,
//       });
//       const message = actor.getSnapshot().context.error;

//       const processedErrorMessage =
//         message?.retailerMessage ?? message?.message;

//       if (message?.message) {
//         errorMessageKey = `\u3010${message?.errorCode}\u3011${processedErrorMessage}`;
//       }

//       actor.stop();
//       // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
//       return Promise.reject(
//         i18n.t([`stdError.${message?.errorCode}`, errorMessageKey])
//       );
//     }
//     const message =
//       (error?.response?.data as { message?: string })?.message ??
//       error?.message ??
//       'An error occurred.';

//     toast.error(message, {
//       onAutoClose: () => {
//         if (!getCookie('apiToken')) {
//           window.location.href = '/';
//         }
//       },
//     });

//     return Promise.reject(error);
//   }
// );
