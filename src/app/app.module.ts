import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FruitsatobComponent } from './fruitsatob/fruitsatob.component';
import { ChosenletterComponent } from './chosenletter/chosenletter.component';
import { FruitdetailsComponent } from './fruitdetails/fruitdetails.component';
import { FruitydataService } from './fruitydata.service';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './api/in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    FruitsatobComponent,
    ChosenletterComponent,
    FruitdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [FruitydataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
