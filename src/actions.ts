export interface GameAction<P = undefined> {
  type: string;
  payload: P;
}

export function BuildShipAction(
    player: string, star: string, color: string): GameAction {
  return {type: 'Basic.Build', payload: undefined};
}
