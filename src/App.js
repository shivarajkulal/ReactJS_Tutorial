import "./App.css";
import Profile from "./components/Profile.js";
import ParentComponent from './components/ParentComponent.js';
function App() {
  return (
    <div className="App">
      <Profile/>
      <ParentComponent/>
    </div>
  );
}

export default App;
