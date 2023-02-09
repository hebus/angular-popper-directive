import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PopperDirective } from './popper.directive';
import { TeleportModule } from './teleport/teleport.module';

@NgModule({
  declarations: [
    AppComponent,
    PopperDirective
  ],
  imports: [
    BrowserModule,
    TeleportModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
