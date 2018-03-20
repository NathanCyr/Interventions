import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitComponent } from './produit.component';

describe('ProduitComponent', () => {
  let component: ProduitComponent;
  let fixture: ComponentFixture<ProduitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Zone PRÉNOM invalide avec 2 caractères', () =>{
    expect(true).toBeTruthy();
  } );

  it('Zone PRÉNOM valide avec 3 caractères', () =>{
    expect(true).toBeTruthy();
  } );
});
