import { createAction, props } from "@ngrx/store";
import {  GConsole } from "@consoles/api-interfaces";

// Select Entity

export const selectConsole = createAction(
    '[CONSOLE] Select Console',
    props<{ consoleId: string }>()
);

// Load all Entities

export const loadConsoles = createAction(
    '[CONSOLE] Load Consoles'
);

export const loadConsolesSuccess = createAction(
    '[CONSOLE] Load Consoles Success',
    props<{ consoles: GConsole[]}>()
);

export const loadConsolesFailed = createAction(
    '[CONSOLE] Load Consoles Failed',
    props<{ error: any }>()
);

// Load Single Entity

export const loadConsole = createAction(
    '[CONSOLE] Load Console',
    props<{ consoleId: string}>()
);

export const loadConsoleSuccess = createAction(
    '[CONSOLE] Load Console Success',
    props<{ console: GConsole}>()
);

export const loadConsoleFailed = createAction(
    '[CONSOLE] Load Console Failed',
    props<{ error: any}>()
);

// Load Create Entity

export const createConsole = createAction(
    '[CONSOLE] Create Console',
    props<{ console: GConsole}>()
);

export const createConsoleSuccess = createAction(
    '[CONSOLE] Create Console Success',
    props<{ console: GConsole}>()
);

export const createConsoleFailed = createAction(
    '[CONSOLE] Create Console Failed',
    props<{ error: any}>()
);

// Load Update Entity

export const updateConsole = createAction(
    '[CONSOLE] Update Console',
    props<{ console: GConsole}>()
);

export const updateConsoleSuccess = createAction(
    '[CONSOLE] Update Console Success',
    props<{ console: GConsole}>()
);

export const updateConsoleFailed = createAction(
    '[CONSOLE] Create Console Failed',
    props<{ error: any}>()
);

// Load Delete Entity

export const deleteConsole = createAction(
    '[CONSOLE] Delete Console',
    props<{ console: GConsole}>()
);

export const deleteConsoleSuccess = createAction(
    '[CONSOLE] Delete Console Success',
    props<{ console: GConsole}>()
);

export const deleteConsoleFailed = createAction(
    '[CONSOLE] Create Console Failed',
    props<{ error: any}>()
);