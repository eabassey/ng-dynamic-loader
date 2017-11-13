import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { OneModule } from './one/one.module';
import { TwoModule } from './two/two.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { LoaderEffect } from './lib/effects';
import { LoaderModule } from './lib/loader.module';
import { WorkflowDirective } from './workflow.directive';


export const reducerMap = {

};

@NgModule({
  declarations: [
    AppComponent,
    WorkflowDirective
  ],
  imports: [
    BrowserModule,
    OneModule,
    TwoModule,
    LoaderModule,
    StoreModule.forRoot(reducerMap),
    EffectsModule.forRoot([LoaderEffect])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
