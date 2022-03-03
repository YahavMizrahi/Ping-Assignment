import { useState } from "react";
import Header from "./components/Header/Header";
import PingPong from "./components/PingPong/PingPong";
import Statistics from "./components/Statistics/Statistics"

function App() {
  const [newPingFlag, setNewPinGFlag] = useState(false);

  const updateFlag = () => {
    setNewPinGFlag(!newPingFlag)
  }

  return (
    <div className="App">
      <Header />
      <PingPong updateFlag={updateFlag} />
      <Statistics flag={newPingFlag} />
    </div>
  );
}

export default App;
