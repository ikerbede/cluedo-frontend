import { Component } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { AppIconsService } from './app-icons.service';
import { CrimeComponent } from './crime/crime.component';
import { RoundCreationComponent } from './round-creation/round-creation.component';
import { Round } from './shared/round.model';
import { Deck } from './shared/deck.model';
import { TestResultComponent } from './test-result/test-result.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  crimeDisplayEnabled = true;
  round: Round;
  deck: Deck;
  test: {suspect: number, weapon: number, place: number};

  constructor(
    private dialog: MatDialog,
    public snackBar: MatSnackBar,
    private appIconsService: AppIconsService
  ) {
    this.deck = new Deck();
    this.test = {suspect: null, weapon: null, place: null};
  }

  createNewRound() {
    const dialogRef = this.dialog.open(RoundCreationComponent);
    dialogRef.afterClosed().subscribe(roundConfig => {
      this.round = new Round(roundConfig[0], roundConfig[1]);
    });
  }

  testCrime() {
    const crime = this.round.getCrime();
    this.snackBar.openFromComponent(TestResultComponent, {
      data: {
        suspect: this.test.suspect === crime.suspect.id,
        weapon: this.test.weapon === crime.weapon.id,
        place: this.test.place === crime.place.id
      },
      duration: 3000
    });
  }

  clearTest() {
    this.test = {suspect: null, weapon: null, place: null};
  }

  displayCrime() {
    const dialogRef = this.dialog.open(CrimeComponent, {
      width: '300px',
      data: this.round.getCrime()
    });
  }
}
