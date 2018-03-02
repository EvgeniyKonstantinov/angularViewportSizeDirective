import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { IfViewportSizeDirective } from './directives/if-viewport-size.directive';
import { TestcomponentComponent } from './components/testcomponent/testcomponent.component';
import { AppSetings } from './config';


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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
