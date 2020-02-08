import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('src/app/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'movies',
    loadChildren: () => import('src/app/movies/movies.module').then(m => m.MoviesModule)
  },
  {
    path: 'code',
    loadChildren: () => import('src/app/code/code.module').then(m => m.CodeModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
