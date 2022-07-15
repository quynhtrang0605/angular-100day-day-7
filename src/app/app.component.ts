import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular100day';
  currentProgress = 70;
  Increase(){
    this.currentProgress = this.currentProgress + 1;
  }

}
