import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import imgLogo from '../../imgs/extension.png';

export function Menu(): React.JSX.Element {
  return (
    <div className="menu-top">
      <div className="logo">
        <img src={imgLogo} alt="logotipo em formato de quebra-cabeça" />
        <p>PUZZLE GAME</p>
      </div>
      <nav>
        <ul className="menu-style">
          <Link to="/">
            <li>PROPOSTA</li>
          </Link>
          <li>MECANICA</li>
          <Link to="/Game">
            <li>JOGAR</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
