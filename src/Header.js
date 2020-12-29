import React, {Fragment} from 'react'; 
import './styles/style.css';
import logo from './img/logo.png'
const Header = () => (
   <div className='header'>
        <nav>
        <a href='#'><img src="https://cdn.icon-icons.com/icons2/412/PNG/128/Magnifier_41051.png" class="lupa"/></a>
           <ul class='nav_links'>
              <li><a href='#'>Categoría<img src="https://media.discordapp.net/attachments/705876284315533327/793148611310387261/unknown.png" class="triangulo"/></a></li>
              <li><a href='#'>Dearrolladora<img src="https://media.discordapp.net/attachments/705876284315533327/793148611310387261/unknown.png" class="triangulo"/></a></li>
              <li><a href='#'>Cracker<img src="https://media.discordapp.net/attachments/705876284315533327/793148611310387261/unknown.png" class="triangulo"/></a></li>
              </ul>
              <a href='#'><img class="imagen" src='https://cdn.discordapp.com/attachments/720651142136070154/792947068909256724/Sin_titulo-1.png'/></a>
              <ul>
              <li><a href='#'>Lanzamiento<img src="https://media.discordapp.net/attachments/705876284315533327/793148611310387261/unknown.png" class="triangulo"/></a></li>
              <li><a href='#'>About Us</a></li>
              <li><a href='#'>Help<img src="https://media.discordapp.net/attachments/705876284315533327/793152241606721546/unknown.png" class="help"/></a></li>
           </ul>
           <ul>
           <li><a href='#'><img src="https://cdn.discordapp.com/attachments/705876284315533327/793155157629337610/unknown.png" class="iniciar_sesion"/></a></li>
           </ul>
        </nav>
   </div>
)

export default Header;