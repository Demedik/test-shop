import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLoadMoreComponent } from './product-load-more.component';

describe('ProductLoadMoreComponent', () => {
  let component: ProductLoadMoreComponent;
  let fixture: ComponentFixture<ProductLoadMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductLoadMoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductLoadMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
