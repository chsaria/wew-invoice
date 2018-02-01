import { PositionEditComponent } from './position-edit/position-edit.component';
import { PositionSearchComponent } from './position-search/position-search.component';
import { Routes } from '@angular/router';

export const POSITION_MANAGEMENT_ROUTES: Routes = [
    {
        path: 'positions',
        component: PositionSearchComponent
    },
    {
        path: 'positions/:id',
        component: PositionEditComponent
    }
];
