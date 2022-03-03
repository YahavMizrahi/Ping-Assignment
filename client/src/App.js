import { useState } from "react";
import Header from "./components/Header/Header";
import PingPong from "./components/PingPong/PingPong";
import Statistics from "./components/Statistics/Statistics"

function App() {
  const [newPingFlag, setNewPinGFlag] = useState(false);

  console.log('aap',newPingFlag);
  const updateFlag = () => {
    console.log('up func');
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
