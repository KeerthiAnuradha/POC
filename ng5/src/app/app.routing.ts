import { Routes, RouterModule } from '@angular/router';
import { PatientListingComponent } from './patient-listing/patient-listing.component';

const appRoutes: Routes = [
    { path: '', component: PatientListingComponent },
];
export const Routing = RouterModule.forRoot(appRoutes,{useHash: true});