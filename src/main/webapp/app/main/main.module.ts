import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MpgsiteSharedModule } from '../shared';

import { MAIN_ROUTE, MainComponent } from './';

@NgModule({
    imports: [
        MpgsiteSharedModule,
        RouterModule.forRoot([ MAIN_ROUTE ], { useHash: true })
    ],
    declarations: [
        MainComponent,
    ],
    entryComponents: [
    ],
    providers: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MpgsiteMainModule {}
