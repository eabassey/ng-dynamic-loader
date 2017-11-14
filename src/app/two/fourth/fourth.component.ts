import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DynamicComponent } from '../../lib/dynamic.component';
import { GenericHostDirective } from '../../lib/generic-host.directive';

import * as loaderActions from '../../lib/actions';
import { Store } from '@ngrx/store';
import { ThirdComponent } from '../third/third.component';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FourthComponent implements OnInit, DynamicComponent {
  data: any;
  host: GenericHostDirective;
  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.restore();
  }

  goBack() {
    this.store.dispatch(new loaderActions.LoadComponent({component: ThirdComponent, host: this.host, data: this.data}));
  }


     goNext() {
      // this.mutate();
     }

     mutate() {

    }
    restore() {

    }

}
