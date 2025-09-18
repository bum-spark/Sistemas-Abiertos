import { Routes } from '@angular/router';
import { CounterPageComponent } from './components/counter/counter-page.component';

export const routes: Routes = [
    {
        path: 'counter',
        component: CounterPageComponent
    },
    {
        path: '**',
        redirectTo: 'counter'
    }
];
