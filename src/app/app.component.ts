import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { WorkflowDirective } from './workflow.directive';
import { Store, Action } from '@ngrx/store';
import * as loaderActions from './lib/actions';
import { FirstComponent } from './one/first/first.component';
import { SecondComponent } from './one/second/second.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(WorkflowDirective) host: WorkflowDirective;

  constructor(private store: Store<any>) {}

  start() {
    this.store.dispatch(new loaderActions.LoadComponent({component: FirstComponent, host: this.host}));
  }

}






