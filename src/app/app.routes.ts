import { ModuleWithProviders } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { MainComponent } from './main/main.component';

export const routes: ModuleWithProviders = RouterModule.forRoot([
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: 'pictures',
                loadChildren: 'app/pictures/pictures.module#PicturesModule'
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
], { preloadingStrategy: PreloadAllModules });
