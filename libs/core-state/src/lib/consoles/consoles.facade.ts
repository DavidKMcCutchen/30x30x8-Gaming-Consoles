import { Injectable } from "@angular/core";
import { GConsole } from "@consoles/api-interfaces";
import { Action, ActionsSubject, select, Store } from "@ngrx/store";
import { map, filter } from "rxjs/operators";
import * as ConsoleActions from './consoles.actions';
import * as ConsoleSelectors from './consoles.selectors';
import * as fromConsoles from './consoles.reducer';


@Injectable({
    providedIn: 'root'
})

export class ConsoleFacade {
    allConsoles$ = this.store.pipe(
        map((state) => ConsoleSelectors.getAllConsoles(state)),
    )
    selectedConsoles$ = this.store.pipe(select(ConsoleSelectors.getSelectedConsole));
    loaded$ = this.store.pipe(select(ConsoleSelectors.getConsolesLoaded));

    mutations$ = this.actions$.pipe(
        filter((action: Action) =>
        action.type === ConsoleActions.createConsole({} as any) .type ||
        action.type === ConsoleActions.updateConsole({} as any) .type ||
        action.type === ConsoleActions.deleteConsole({} as any) .type 
        ))

        selectConsole(consoleId: string) {
            this.dispatch(ConsoleActions.selectConsole({ consoleId }));
        };

        loadConsoles() {
            this.dispatch(ConsoleActions.loadConsoles())
        };

        loadConsole(consoleId: string) {
            this.dispatch(ConsoleActions.loadConsole({ consoleId }))
        };

        saveConsole(console: GConsole) {
            console.id ? this.updateConsole(console) : this.createConsole(console)
        };

        createConsole(console: GConsole) {
            this.dispatch(ConsoleActions.createConsole({ console }))
        };

        updateConsole(console: GConsole) {
            this.dispatch(ConsoleActions.updateConsole({ console }))
        };

        deleteConsole(console: GConsole) {
            this.dispatch(ConsoleActions.deleteConsole({ console }))
        };

        dispatch(action: Action) {
            this.store.dispatch(action)
        };

        constructor(
            private store: Store<fromConsoles.ConsolePartialState>,
            private actions$: ActionsSubject
        ) {}
}