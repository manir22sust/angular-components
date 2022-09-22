import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  title: string = 'List of Posts';
  messagePost: string = 'Message Post';

  lastMessage: string = 'This is the last message from post';
  childMessage: string = ' the view chlid method';
  outputChildMessage: string = 'Message from child Component Via Output';
  outputChildPost: string = 'Message submit';

  MessagePost: string;
  @Input() fromParent: string;
  @Input() secondParent: string;
  @Input() lastParent: string;

  @Output() messageEvent = new EventEmitter<string>();

  @Output() postEvent = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  sendMessage() {
    console.log('clicked');
    this.messageEvent.emit(this.outputChildMessage);
  }
  submit() {
    console.log('message submit hello');
    this.postEvent.emit(this.outputChildPost);
  }

  postlistout($event: any) {
    this.messagePost = $event;
  }
}
