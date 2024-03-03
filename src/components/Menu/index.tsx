import React from 'react';
import './style.css';
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
          <li>PROPOSTA</li>
          <li>MECANICA</li>
          <li>JOGAR</li>
        </ul>
      </nav>
    </div>
  );
}
