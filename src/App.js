import { useState } from "react";
import "./App.css";

function App() {
  const [isClicked, setisClicked] = useState(false);

  return (
    <div className="background">
      <button className="center">Press Me</button>
    </div>
  );
}

export default App;
