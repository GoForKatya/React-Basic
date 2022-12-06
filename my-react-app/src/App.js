import logo from './logo.svg';
import Header from './components/Header';
import Main from  './components/Main';
import './App.css';
import './index.css';
import avatar from '/logo192.png';

function pic(props){
  const userPic = <img src={avatar}/>;
  return userPic;
}
function App() {
  return (
    <div>
      <Header name="Anna" color="puprle"/>
      <Main greet="What's up!"/>
    </div>
  );
};

export default App;


