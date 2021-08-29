import { emptyConsole } from "@consoles/api-interfaces";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { consoleAdapter, ConsoleState, CONSOLE_FEATURE_KEY } from "./consoles.reducer";

export const getConsoleState = createFeatureSelector<ConsoleState>(CONSOLE_FEATURE_KEY);

const { selectAll, selectEntities } = consoleAdapter.getSelectors();

export const getConsolesLoaded = createSelector(
    getConsoleState,
    (state: ConsoleState) => state.loaded
);

export const getConsoleError = createSelector(
    getConsoleState,
    (state: ConsoleState) => state.error
);

export const getAllConsoles = createSelector(
    getConsoleState,
    (state: ConsoleState) => selectAll(state)
);

export const getConsoleEntities = createSelector(
    getConsoleState,
    (state: ConsoleState) => selectEntities(state)
);

export const getSelectedConsoleId = createSelector(
    getConsoleState,
    (state: ConsoleState) => state.selectedId
);

export const getSelectedConsole = createSelector(
    getConsoleEntities,
    getSelectedConsoleId,
    (entities, selectedId) => (selectedId && entities[selectedId]) || emptyConsole
);