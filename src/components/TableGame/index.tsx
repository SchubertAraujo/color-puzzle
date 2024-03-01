import React, { useEffect, useState } from 'react';
import './style.css';
import { PositionCircles } from '../PositionCircles/index.tsx';
import { fillPositionCircles } from '../../data/positionCircles.ts';
import { IPosAndColors } from '../../interfaces/posAndColors.ts';

export function TableGame(): React.JSX.Element {
  const [statePosAndColors, setStatePosAndColors] =
    useState<IPosAndColors[]>(fillPositionCircles);

  const renderTableGame = (): Array<React.JSX.Element> => {
    const elements: React.JSX.Element[] = [];
    for (let i: number = 0; i < 25; i += 1) {
      elements.push(
        <div key={i} className="backgroud-table">
          <PositionCircles
            positionNumber={i}
            statePosAndColors={statePosAndColors}
            setStatePosAndColors={setStatePosAndColors}
          />
        </div>,
      );
    }
    return elements;
  };

  useEffect(() => {
    renderTableGame();
  });

  return <div className="table-game">{renderTableGame()}</div>;
}
