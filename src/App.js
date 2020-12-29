import React, {Fragment} from 'react'; 
import './styles/style.css';

const App = () => (

  <div className="main-banner img-container" id="main-banner">
    <div className="ed-grid lg-grid-6">
      <div className="lg-cols-4 lg-x-2">
        <img className="main-banner__img" src="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2018/08/fondos-pantalla-full-hd-animales_4.jpg"></img>
        <div className="main-banner__data s-center">
          <p className="t2 s-mb-0">Título del banner</p>
          <p> Subtítulo del banner</p>
          <a href="#" className="button">Botón del banner</a>
        </div>
      </div>
    </div>
  </div>    

)

export default App;
