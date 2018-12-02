import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'photos'
  },
  {
    path: 'me',
    loadChildren: 'src/app/about/about.module#AboutModule'
  },
  {
    path: 'movies',
    loadChildren: 'src/app/movies/movies.module#MoviesModule'
  },
  {
    path: 'blog',
    loadChildren: 'src/app/blog/blog.module#BlogModule'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
