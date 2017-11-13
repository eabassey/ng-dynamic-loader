import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DynamicComponent } from '../../lib/dynamic.component';
import { GenericHostDirective } from '../../lib/generic-host.directive';
import { SecondComponent } from '../../one/second/second.component';
import * as loaderActions from '../../lib/actions';
import { Store } from '@ngrx/store';
import { FourthComponent } from '../fourth/fourth.component';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ThirdComponent implements OnInit, DynamicComponent {
 data: any;
 host: GenericHostDirective;
 
  constructor(private store: Store<any>) { }

  ngOnInit() {
  }

  goBack() {
    this.store.dispatch(new loaderActions.LoadComponent({component: SecondComponent, host: this.host, data: this.data}));
  }



     goNext() {
       this.store.dispatch(new loaderActions.LoadComponent({component: FourthComponent, host: this.host}));
     }

}
