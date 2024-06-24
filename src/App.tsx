import "./Assets/global.css";
import Calendar from "./Components/Calendar/Calendar";
import Logo from "./Components/UI/Logo/Logo";

function App() {
  return (
    <div className="App">
      <Logo />
      <div className="Container">
        <Calendar />
      </div>
    </div>
  );
}

export default App;
