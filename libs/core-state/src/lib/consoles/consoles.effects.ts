import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { GConsole } from "@consoles/api-interfaces";
import { ConsolesService } from "@consoles/core-data";
import * as ConsoleActions from './consoles.actions';
import { map } from "rxjs/operators";
import { fetch, pessimisticUpdate } from "@nrwl/angular";

@Injectable()
export class ConsoleEffects{
    loadConsole$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ConsoleActions.loadConsole),
            fetch({
                run: (action) =>
                    this.consolesService
                        .find(action.consoleId)
                        .pipe(map((console: GConsole) => ConsoleActions.loadConsoleSuccess({ console }))),
                    onError: (action, error) => ConsoleActions.loadConsoleFailed({ error })    
            })
        ));
    loadConsoles$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ConsoleActions.loadConsoles),
            fetch({
                run: () =>
                    this.consolesService
                    .all()
                    .pipe(
                        map((consoles: GConsole[]) => ConsoleActions.loadConsolesSuccess({ consoles }))
                    ),
                onError: (action, error) => ConsoleActions.loadConsolesFailed({ error })    
            })
        ));
        createConsole$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ConsoleActions.createConsole),
            pessimisticUpdate({
                run: (action) =>
                    this.consolesService
                        .create(action.console)
                        .pipe(map((console: GConsole) => ConsoleActions.createConsoleSuccess({ console }))),
                    onError: (action, error) => ConsoleActions.createConsoleFailed({ error })    
            })
    ));

    updateConsole$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ConsoleActions.updateConsole),
            pessimisticUpdate({
                run: (action) =>
                    this.consolesService
                        .update(action.console)
                        .pipe(map((console: GConsole) => ConsoleActions.updateConsoleSuccess({ console}))),
                    onError: (action, error) => ConsoleActions.updateConsoleFailed({ error })    
            })
    ));

    deleteConsole$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ConsoleActions.deleteConsole),
            pessimisticUpdate({
                run: (action) =>
                    this.consolesService
                        .delete(action.console)
                        .pipe(
                            map(() => ConsoleActions.deleteConsoleSuccess({ console: action.console }))
                        ),
                    onError: (action, error) => ConsoleActions.deleteConsoleFailed({ error })    
            })
        ));    


    constructor(
        private actions$: Actions,
        private consolesService: ConsolesService
    ) {}    
}