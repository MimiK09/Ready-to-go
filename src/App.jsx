import "./App.css";
import Curseur from "./assets/Components/Curseur";
import { useState } from "react";

function App() {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  const final = () => {
    if (switch1 && switch2 && switch3) {
      return "finalok";
    } else {
      return "finalno";
    }
  };


  return (
    <>
      <header>
        <div className="container">
          <img src="./src/assets/space-shuttle.png" alt="fusée" className="logo" />
          <h1>Ready To Go</h1>
        </div>
      </header>
      <main>
        <div className="container">
          <div className="curseurs">
            <Curseur switchState={switch1} setSwitchState={setSwitch1} />
            <Curseur switchState={switch2} setSwitchState={setSwitch2} />
            <Curseur switchState={switch3} setSwitchState={setSwitch3} />
          </div>
          <p className={final()}>No Way</p>
        </div>

        <div>
          <p
            onClick={() => {
              setSwitch1(false);
              setSwitch2(false);
              setSwitch3(false);
            }}
            className="reset"
          >
            Reset
          </p>
        </div>
      </main>
    </>
  );
}

export default App;
