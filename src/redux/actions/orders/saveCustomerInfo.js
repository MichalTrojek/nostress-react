import { SAVE_CUSTOMER_INFO } from '../types';

function saveCustomerInfo(customer) {
  return {
    type: SAVE_CUSTOMER_INFO,
    payload: customer,
  };
}

export default saveCustomerInfo;
