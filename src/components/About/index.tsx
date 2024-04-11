import React from 'react';
import ReactPlayer from 'react-player';
import './style.css';

export function About(): React.JSX.Element {
  return (
    <div className="proposal">
      <div className="paragraphs">
        <h2>A Proposta</h2>
        <p>
          A proposta era criar um mini-puzzle do jogo
          <span> The Legend of Zelda™: Link’s Awakening </span>
          com React para reforçar e aprimorear os conhecimentos do mesmo.
        </p>
      </div>
      <ReactPlayer
        url="..\..\..\video\zeld.mp4"
        width="320px"
        height="240px"
        controls
      />
    </div>
  );
}
