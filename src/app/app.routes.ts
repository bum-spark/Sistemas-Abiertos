import { Routes } from '@angular/router';
import { CounterPageComponent } from './components/counter/counter-page.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

export const routes: Routes = [
    {
        path: 'counter',
        component: CounterPageComponent
    },
    {
        path: 'usuario',
        component: UsuarioComponent
    },
    {
        path: '**',
        redirectTo: 'usuario'
    }
];
