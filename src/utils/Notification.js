import { toast } from "react-toastify";

export const SuccessToast = (message) => {
  return toast.success(message, {
    position: toast.POSITION?.TOP_RIGHT,
    autoClose: 2000,
  });
};
export const ErrorToast = (message) => {
  return toast.error(message, {
    position: toast.POSITION?.TOP_RIGHT,
  });
};
