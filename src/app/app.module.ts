import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { routes } from './routes';
import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';

@NgModule({
  imports: [
    CoreModule,
    MainModule,
    routes
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
