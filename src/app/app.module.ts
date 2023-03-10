import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DogComponent } from './dog/dog.component';
import { DogFormComponent } from './dog-form/dog-form.component';
import {FormsModule} from "@angular/forms";
import {MatTableModule} from "@angular/material/table";

@NgModule({
  declarations: [
    AppComponent,
    DogComponent,
    DogFormComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        MatTableModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
