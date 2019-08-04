import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BulbComponent } from './bulb/bulb.component';
import { SwitchComponent } from './bulb/switch/switch.component';

@NgModule({
  declarations: [
    AppComponent,
    BulbComponent,
    SwitchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
