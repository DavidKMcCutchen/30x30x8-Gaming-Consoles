import { ActionReducerMap } from "@ngrx/store";
import * as fromConsoles from './consoles/consoles.reducer';

export interface AppState {
    [fromConsoles.CONSOLE_FEATURE_KEY]: fromConsoles.ConsoleState
};

export const reducers: ActionReducerMap<AppState> = {
    [fromConsoles.CONSOLE_FEATURE_KEY]: fromConsoles.consoleReducer
};