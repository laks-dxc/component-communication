import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {


  appComponentText;

  @Input() childMessage: string;

  @Output() clickedCountEvent = new EventEmitter<number>();

  message: string;

  constructor(private data: CommunicationService) {
    this.data.currentMessage.subscribe(message => this.message = message)
  }

  clickedCount = 0;


  buttonClick() {
    this.clickedCount++;
    this.clickedCountEvent.emit(this.clickedCount);
  }

  ngOnInit(): void {

  }

}
