import { Directive, ViewContainerRef } from '@angular/core';
import { GenericHostDirective } from './lib/generic-host.directive';


@Directive({
    selector: '[workflow]'
})
export class WorkflowDirective implements GenericHostDirective {
    constructor(public viewContainerRef: ViewContainerRef) {}
}
