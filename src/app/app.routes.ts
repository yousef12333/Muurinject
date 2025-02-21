import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { WallInjectComponent } from './wall-inject/wall-inject.component';
import { CellarTreatmentComponent } from './cellar-treatment/cellar-treatment.component';
import { WallImpregnationComponent } from './wall-impregnation/wall-impregnation.component';
import { DampProofingComponent } from './damp-proofing/damp-proofing.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'wall-inject', component: WallInjectComponent },
    { path: 'cellar-treatment', component: CellarTreatmentComponent },
    { path: 'wall-impregnation', component: WallImpregnationComponent },
    { path: 'damp-proofing', component: DampProofingComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
