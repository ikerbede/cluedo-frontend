import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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
  MatInputModule,
  MatSelectModule,
  MatCardModule,
  MatSnackBarModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { RoundCreationComponent } from './round-creation/round-creation.component';
import { TestResultComponent } from './test-result/test-result.component';
import { CrimeComponent } from './crime/crime.component';
import { AppIconsService } from './app-icons.service';

@NgModule({
  declarations: [
    AppComponent,
    RoundCreationComponent,
    CrimeComponent,
    TestResultComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatDialogModule,
    MatListModule,
    MatChipsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatSnackBarModule
  ],
  entryComponents: [
    RoundCreationComponent,
    TestResultComponent,
    CrimeComponent
  ],
  providers: [AppIconsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
