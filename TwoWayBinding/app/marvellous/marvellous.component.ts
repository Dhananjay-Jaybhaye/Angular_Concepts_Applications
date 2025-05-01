import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-marvellous',
  imports: [FormsModule],
  templateUrl: './marvellous.component.html',
  styleUrl: './marvellous.component.css'
})
export class MarvellousComponent {
  public Name = "Marvellous Infosystems Pune"

  public Data : string = ""
}
