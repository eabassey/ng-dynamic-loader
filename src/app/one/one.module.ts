import { NgModule } from '@angular/core';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

@NgModule({
declarations: [FirstComponent, SecondComponent],
imports: [],
entryComponents: [FirstComponent, SecondComponent], exports: [FirstComponent]
})
export class OneModule {

}
