import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-round-creation',
  templateUrl: './round-creation.component.html',
  styleUrls: ['./round-creation.component.scss']
})
export class RoundCreationComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<RoundCreationComponent>) {}

  ngOnInit() {
  }

}
