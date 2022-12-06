import logo from './logo.svg';
import Header from './components/Header';
import Main from  './components/Main';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  return (
    <div>
      <Header name="Anna" color="puprle"/>
      <Main greet="What's up!"/>
      <Sidebar greet="Hey"/>
    </div>
  );
};

export default App;


