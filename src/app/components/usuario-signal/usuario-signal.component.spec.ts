import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioSignalComponent } from './usuario-signal.component';

describe('UsuarioSignalComponent', () => {
  let component: UsuarioSignalComponent;
  let fixture: ComponentFixture<UsuarioSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsuarioSignalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
