//import logo from './logo.svg';
import './App.css';
import Profile from './component.js/Profile';
import FullName from './component.js/FullName';
import Address from './component.js/Address';
function App() {
  return (
    <div className="App">
      <Profile/>
      <FullName/>
      <Address/>
    </div>
  );
}

export default App;
