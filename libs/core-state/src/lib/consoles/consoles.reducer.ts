import { GConsole } from "@consoles/api-interfaces";
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";
import * as ConsoleActions from './consoles.actions';

export const CONSOLE_FEATURE_KEY = 'consoles';

export interface ConsoleState extends EntityState<GConsole> {
    selectedId?: string | number;
    loaded: boolean;
    error?: string | null;
};

export interface ConsolePartialState {
    readonly [CONSOLE_FEATURE_KEY]: ConsoleState
};

export const consoleAdapter: EntityAdapter<GConsole> = createEntityAdapter<GConsole>();

export const initialConsoleState: ConsoleState = consoleAdapter.getInitialState(
    {
        loaded: false
    }
);

const onFailed = (state, { error }): ConsoleState => ({ ...state, error});

const onDispatch = (state, action): ConsoleState => ({
    ...state,
    loaded: false,
    error: null
});

const _consoleReducer = createReducer(
    initialConsoleState,
    on(
        ConsoleActions.loadConsoleFailed,
        ConsoleActions.loadConsolesFailed,
        ConsoleActions.createConsoleFailed,
        ConsoleActions.updateConsoleFailed,
        ConsoleActions.deleteConsoleFailed,
        onFailed
    ),
    on(
        ConsoleActions.loadConsole,
        ConsoleActions.loadConsoles,
        ConsoleActions.createConsole,
        ConsoleActions.updateConsole,
        ConsoleActions.deleteConsole,
        onDispatch
    ),
    on(
        ConsoleActions.loadConsoleSuccess, (state, { console }) =>
        consoleAdapter.upsertOne(console, {...state, loaded: true})
    ),
    on(
        ConsoleActions.selectConsole, (state, { consoleId }) => ({
            ...state,
            selectedId: consoleId
        })
    ),
    on(
        ConsoleActions.loadConsolesSuccess, (state, { consoles }) =>
        consoleAdapter.setAll(consoles, {...state, loaded: true})
    ),
    on(
        ConsoleActions.deleteConsoleSuccess, (state, { console }) =>
        consoleAdapter.removeOne(console.id, {...state, loaded: true})
    ),
    on(
        ConsoleActions.updateConsoleSuccess, (state, { console }) =>
        consoleAdapter.updateOne(
            {id: console.id, changes: console},
            {...state, loaded: true}
        )
    ),
    on(
        ConsoleActions.createConsoleSuccess, (state, {console }) =>
        consoleAdapter.addOne(console, {...state, loaded: true})
    ),
)

export function consoleReducer(
    state: ConsoleState | undefined,
    action: Action
) {
    return _consoleReducer(state, action)
}