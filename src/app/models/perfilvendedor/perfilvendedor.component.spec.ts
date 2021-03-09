import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilvendedorComponent } from './perfilvendedor.component';

describe('PerfilvendedorComponent', () => {
  let component: PerfilvendedorComponent;
  let fixture: ComponentFixture<PerfilvendedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilvendedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilvendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
