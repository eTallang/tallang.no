import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AppComponent, MoviesComponent, MusicComponent, PicturesComponent, OtherComponent, LoginComponent } from '../pages';

export const routes: ModuleWithProviders = RouterModule.forRoot([
    {
        path: '',
        redirectTo: 'pictures',
        pathMatch: 'full'
    },
    {
        path: 'pictures',
        component: PicturesComponent
    },
    {
        path: 'music',
        component: MusicComponent
    },
    {
        path: 'movies',
        component: MoviesComponent
    },
    {
        path: 'other',
        component: OtherComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
]);
