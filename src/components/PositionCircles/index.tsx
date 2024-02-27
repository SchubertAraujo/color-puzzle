/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import './style.css';

interface IPositionProps {
  positionNumber: number;
}

interface IPosAndColors {
  position: number;
  color: string;
}

interface IPosAndAdj {
  id: number;
  positions: number[];
}
export function PositionCircles({
  positionNumber,
}: IPositionProps): React.JSX.Element {
  const fillPosAndColors = (): Array<IPosAndColors> => {
    const element: Array<IPosAndColors> = [];

    for (let i: number = 0; i <= 4; i += 2) {
      element.push({ position: i, color: 'blue' });
    }
    for (let i: number = 10; i <= 14; i += 2) {
      element.push({ position: i, color: 'blue' });
    }
    for (let i: number = 20; i <= 24; i += 2) {
      element.push({ position: i, color: 'blue' });
    }
    return element;
  };

  const [statePosAndColors, setStatePosAndColors] =
    useState<IPosAndColors[]>(fillPosAndColors);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const positionsAndAdjacencies: Array<IPosAndAdj> = [
    {
      id: 0,
      positions: [0, 2, 10],
    },
  ];

  const specificObject = statePosAndColors.find(
    (item) => item.position === positionNumber,
  );

  const handleChangeCollor = (indexElement: number, color: string): void => {
    const fetchPositions: number[] | undefined = positionsAndAdjacencies.find(
      (item) => item.id === indexElement,
    )?.positions;

    if (fetchPositions !== undefined) {
      setStatePosAndColors((prevState) =>
        prevState.map((item) => {
          if (fetchPositions.includes(item.position)) {
            return { ...item, color };
          }

          return item;
        }),
      );
    }

    // if (fecthPositions !== undefined) {
    //   for (let i = 0; i < fecthPositions.length; i += 1) {
    //     const position = fecthPositions[i];
    //     const currentStateColor: string | undefined = statePosAndColors.find(
    //       (item) => item.position === position,
    //     )?.color;
    //     if (currentStateColor === 'blue') changeCollor(position, 'orange');
    //     else if (currentStateColor === 'orange') changeCollor(position, 'blue');
    //   }
    // }
  };

  return specificObject !== undefined && specificObject.color === 'blue' ? (
    <div
      className="blue-circle circles"
      style={{ cursor: 'pointer' }}
      onClick={() => handleChangeCollor(positionNumber, 'orange')}
    />
  ) : specificObject !== undefined && specificObject.color === 'orange' ? (
    <div
      className="orange-circle circles"
      style={{ cursor: 'pointer' }}
      onClick={() => handleChangeCollor(positionNumber, 'blue')}
    />
  ) : (
    <div />
  );
}
