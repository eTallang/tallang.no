import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { routes } from './routes';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  imports: [
    CoreModule,
    SharedModule,
    routes
  ],
  declarations: [
    AppComponent,
    MenuComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
