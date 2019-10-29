// Here, we define the callbacks to the reducers
// (We just define arguments and return data. Actions won't handle state.)
import {
  TODO_ONCHANGE,
  TODO_ADD,
  TODO_DELETE,
} from '../constants/actionTypes';

export const onChangeTodo = (item) => ({ type: TODO_ONCHANGE, item });

export const addTodo = (item) => ({ type: TODO_ADD, item });

export const deleteTodo = (item) => ({ type: TODO_DELETE, item });