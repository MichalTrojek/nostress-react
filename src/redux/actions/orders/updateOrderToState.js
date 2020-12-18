import { ADD_TO_ORDER } from '../types';

function updateOrderToState(order) {
  return async (dispatch, getState) => {
    if (!order.isOrdered || order.amount === 0) {
      dispatch({
        type: ADD_TO_ORDER,
        payload: deleteFromItems(order, getState),
      });
    } else {
      dispatch({
        type: ADD_TO_ORDER,
        payload: addToItems(order, getState),
      });
    }
  };
}

function deleteFromItems(order, getState) {
  return getState().order.items.filter((item) => item.name !== order.name);
}

function addToItems(order, getState) {
  const newItems = getState().order.items.filter(
    (item) => item.name !== order.name
  );
  newItems.push(order);
  return newItems;
}

export default updateOrderToState;
