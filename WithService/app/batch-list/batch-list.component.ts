import { Component } from '@angular/core';
import { BatchService } from '../batch.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-batch-list',
  imports: [CommonModule],
  templateUrl: './batch-list.component.html',
  styleUrl: './batch-list.component.css'
})
export class BatchListComponent {

  public Batch : any = []

  public constructor(private batchobj : BatchService)
  {
    this.Batch = batchobj.getBatches();
  }
}
