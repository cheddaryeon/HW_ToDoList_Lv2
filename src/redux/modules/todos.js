import uuid from "react-uuid";

const ADD_TODO = "ADD_TODO";
const COMPLETE_STATE_TODO = "COMPLETE_STATE_TODO";
const DELETE_TODO = "DELETE_TODO";

const initialState = [
  {
    id: uuid(),
    title: "산책",
    contents: "강아지 산책 시키기",
    isDone: false,
  },
  {
    id: uuid(),
    title: "리액트",
    contents: "리액트 공부하기",
    isDone: true,
  },
  {
    id: uuid(),
    title: "자바스크립트",
    contents: "자바스크립트 공부하기",
    isDone: false,
  },
];

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const completeStateToto = (payload) => {
  return {
    type: COMPLETE_STATE_TODO,
    payload: payload,
  };
};

export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];

    case COMPLETE_STATE_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            isDone: !todo.isDone,
          };
        } else {
          return todo;
        }
      });

    case DELETE_TODO:
      return state.filter((todo) => {
        return todo.id !== action.payload.id;
      });

    default:
      return state;
  }
};

export default todos;
