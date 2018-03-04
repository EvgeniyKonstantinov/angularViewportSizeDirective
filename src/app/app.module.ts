import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { IfViewportSizeDirective } from './directives/if-viewport-size.directive';
import { TestcomponentComponent } from './components/testcomponent/testcomponent.component';
import { AppSetings } from './config';
import { ScreenwidthService } from './services/screenwidth.service';


@NgModule({
  declarations: [
    AppComponent,
    IfViewportSizeDirective,
    TestcomponentComponent
  ],
  imports: [
    BrowserModule,
    AppSetings
  ],
  providers: [ScreenwidthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
