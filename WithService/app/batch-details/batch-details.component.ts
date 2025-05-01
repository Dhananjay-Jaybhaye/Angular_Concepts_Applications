import { Component } from '@angular/core';
import { BatchService } from '../batch.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-batch-details',
  imports: [CommonModule],
  templateUrl: './batch-details.component.html',
  styleUrl: './batch-details.component.css'
})
export class BatchDetailsComponent {
  
  public Batch : any = []

  public constructor(private batchobj : BatchService)
  {
    this.Batch = batchobj.getBatches()
  }
}
