import logoImg from './assets/logo.png';
import imgPlanet from './assets/planet.png';
import imgRocket from './assets/rocket.png';
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
      <hr/>
      <div className="img_planet" style={{backgroundImage:`url("${imgPlanet}")`, height:'1900px', width:'1400px', backgroundPosition:'50% 50%', position:'relative', top:'310px', right:'50%', left:'15%'}}></div>
      <img src={imgRocket} alt="rocket" className="img_rocket"/>
      <div className="title__characteristics">
        <h2>Falcon Heavy</h2>
        <h2>Overview</h2>
        <p className="first_characteristic">HEIGHT</p>
        <p className="characteristic_data">70 m <span className="characteristic_data_colour">/ 229.6 ft</span></p>
        <p className="item_characteristic">DIAMETER</p>
        <p className="characteristic_data">12.2 m <span className="characteristic_data_colour">/ 39.9 ft</span></p>
        <p className="item_characteristic">MASS</p>
        <p className="characteristic_data">1,420,788 kg <span className="characteristic_data_colour">/ 3,125,735 lb</span></p>
        <p className="item_characteristic">PAYLOAD TO LEO</p>
        <p className="characteristic_data">63,800 kg <span className="characteristic_data_colour">/ 140,660 lb</span></p>
        <p className="item_characteristic">PAYLOAD TO GTO</p>
        <p className="characteristic_data">26,700 kg <span className="characteristic_data_colour">/ 58,860 lb</span></p>
        <p className="item_characteristic">PAYLOAD TO MARS</p>
        <p className="characteristic_data">16,800 kg <span className="characteristic_data_colour">/ 37,040 lb</span></p>
      </div>
      <h2 className="title_performance">UNMATCHED PERFORMANCE</h2>
      <span className="description_performance">
        With more than 5 million pounds of thrust at liftoff, 
        Falcon Heavy is the most capable rocket flying. By comparison, 
        the liftoff thrust of the Falcon Heavy equals approximately eighteen 747 aircraft at full power. 
        Falcon Heavy can lift the equivalent of a fully loaded 737 jetliner—complete with passengers, luggage and fuel—to orbit.
      </span>
      <img src={logoImg} className="logo_footer" alt="logo_footer"/>
      <div className="footer_socials">
        <a href="/">Twitter</a>
        <a href="/">Youtube</a>
        <a href="/">Instagram</a>
        <a href="/">Flicr</a>
        <a href="/">Linkedin</a>
        <a href="/">Privacy</a>
        <a href="/">Policy</a>
      </div>
      <p className="mail">For additional questions, contact rideshare@spacex.com</p>
      <div className="button_contact">
        <p className="content_button">Contact us</p>

      </div>
    </div>
  );
}

export default App;
