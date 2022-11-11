import { TestBed } from '@angular/core/testing';

import { KontakService } from './kontak.service';

describe('KontakService', () => {
  let service: KontakService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KontakService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
