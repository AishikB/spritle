import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ConfirmComponent } from '../confirm/confirm.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  response: string;
  
  constructor(public dialog: MatDialog, private router:Router) { }

  ngOnInit() {
  }

  logout() {
    const dialogRef = this.dialog.open(ConfirmComponent, {
      width: '70%',
      minWidth: '320px',
      data: {response: this.response, message: 'Are you sure you want to logout??'}
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result === 'Yes') {
        console.log("yes")
        this.router.navigate(['/login']);
      }
    });
  }
}
