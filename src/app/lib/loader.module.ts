import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { LoaderEffect } from './effects/index';
import { EffectsModule } from '@ngrx/effects/src/effects_module';
import { LoaderService } from './services/loader.service';
import { Actions } from '@ngrx/effects';


@NgModule({
    declarations: [],
    imports: [
    ],
    providers: [
        LoaderService
    ]
})
export class LoaderModule {

}
