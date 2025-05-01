import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { batches } from './Batches';

@Injectable({
  providedIn: 'root'
})
export class BatchesService {

  public URL = "src\app\batches.json"

  constructor(private http : HttpClient) { }

  public getBatches() : Observable<batches[]>
  {
    return this.http.get<batches[]>(this.URL)
  }
}
