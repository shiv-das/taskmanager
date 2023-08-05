import React, { useContext, useState, useEffect } from "react";
import {  createTask } from "../../actions";

import api from "../../api";

import { AppContext } from "../../AppContext";

import RegistrationModal from "./RegistrationModal";

export default function CreateTask(props) {
  const { state, dispatch } = React.useContext(AppContext);

  console.log(props);

  const onSubmit = async (payload) => {
    dispatch(await createTask(payload));
    props.handleClose();
  };

  return (
    <div>
      <RegistrationModal
        handleClose={props.handleClose}
        hidden={props.hidden}
        onSubmit={onSubmit}
        modalHeader={"Create New Task"}
        buttonName={"Create Task"}
        data={{
          title: "",
          description: "",
          status: "",
          dateOfTask: "",
          creator: "",
        }}
      />
    </div>
  );
}
