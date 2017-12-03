import { SHOW_MESSAGE, DELETE_MESSAGE } from './actionType';

export function addMessage(message) {
  return {
    type: SHOW_MESSAGE,
    message
  };
}

export function deleteMessage() {
  return {
    type: DELETE_MESSAGE
  };
}
