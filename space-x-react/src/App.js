import logo from './logo.svg';
import logoImg from './assets/logo.png';
import imgPlanet from './assets/planet.png';
import './App.css';

function App() {
  return (
    <div>
      <img src={logoImg} className="logo" alt="logo"/>
      <div className="header">
        <ul>
          <li className="header_item">
            Falcon 9
          </li>
          <li className="header_item">
            Falcon Heavy
          </li>
          <li className="header_item">
            Dragon
          </li>
          <li className="header_item">
            Updates
          </li>
        </ul>
        <ul>
          <li className="header_item_right">
            About
          </li>
          <li className="header_item_right">
            Gallery
          </li>
          <li className="header_item_right">
            Shop
          </li>
        </ul>
      </div>
      <h1 className="title">Falcon Heavy</h1>
      <p className="subtitle">The most powerful operational rocket</p>
      <p className="subtitle">in the world by a factor of two</p>
      <div className="img_planet" style={{backgroundImage:`url("${imgPlanet}")`, height:'1900px', width:'1400px', backgroundPosition:'50% 50%', position:'relative', top:'205px', right:'50%', left:'15%'}}></div>
    </div>
  );
}

export default App;
