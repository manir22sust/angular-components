import {
  Component,
  ViewChild,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'angular-components';

  postTitle: string;
  postDetails: string;
  imageURL: string;
  postURL: string;
  addBackground: boolean;

  bool: boolean = true;
  userName: string;

  parentMessage: string = 'Message coming from parent component';

  secondMessage: string = 'Message coming';

  lastMessage: string = 'Last Message';

  message: string;
  outputMess: string;
  secondoutput: string;

  stringMessage: string = 'Message From Typescript Component File';
  imgUrl: string =
    'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg';

  @ViewChild(PostComponent) childComp!: PostComponent;
  constructor(private cdr: ChangeDetectorRef) {
    console.log(this.childComp);
  }
  ngAfterViewInit() {
    console.log(this.childComp);
    this.message = this.childComp.childMessage;
    this.cdr.detectChanges();
  }

  reciveMessage($event: any) {
    console.log($event);
    this.outputMess = $event;
  }
  submitMessage($event: any) {
    console.log($event);
    this.secondoutput = $event;
  }
  buttonClick() {
    console.log('Button Click Event Work');
  }

  /* onKeyup($event: any) {
    if ($event.keyCode == 13) {
      console.log('Enter Key pressed');
    }
  }

  onKeyup(username: any) {
    console.log(username);
  }
  */

  onKeyup() {
    console.log(this.userName);
  }
}
