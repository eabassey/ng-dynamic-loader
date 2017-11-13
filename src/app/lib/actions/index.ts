import { Action } from '@ngrx/store';
import { Payload, ComponentData } from '../models/payload.model';

export const LOAD_COMPONENT = 'Load Component';
export const LOAD_MODULE = 'Load Module';

export class LoadComponent<T> implements Action {
    readonly type = LOAD_COMPONENT;
    constructor(public payload: Payload<T>) {}
}

// export class LoadModule implements Action {
//     readonly type = LOAD_MODULE;
//     constructor(public payload: Payload<ModuleData>) {}
// }
