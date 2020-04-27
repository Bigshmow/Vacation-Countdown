
// Tools
import gen, { requestActions } from '../calls';

export const ROOMDATA_GET = requestActions('ROOMDATA_GET');
const SET_TODO_COMPLETE = gen("SET_TODO_COMPLETE")

// Default state
const defaultState = {

    todoData : {
    
        both: {
            name: "Both",
            todos: [
                {title: "both's first todo", complete: false}
            ]
        },
    
        denise: {
            name: "Denise",
            todos: [
                {title: "denise's first todo", complete: false}
            ]
        },
    
        devin: {
            name: "Devin",
            todos: [
                {title: "devin's first todo", complete: false}
            ]
        }
    }
};

// Reducer
export default function reducer(state = defaultState, payload) {
  switch (payload.type) {
    case ROOMDATA_GET.START:
      return { ...state, isLoadingRoomData: true, errorRoomData: null };
    case ROOMDATA_GET.SUCCESS:
      return { ...state, isLoadingRoomData: false, roomData: payload.data };
    case ROOMDATA_GET.FAILURE:
      return { ...state, isLoadingRoomData: false, errorRoomData: payload.error };
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

export function handleComplete(todo) {
    return {
      type: SET_TODO_COMPLETE,
      todo
    };
  }