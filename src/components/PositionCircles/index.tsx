import React, { useState } from 'react';

interface PositionProps {
  positionNumber: number;
}

interface PosAndColors {
  position: number;
  color: string;
}
export function PositionCircles({
  positionNumber,
}: PositionProps): React.JSX.Element {
  const [statePosAndColors, setStatePosAndColors] = useState<PosAndColors[]>([
    {
      position: 0,
      color: 'blue',
    },
    {
      position: 2,
      color: 'blue',
    },
  ]);

  return statePosAndColors[positionNumber] ? (
    <div className="green-circle" onClick={} />
  ) : (
    <div />
  );
}
