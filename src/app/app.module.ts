import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { WeaterService } from './weater.service';
import { AgmCoreModule } from  '@agm/core';
import { MapsComponent } from './maps/maps.component';
import { IIconPipe } from './i-icon.pipe';
import { NightorLightPipe } from './nigthor-light.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MapsComponent,
    IIconPipe,
    NightorLightPipe

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyAcQ3BojtEfu4GPY2fbnKNbDPfJEawep_g' 
    })
  ],
  providers: [WeaterService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
