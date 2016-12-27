import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AppComponent, MoviesComponent, MusicComponent, PicturesComponent, OtherComponent } from '../pages';

export const routes: ModuleWithProviders = RouterModule.forRoot([
    {
        path: '',
        component: PicturesComponent
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
        path: '**',
        redirectTo: ''
    }
])