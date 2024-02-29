import "./App.css";
import Profile from "./components/Profile.js";
import Welcome from "./components/Welcome.js";
import Hello from "./components/Hello.js";
import Greet from "./components/Greet.js";
function App() {
  return (
    <div className="App">
      <Profile />
      <Welcome />
      <Hello />
      <h1>############################</h1>
      <Greet name="Amod" alias="Batman">
        <p>random text Batman</p>
      </Greet>
      <Greet name="Shivaraj" alias="Superman">
        <h2>
          <p>random text Superman</p>
          <button>Click here</button>
        </h2>
      </Greet>
    </div>
  );
}

export default App;
