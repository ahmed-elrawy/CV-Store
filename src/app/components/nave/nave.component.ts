import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-nave',
  templateUrl: './nave.component.html',
  styleUrls: ['./nave.component.css']
})
export class NaveComponent implements OnInit {
  isCollapsed = true;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }
  onCreate() {
    this.dialog.open(LoginComponent)
  }
}
