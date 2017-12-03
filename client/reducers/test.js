import { SHOW_MESSAGE, DELETE_MESSAGE } from '../actions/actionType';

export default function alert(state = '', action) {
  switch (action.type) {
    case SHOW_MESSAGE:
      return action.message;
    case DELETE_MESSAGE:
      return '';
    default:
      return state;
  }
}
