import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-marvellous-form',
  standalone : true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './marvellous-form.component.html',
  styleUrl: './marvellous-form.component.css'
})
export class MarvellousFormComponent {

  MarvellousForm = new FormGroup(
    {
      FirstName : new FormControl(''),
      LastName : new FormControl(''),
      Email : new FormControl(''),
      PhoneNumber : new FormControl(''),
      Address : new FormControl('')
    }
  );
}
