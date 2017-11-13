import { GenericHostDirective } from '../generic-host.directive';

export interface Payload<T> {
    component: any;
    host: GenericHostDirective;
    data?: Partial<T>;
}



export interface ComponentData {
    comp1: any;
}

export interface ModuleData {
 theData: any;
}
