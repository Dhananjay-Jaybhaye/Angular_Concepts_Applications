import { Component } from '@angular/core';
import { DemoPipe } from '../demo.pipe';

@Component({
  selector: 'app-marvellous',
  imports: [DemoPipe],
  templateUrl: './marvellous.component.html',
  styleUrl: './marvellous.component.css'
})
export class MarvellousComponent {
Batch = "PPA"
}
