import { Component } from '@angular/core';
import { BatchesService } from '../batches.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-batch-details',
  imports: [CommonModule],
  templateUrl: './batch-details.component.html',
  styleUrl: './batch-details.component.css'
})
export class BatchDetailsComponent {

  public batches : any = []

  public constructor(private sobj : BatchesService)
  {
    sobj.getBatches().subscribe(data => this.batches = data)
  }
}
