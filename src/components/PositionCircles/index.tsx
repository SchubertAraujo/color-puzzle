/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import './style.css';
import { IPositionProps } from '../../interfaces/positionProps.ts';
import { positionsAndAdjacencies } from '../../data/positionsAndAdjacencies.ts';

export function PositionCircles({
  positionNumber,
  statePosAndColors,
  setStatePosAndColors,
}: IPositionProps): React.JSX.Element {
  const circlesPosition = statePosAndColors.find(
    (item) => item.position === positionNumber,
  );

  const handleChangeCollor = (indexElement: number): void => {
    const positionsUpdated = positionsAndAdjacencies.find(
      (item) => item.id === indexElement,
    )?.positions;

    if (positionsUpdated !== undefined) {
      setStatePosAndColors((prevState) =>
        prevState.map((item) => {
          if (positionsUpdated.includes(item.position)) {
            const newColor = item.color === 'blue' ? 'orange' : 'blue';
            const updatedItem = { ...item, color: newColor };
            return updatedItem;
          }

          return item;
        }),
      );
    }
  };

  if (circlesPosition) {
    return (
      <div
        className={
          circlesPosition.color === 'blue'
            ? 'blue-circle circles'
            : 'orange-circle circles'
        }
        style={{ cursor: 'pointer' }}
        onClick={() => handleChangeCollor(circlesPosition.position)}
      />
    );
  }

  return <div />;
}
