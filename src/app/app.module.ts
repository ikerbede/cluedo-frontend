import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {
  MatToolbarModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatDialogModule,
  MatListModule,
  MatChipsModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { RoundCreationComponent } from './round-creation/round-creation.component';
import { CrimeComponent } from './crime/crime.component';
import { AppIconsService } from './app-icons.service';

@NgModule({
  declarations: [
    AppComponent,
    RoundCreationComponent,
    CrimeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatDialogModule,
    MatListModule,
    MatChipsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule
  ],
  entryComponents: [
    RoundCreationComponent,
    CrimeComponent
  ],
  providers: [AppIconsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
