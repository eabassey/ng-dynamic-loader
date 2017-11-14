import { NgModule } from '@angular/core';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { CommonModule } from '@angular/common';

@NgModule({
declarations: [FirstComponent, SecondComponent],
imports: [CommonModule],
entryComponents: [FirstComponent, SecondComponent], exports: [FirstComponent]
})
export class OneModule {

}
