
// Tools
import gen, { requestActions } from '../calls';

export const ROOMDATA_GET = requestActions('ROOMDATA_GET');
const SET_TODO = gen("SET_TODO")

// Default state
const defaultState = {

  todoData: {

    both: {
      name: "Both",
      todos: [
        { title: "both's first todo", complete: false },
        { title: "both's second todo", complete: false }
      ]
    },

    denise: {
      name: "Denise",
      todos: [
        { title: "denise's first todo", complete: false }
      ]
    },

    devin: {
      name: "Devin",
      todos: [
        { title: "devin's first todo", complete: false }
      ]
    }
  }
};

// Reducer
export default function reducer(state = defaultState, payload) {
  switch (payload.type) {
    case SET_TODO:
      const { key, title, value } = payload;
      const update = {title:title, complete:value === false ? true : false}
      console.log(update);
      const todos = state.todoData[key].todos
      todos.filter(todo => todo === update)
      console.log(todos)
      const latestProg = [...state.todoData[key].todos, value]
      console.log(latestProg)
      return {
        ...state,
        todoData: {
          ...state.todoData,
          [key]: {
            ...state.todoData[key],
            todos: latestProg
          }
        }
      }

    default:
      return state;
  }
}

// Actions
export function roomDataGet() {
  return {
    type: ROOMDATA_GET.MAIN
  };
}

export function handleComplete(key, title, value) {
  return {
    type: SET_TODO,
    key,
    title,
    value
  };
}