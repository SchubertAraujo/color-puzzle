import { IPosAndColors } from './posAndColors.ts';

export interface IPositionProps {
  positionNumber: number;
  statePosAndColors: Array<IPosAndColors>;
  setStatePosAndColors: React.Dispatch<
    React.SetStateAction<Array<IPosAndColors>>
  >;
}
