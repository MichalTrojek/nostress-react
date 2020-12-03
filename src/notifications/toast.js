import { toast } from 'react-toastify';

export const showSuccessToast = (text) => {
  toast.success(text, {
    position: toast.POSITION.TOP_CENTER,
  });
};

export const showWarningToast = (text) => {
  toast.warn(text, {
    position: toast.POSITION.TOP_CENTER,
  });
};

export const showInfoToast = (text) => {
  toast.info(text, {
    position: toast.POSITION.TOP_CENTER,
  });
};

export const showErrorToast = (text) => {
  toast.error(text, {
    position: toast.POSITION.TOP_CENTER,
  });
};
