import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HeaderComponent } from './ui';
import { AppComponent, PicturesComponent, MusicComponent, MoviesComponent, OtherComponent, LoginComponent } from './pages';
import { routes } from './routes/routes';

@NgModule({
  declarations: [
    AppComponent,
    PicturesComponent,
    MusicComponent,
    MoviesComponent,
    OtherComponent,
    HeaderComponent,
    LoginComponent
  ],
  imports: [
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
