/** Full Game State at a particular turn. */

export interface GameState {
  turnNumber: number;
  currentPlayer: string;

  players: {[id: string]: PlayerState}

  // Bank of pieces out of play
  bank: {
    green1: number,
    green2: number,
    green3: number,
    blue1: number,
    blue2: number,
    blue3: number,
    yellow1: number,
    yellow2: number,
    yellow3: number,
    red1: number,
    red2: number,
    red3: number,
  }

  starField: {[id: string]: StarSystemState};
}

export interface PlayerState {
  id: string;
  name: string;
  homeSystem: string;
  ships: {[id: string]: ShipState};
}

export interface StarSystemState {
  id: string;
  isHomeSystem: boolean;
  // Name of Piece used for Star (e.x. Red2)
  piece: string;
}

export interface ShipState {
  id: string;
  systemId: string;
  playerId: string;
  piece: string;
}
