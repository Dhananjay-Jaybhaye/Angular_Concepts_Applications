import { Component } from '@angular/core';
import { DecimalPipe, JsonPipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
@Component({
  selector: 'app-marvellous',
  imports: [LowerCasePipe,UpperCasePipe,DecimalPipe,JsonPipe],
  templateUrl: './marvellous.component.html',
  styleUrl: './marvellous.component.css'
})
export class MarvellousComponent {
  public Name : string = "Marvellous Infosystems Pune"

  public Value : number = 12.345678;

  public Book = {
    "Let us See" : 520, 
    "Author" : "yashwant Kanetkar", 
  }
}
