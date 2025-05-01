import { Component } from '@angular/core';

@Component({
  selector: 'app-marvellous',
  imports: [],
  templateUrl: './marvellous.component.html',
  styleUrl: './marvellous.component.css'
})
export class MarvellousComponent {

  public Information : string = ""

  public MarvellousEvent()
  {
    console.log("Click Me Button Pressed")
  }

  public AngularEvent()
  {
    this.Information = "Angular Button Pressed"
  }

  public PythonEvent(Value : any)
  {
    console.log(Value)
  }
}
