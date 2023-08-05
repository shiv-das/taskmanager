import React, { useContext, useState, useEffect } from "react";
import { fetchTask, editTask } from "../../actions";

import api from "../../api";

import { AppContext } from "../../AppContext";

import RegistrationModal from "./RegistrationModal";

export default function EditTask(props) {
  const { state, dispatch } = React.useContext(AppContext);
  const [render, setRender] = React.useState(false);
  const [task, setTask] = useState({
    title: "",
    description: "",
    status: "",
    dateOfTask: "",
    creator: "",
  });

  console.log(props);

  React.useEffect(() => {
    console.log("YU", props.id);
    const fetching = async () => {
      dispatch(await fetchTask(props.id));
    };
    fetching();
  }, [props.id]);

  console.log(state.task, props.id);
  React.useEffect(() => {
    if (state.task && state.task._id) {
      setRender(true);
      setTask({
        title: state.task.title,
        description: state.task.description,
        status: state.task.status,
        dateOfTask: state.task.dateOfTask,
        creator: state.task.creator,
      });
    }
  }, [state.task]);
  const onSubmit = async (payload) => {
    dispatch(await editTask(payload, props.id));
    props.handleClose();
  };

  if (!render && !props.hidden) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <RegistrationModal
        handleClose={props.handleClose}
        hidden={props.hidden}
        onSubmit={onSubmit}
        data={task}
        modalHeader={"Update Task"}
        buttonName={"Update Task"}
      />
    </div>
  );
}
