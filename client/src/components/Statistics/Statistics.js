import React, { useEffect, useState } from "react";
import { server } from "../../utils/server";
import "./Statistics.css"
const Statistics = ({flag}) => {
  const [pingsCounter, setPingCounter] = useState([]);
  const [, setFlag] = useState(false);


  const getReqPing = () => {
    server.get("/pingPong/pong").then(
      (res) => {
        if (res) {
          setPingCounter(res.data.topFive);
        }
      },
      (error) => {
        console.log("ERR: " + error);
      }
    );
  };

  useEffect(() => {
    getReqPing();
    setFlag(flag)
  }, [flag]);

  return (
    <div className="statistics-container">
      Statistics:
      <table>
        <thead>
          <tr>
            <th>Host</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {pingsCounter.map((c) => (
            <tr>
              <td>{c.host}</td>
              <td>{c.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Statistics;
