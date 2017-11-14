import { GenericHostDirective } from './generic-host.directive';

export interface DynamicComponent {
    data?: any;
    host: GenericHostDirective;

    mutate();
    restore();
}
