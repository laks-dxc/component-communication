import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'component-communication';
  appComponentOriginalText = 'hello';
  times = 0;
  bgColorArray = ['#cccfff', '#FFC0CB', '#00FF00', '#FF69B4', '#DDA0DD', '#DB7093', '#E0FFFF'];

  colorIndex: number = 0;
  bgColor = this.bgColorArray[this.colorIndex]
  getCount($event) {
    this.colorIndex++;
    if (this.colorIndex == 6) this.colorIndex = 0;
    this.bgColor = this.bgColorArray[this.colorIndex]

    this.times = $event;
  }


}
