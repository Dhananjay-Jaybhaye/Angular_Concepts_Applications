import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MarvellousFormComponent } from './marvellous-form/marvellous-form.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MarvellousFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Forms';
}
