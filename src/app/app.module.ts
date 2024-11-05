import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudModule } from './modules/crud/crud.module';
import { CommonService } from './shared/common.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CrudModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
