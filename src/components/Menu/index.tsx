import React from 'react';
import './style.css';

export function Menu(): React.JSX.Element {
  return (
    <div className="menu-top">
      <div className="logo">
        <p>PUZZLE GAME</p>
      </div>
      <nav>
        <ul className="menu-style">
          <li>Proposta</li>
          <li>Mecânica</li>
          <li>Jogo</li>
        </ul>
      </nav>
    </div>
  );
}
