import { NgModule } from '@angular/core';
import { ThirdComponent } from './third/third.component';
import { FourthComponent } from './fourth/fourth.component';

@NgModule({
declarations: [ThirdComponent, FourthComponent],
imports: [],
entryComponents: [ThirdComponent, FourthComponent]
})
export class TwoModule {

}
