import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EngineComponent } from './engine/engine.component';
import { EmployeeNameComponent } from './employee-name/employee-name.component';

@NgModule({
  declarations: [
    AppComponent,
    EngineComponent,
    EmployeeNameComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
