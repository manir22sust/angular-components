import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  outputpost: string = ' this is comming from postlist';
  @Input() fromPost: string;
  @Input() lastPost: string;

  @Output() postMess = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  submitbutton() {
    console.log('post list working ');
    this.postMess.emit(this.outputpost);
  }
}
