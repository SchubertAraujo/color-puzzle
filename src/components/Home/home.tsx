import React, { useEffect } from 'react';
import './style.css';
import { PositionCircles } from '../PositionCircles/index.tsx';

export function Home(): React.JSX.Element {
  const renderTableGame = (): Array<React.JSX.Element> => {
    const elements: React.JSX.Element[] = [];
    for (let i: number = 0; i < 25; i += 1) {
      elements.push(
        <div key={i} className="backgroud-table">
          <PositionCircles positionNumber={i} />
        </div>,
      );
    }
    return elements;
  };

  useEffect(() => {
    renderTableGame();
  }, []);

  return <div className="table-game">{renderTableGame()}</div>;
}
