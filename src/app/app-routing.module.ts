import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: 'src/app/about/about.module#AboutModule'
  },
  {
    path: 'movies',
    loadChildren: 'src/app/movies/movies.module#MoviesModule'
  },
  {
    path: 'code',
    loadChildren: 'src/app/code/code.module#CodeModule'
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
