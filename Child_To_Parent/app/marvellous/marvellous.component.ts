import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
@Component({
  selector: 'app-marvellous',
  imports: [],
  templateUrl: './marvellous.component.html',
  styleUrl: './marvellous.component.css'
})
export class MarvellousComponent {

  @Output() public Myevent = new EventEmitter()

  public SendMessage()
  {
    this.Myevent.emit("Hello Parent")  
  }
}
