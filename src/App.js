import "./App.css";
import Profile from "./components/Profile.js";
import ParentComponent from './components/ParentComponent.js';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList.js';
import HookUseState from './components/HookUseState.js'

function App() {
  return (
    <div className="App">
      <Profile/>
      <ParentComponent/>
      <UserGreeting/>
      <NameList/>
      <HookUseState/>

    </div>
  );
}

export default App;
