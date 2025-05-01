import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvellousFormComponent } from './marvellous-form.component';

describe('MarvellousFormComponent', () => {
  let component: MarvellousFormComponent;
  let fixture: ComponentFixture<MarvellousFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarvellousFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarvellousFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
