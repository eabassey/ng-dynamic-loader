import { Component, OnInit, ViewEncapsulation, EventEmitter, Output } from '@angular/core';
import { DynamicComponent } from '../../lib/dynamic.component';
import { GenericHostDirective } from '../../lib/generic-host.directive';
import { Store } from '@ngrx/store';
import * as loaderActions from '../../lib/actions';
import { SecondComponent } from '../second/second.component';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FirstComponent implements OnInit, DynamicComponent {
  data: any;
  host: GenericHostDirective;

  constructor(private store: Store<any>) { }

  ngOnInit() {
  }

  goBack() {
 
  }

  goNext() {
    this.store.dispatch(new loaderActions.LoadComponent<{name:string}>({component: SecondComponent, host: this.host,data:{name:'John'}}));
  }



}
