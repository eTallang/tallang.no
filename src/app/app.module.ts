import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { HeaderComponent } from './ui';
import { AppComponent, PicturesComponent, MusicComponent, MoviesComponent, OtherComponent, LoginComponent } from './pages';
import { routes } from './routes/routes';

export const firebaseConfig = {
  apiKey: 'AIzaSyAuKdJ5hsSN98XrByybfc5zqxnLoHaFwGY',
  authDomain: 'tallang-267a8.firebaseapp.com',
  databaseURL: 'https://tallang-267a8.firebaseio.com',
  storageBucket: 'tallang-267a8.appspot.com',
  messagingSenderId: '412607846143'
};

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
    AngularFireModule.initializeApp(firebaseConfig),
    FlexLayoutModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
