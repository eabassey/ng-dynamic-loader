import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DynamicComponent } from '../../lib/dynamic.component';
import { GenericHostDirective } from '../../lib/generic-host.directive';
import { Store } from '@ngrx/store';
import * as loaderActions from '../../lib/actions';
import { ThirdComponent } from '../../two/third/third.component';
import { FirstComponent } from '../first/first.component';


@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SecondComponent implements OnInit, DynamicComponent {
  data: any;
  host: GenericHostDirective;
  constructor(private store: Store<any>) { }

  ngOnInit() {
  }

  goBack() {
    this.store.dispatch(new loaderActions.LoadComponent({component: FirstComponent, host: this.host}));
     }
   
     goNext() {
       this.store.dispatch(new loaderActions.LoadComponent({component: ThirdComponent, host: this.host}));
     }

}
