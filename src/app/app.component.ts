import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppIconsService } from './app-icons.service';
import { CrimeComponent } from './crime/crime.component';
import { RoundCreationComponent } from './round-creation/round-creation.component';
import { Round } from './shared/round.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  crimeDisplayEnabled = true;
  round: Round;

  constructor(
    private dialog: MatDialog,
    private appIconsService: AppIconsService
  ) {}

  createNewRound() {
    const dialogRef = this.dialog.open(RoundCreationComponent);
    dialogRef.afterClosed().subscribe(roundConfig => {
      this.round = new Round(roundConfig[0], roundConfig[1]);
    });
  }

  displayCrime() {
    const dialogRef = this.dialog.open(CrimeComponent, {
      width: '300px',
      data: this.round.getCrime()
    });
  }
}
