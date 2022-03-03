import React, { useState } from "react";
import { server } from "../../utils/server";
import PingForm from "./PingForm";
import "./PingForm.css";

const PingPong = ({ updateFlag }) => {
  const [pong, setPong] = useState({ pong: "" });

  const postReqPing = (ping) => {
    setPong({ pong: "Wait to Pong..." });
    server.post("/pingPong/ping", { ping }).then(
      (res) => {
        if (res) {
          setPong(res.data);
          if (res.data.flag) {
            updateFlag();
          }
        }
      },
      (error) => {
        console.log("ERR: " + error);
      }
    );
  };

  return (
    <div className="ping-conatainer">
      <PingForm onClickSubmit={postReqPing} />
      <textarea placeholder="Pong Response" disabled value={pong.pong} />
    </div>
  );
};

export default PingPong;
