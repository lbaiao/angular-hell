import { TestBed } from '@angular/core/testing';

import { Comp1Service } from './comp1.service';

describe('Comp1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Comp1Service = TestBed.get(Comp1Service);
    expect(service).toBeTruthy();
  });
});
