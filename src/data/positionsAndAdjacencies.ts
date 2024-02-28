import { IPosAndAdj } from '../interfaces/posAndAdj.ts';

const createPosAndAdj = (id: number, positions: number[]): IPosAndAdj => {
  return { id, positions };
};

export const positionsAndAdjacencies: Array<IPosAndAdj> = [
  createPosAndAdj(0, [0, 2, 10]),
  createPosAndAdj(2, [0, 2, 4, 12]),
  createPosAndAdj(4, [2, 4, 14]),
  createPosAndAdj(10, [0, 10, 12, 20]),
  createPosAndAdj(12, [2, 10, 12, 14, 22]),
  createPosAndAdj(14, [4, 12, 14, 24]),
  createPosAndAdj(20, [10, 20, 22]),
  createPosAndAdj(22, [12, 20, 22, 24]),
  createPosAndAdj(24, [14, 22, 24]),
];
