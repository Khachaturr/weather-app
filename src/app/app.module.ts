import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { WeaterService } from './weater.service';
import { IIconPipe } from './i-icon.pipe';
import { NightorLightPipe } from './nigthor-light.pipe';


@NgModule({
  declarations: [
    AppComponent,
    IIconPipe,
    NightorLightPipe

  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [WeaterService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
