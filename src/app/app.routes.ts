import { Routes } from '@angular/router';
import { CounterPageComponent } from './components/counter/counter-page.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { UsuarioSignalComponent } from './components/usuario-signal/usuario-signal.component';
import { HeroPageComponent } from './pages/hero/hero-page/hero-page.component';

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
        path: 'usuario-signal',
        component: UsuarioSignalComponent
    },
    {
        path: 'hero',
        component: HeroPageComponent
    },
    {
        path: '**',
        redirectTo: 'hero'
    }
];
