import React, { useState } from "react";
import "./PingForm.css"

const PingForm = ({ onClickSubmit }) => {
  const [ping, setPing] = useState("");

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onClickSubmit(ping);
        }}
        onChange={(event) => {
          event.preventDefault();
          const url = (event.target.value.replace(/\s/g, ""));
          setPing(url);
        }}
      >
        <input
          className="ping-input"
          name="host"
          type="text"
          autoComplete="off"
          placeholder="Host Or IP"
        />
        <button className="button-40 " type="submit">
          Ping
        </button>
      </form>
    </div>
  );
};

export default PingForm;
