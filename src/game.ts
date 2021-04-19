import {GameAction} from './actions';
import {GameState} from './state';

/**
 * Game represents the game currently being played. It contains the game state
 * and process various game actions (like a reducer)
 */
export class HomeworldsGame {
  private state: GameState = HomeworldsGame.initialState();

  private static initialState(): GameState {
    return {
      turnNumber: 0,
      players: {
        '1': {id: '1', name: 'Player1', homeSystem: 'Star1', ships: {}},
        '2': {id: '2', name: 'Player2', homeSystem: 'Star2', ships: {}},
      },
      currentPlayer: '1',
      starField: {},
      bank: {
        green1: 3,
        green2: 3,
        green3: 3,
        blue1: 3,
        blue2: 3,
        blue3: 3,
        yellow1: 3,
        yellow2: 3,
        yellow3: 3,
        red1: 3,
        red2: 3,
        red3: 3,
      }
    };
  }

  public getState(): GameState {
    return this.state;
  }

  public getPreviewState(action: GameAction): GameState {
    return this.processAction(this.state, action);
  }

  /** Returns a new GameState with the given action applied */
  private processAction(state: GameState, action: GameAction): GameState {
    switch (action.type) {
      case 'Basic.Build':
        return {...state, turnNumber: state.turnNumber + 1};
      default:
        return state;
    }
  }
}
