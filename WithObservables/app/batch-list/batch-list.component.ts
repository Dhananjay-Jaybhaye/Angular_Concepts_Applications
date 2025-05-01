import { Component } from '@angular/core';
import { BatchesService } from '../batches.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-batch-list',
  imports: [CommonModule],
  templateUrl: './batch-list.component.html',
  styleUrl: './batch-list.component.css'
})
export class BatchListComponent {
  public batches : any = []

  public constructor(private sobj : BatchesService)
  {
    sobj.getBatches().subscribe(data => this.batches = data)
  }
  }


