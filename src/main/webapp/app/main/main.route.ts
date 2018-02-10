import { Route } from '@angular/router';

import { UserRouteAccessService } from '../shared';
import { MainComponent } from './';

export const MAIN_ROUTE: Route = {
    path: '',
    component: MainComponent,
    data: {
        authorities: [],
        pageTitle: 'home.title'
    }
};
