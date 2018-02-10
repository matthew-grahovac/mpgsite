import { Route } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import {LandingComponent} from './landing.component';

export const landingRoute: Route = {
    path: 'landing',
    component: LandingComponent,
    data: {
        authorities: [],
        pageTitle: 'register.title'
    },
    canActivate: [UserRouteAccessService]
};
