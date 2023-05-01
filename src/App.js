import "./App.css";
import "./reset.css";
import todoimg from "./images/TODO.png";
import { useState } from "react";
import { createElement } from "react";

function App() {
  const [isCheked, setIsCheked] = useState(true);
  const setTheme = (theme) => (document.documentElement.className = theme);
  function changeTheme() {
    setIsCheked(!isCheked);
    if (isCheked) {
      console.log(isCheked);
      setTheme("light");
    } else {
      setTheme("dark");
      console.log(isCheked);
    }
  }

  function handleCheckbox() {
    console.log(isCheked);
  }
  return (
    <div className="main">
      <div className="header">
        <img src={todoimg} alt="Todo Logo" />
        <input type="checkbox" id="themeChanger" onChange={changeTheme} />
      </div>
      <form className="formDiv">
        <input
          type="checkbox"
          id="todoCheckbox"
          onClick={(handleCheckbox, createElement)}
        />
        <input
          type="text"
          placeholder="Create a new todo..."
          id="todoInput"
          required
        />
      </form>
    </div>
  );
}

export default App;
