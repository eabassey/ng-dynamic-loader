import { Injectable, ComponentFactoryResolver  } from '@angular/core';
import { GenericHostDirective } from '../generic-host.directive';
import { BaseComponent } from '../base.component';


@Injectable()
export class LoaderService {
    constructor(
        private componentFactoryResolver: ComponentFactoryResolver
    ) {}

    loadComponent(component: any, host: GenericHostDirective, data?: any) {
        const factory = this.componentFactoryResolver.resolveComponentFactory(component);

        const viewContainerRef = host.viewContainerRef;
        viewContainerRef.clear();

        const compRef = viewContainerRef.createComponent(factory);

        const componentInstance = <BaseComponent>compRef.instance;
        componentInstance.data = data ? data : null;
        componentInstance.host = host;
    }

    loadModule() {

    }

    
}
