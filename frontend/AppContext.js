import React, { createContext, useReducer } from "react";
import _ from "lodash";

const AppContext = createContext({});

const initialState = {
  tasks: {},
  task: {},
  auth: {
    isSignedIn: false,
    user: null,
  },
};

const reducer = (state, action) => {
  console.log(action.type);
  switch (action.type) {
    case "isAuth":
      return {
        ...state,
        auth: { isSignedIn: action.payload.flag, user: action.payload.user },
      };
    case "createTask":
      console.log(action.payload);
      return {
        ...state,
        tasks: { [action.payload._id]: action.payload, ...state.tasks },
      };
    case "editTask":
      console.log("abcd", action.payload);
      return {
        ...state,
        tasks: { ...state.tasks, [action.payload._id]: action.payload },
      };

    case "deleteTask":
      return {
        ...state,
        tasks: _.omit(state.tasks, action.payload),
      };
    case "fetchTasks":
      return { ...state, tasks: _.mapKeys(action.payload, "_id") };

    case "fetchTask":
      console.log(action.payload);
      return { ...state, task: action.payload };

    case "searchTasks":
      return { ...state, tasks: _.mapKeys(action.payload, "_id") };
    default:
      return { ...state };
  }
};

const AppContextProvider = (props) => {
  const appState = { ...initialState };

  const [state, dispatch] = useReducer(reducer, appState);

  let value = { state, dispatch };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
