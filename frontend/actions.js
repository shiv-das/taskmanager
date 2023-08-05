import axios from "./api";

export const auth = (user, flag) => {
  console.log(user);
  return {
    type: "isAuth",
    payload: {
      user,
      flag,
    },
  };
};

export const createTask = async (payload) => {
  console.log(localStorage.getItem("x-auth-token"));
  const response = await axios.post("/tasks", payload, {
    headers: {
      authorization: localStorage.getItem("x-auth-token"),
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
  return {
    type: "createTask",
    payload: response.data,
  };
};

export const editTask = async (payload, id) => {
  const response = await axios.post(`/tasks/edit/${id}`, payload, {
    headers: {
      authorization: localStorage.getItem("x-auth-token"),
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
  return {
    type: "editTask",
    payload: response.data,
  };
};

export const fetchTask = async (id) => {
  console.log("response");
  const response = await axios.get(`/tasks/${id}`);
  console.log(response.data);
  return {
    type: "fetchTask",
    payload: response.data,
  };
};

export const deleteTask = async (id) => {
  const response = await axios.delete(
    `/tasks/${id}`,
    {},
    {
      headers: {
        authorization: localStorage.getItem("x-auth-token"),
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
  return {
    type: "deleteTask",
    payload: id,
  };
};

export const fetchTasks = async (pageNum, itemsPerPage) => {
  console.log("Im here");
  const response = await axios.get("/tasks", {
    params: { pageNum, itemsPerPage },
  });
  return {
    type: "fetchTasks",
    payload: response.data,
  };
};

export const searchTasks = async (searchByName, filterByDateField) => {
  const response = await axios.get("/tasks/search", {
    params: { searchByName, filterByDateField },
  });
  return {
    type: "searchTasks",
    payload: response.data,
  };
};
