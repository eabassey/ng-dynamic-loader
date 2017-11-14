import { NgModule } from '@angular/core';
import { ThirdComponent } from './third/third.component';
import { FourthComponent } from './fourth/fourth.component';
import { CommonModule } from '@angular/common';

@NgModule({
declarations: [ThirdComponent, FourthComponent],
imports: [CommonModule],
entryComponents: [ThirdComponent, FourthComponent]
})
export class TwoModule {

}
