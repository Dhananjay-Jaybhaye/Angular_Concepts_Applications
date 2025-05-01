import { Routes } from '@angular/router';
import { BatchListComponent } from './batch-list/batch-list.component';
import { BatchDetailsComponent } from './batch-details/batch-details.component';
import { InvalidComponent } from './invalid/invalid.component';
import { WelcomeComponent } from './welcome/welcome.component';


export const routes: Routes = [
    {
        path : '',
        component : WelcomeComponent
    },
    {
        path : 'batchList',
        component : BatchListComponent
    },
    {
        path : 'batchdetails',
        component : BatchDetailsComponent
    },
    {
        path:"**",
        component : InvalidComponent
    }
];
