import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { MainComponent } from './main/main.component';

export const routes: ModuleWithProviders = RouterModule.forRoot([
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: '',
                loadChildren: 'app/pictures/pictures.module#PicturesModule'
            },
            {
                path: 'login',
                loadChildren: 'app/login/login.module#LoginModule'
            },
            {
                path: 'movies',
                loadChildren: 'app/movies/movies.module#MoviesModule'
            },
            {
                path: 'music',
                loadChildren: 'app/music/music.module#MusicModule'
            }
        ]
    },
    {
        path: '**',
        redirectTo: ''
    }
]);
