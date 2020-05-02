import { Component, OnInit, Input } from '@angular/core';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  constructor(private data: CommunicationService) { }
  @Input() childMessage: string;

  times = 0;
  bgColorArray = ['#cccfff', '#FFC0CB', '#00FF00', '#FF69B4', '#DDA0DD', '#DB7093', '#E0FFFF'];

  colorIndex: number = 0;
  bgColor = this.bgColorArray[this.colorIndex]

  buttonClick() {
    this.data.changeMessage("Random text from my sibling (child 2): " + this.makeid(10))
  }
  message: string;
  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.message = message)
  }
   makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

}
