import { Component, OnInit, Inject } from '@angular/core';
import { HomeService } from './home.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ConfirmComponent} from '../../common/confirm/confirm.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username: string;
  constructor(private homeService:HomeService, public dialog: MatDialog, private router:Router) { }

  ngOnInit() {
    this.username = this.homeService.getUser();
    console.log(this.username)
    if(this.username === undefined) {
      this.router.navigate(['/login']);
    }
  }

  post: string;
  comment: string;
  likes = 0;
  displayPost = true;
  commentArray = [];
  commnetLikeArray= [];
  response: string;

  onPost() {
    this.displayPost = false;
  }

  onComment() {
    this.commentArray[this.commentArray.length] = this.comment;
    this.commnetLikeArray[this.commentArray.length-1] = 0;
    this.comment = '';
  }

  onEdit() {
    this.displayPost = true;
  }

  // onDelete() {
  //   this.post = '';
  //   this.comment = '';
  //   this.commentArray = [];
  //   this.displayPost = true;
  // }

  onLike() {
    if(this.likes == 1)
    this.likes = 0;
    else this.likes = 1;
  }

  onCommentDelete(i) {
    const dialogRef = this.dialog.open(ConfirmComponent, {
      width: '80%',
      data: {response: this.response, message: 'Are you sure you want to delete your comment?'}
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result === 'Yes') {
        this.commentArray.splice(i,1);
      }
    });
    
  }

  onCommentLike(i) {
    if(this.commnetLikeArray[i] == 0)
    this.commnetLikeArray[i]++;
    else this.commnetLikeArray[i] = 0;
  }

  onDelete() {
    const dialogRef = this.dialog.open(ConfirmComponent, {
      width: '70%',
      minWidth: '320px',
      data: {response: this.response, message: 'Are you sure you want to delete your post?'}
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result === 'Yes') {
        this.post = '';
        this.comment = '';
        this.commentArray = [];
        this.displayPost = true;
      }
    });
  }
}
