import React from "react";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import * as roomHandler from "../../realtimeCommunication/roomHandler"

const CreateRoomButton = ({isUserInRoom}) => {
  const createNewRoomHandler = () => {
    //create a room and send info to server
    roomHandler.createNewRoom();
  };

  return (
    <Button
      onClick={createNewRoomHandler}
      style={{
        width: "48px",
        height: "48px",
        borderRadius: "16px",
        margin: 0,
        padding: 0,
        minWidth: 0,
        marginTop: "10px",
        color: "white",
        backgroundColor: "#5865F2",
      }}
      disabled={isUserInRoom}
    >
      <AddIcon />
    </Button>
  );
};

export default CreateRoomButton;
