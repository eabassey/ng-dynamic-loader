import { Effect, Actions } from '@ngrx/effects';
import * as loaderActions from '../actions';
import 'rxjs/add/operator/map';
import { LoaderService } from '../services/loader.service';
import { Injectable } from '@angular/core';

@Injectable()
export class LoaderEffect {

    constructor(private actions$: Actions,
                private loaderService: LoaderService) {}

    @Effect({dispatch: false}) load$ = this.actions$.ofType<loaderActions.LoadComponent<any>>(loaderActions.LOAD_COMPONENT)
                    .map(action => {
                        const comp = action.payload.component;
                        const host = action.payload.host;
                        const data = action.payload.data;
                        this.loaderService.loadComponent(comp, host, data);
                    });
}
