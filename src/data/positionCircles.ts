import { IPosAndColors } from '../interfaces/posAndColors.ts';

function createPosAndColor(position: number, color: string): IPosAndColors {
  return { position, color };
}

export const fillPositionCircles = (): Array<IPosAndColors> => {
  const element: Array<IPosAndColors> = [];

  const intervals: number[][] = [
    [0, 4],
    [10, 14],
    [20, 24],
  ];

  const orangePositions: number[] = [2, 10, 14, 22];

  intervals.forEach((interval) => {
    for (let i = interval[0]; i <= interval[1]; i += 2) {
      const color = orangePositions.includes(i) ? 'orange' : 'blue';
      element.push(createPosAndColor(i, color));
    }
  });

  return element;
};
